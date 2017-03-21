In the [previous article](https://timetocode.wordpress.com/2016/04/19/linq-to-objects-deep-inside-part-1/) we tried to understand how linq extension methods work on the example of linq Select method by revealing all its magic and writing our custom `AwesomeSelect` method. Today we will understand how linq functions work along with others and talk about the difference between deferred and immediate execution in linq to objects.

<!--more-->

## AwesomeWhere
Following the same idea from the last article we will create our own extension method which will work the same as linq Where method. Then we will join this method with `AwesomeSelect` and see how they work together. 

If you don't know what `AwesomeSelect` is, please read the [previous article](https://timetocode.wordpress.com/2016/04/19/linq-to-objects-deep-inside-part-1/).

So, first of all we need to add our custom extension method.

```csharp
public static IEnumerable<T> AwesomeWhere<T>(
    this IEnumerable<T> values, 
    Func<T, bool> where)
{
    return new AwesomeWhereSequence<T>(values, where);
}
```

Nothing special. This method takes `IEnumerable` of T and returns it back, but before it applies filter function. As a result we have `AwesomeWhereSequence` which extends `IEnumerable`. Let's see the following piece of code:

```csharp
public class AwesomeWhereSequence<T> : IEnumerable<T>
{
	private readonly IEnumerable<T> _values;
	private readonly Func<T, bool> _where;

	public AwesomeWhereSequence(
        IEnumerable<T> values, 
        Func<T, bool> where)
	{
		_values = values;
		_where = where;
	}

	public IEnumerator<T> GetEnumerator()
	{
		var enumerator = _values.GetEnumerator();
        
		return new AwesomeWhereEnumerator<T>(
            enumerator, 
            _where);
	}

	IEnumerator IEnumerable.GetEnumerator()
	{
		return GetEnumerator();
	}
}
```

As it extends `IEnumerable`, it implements `GetEnumerator()` methods and returns `AwesomeWhereEnumerator`. The next piece of code demonstrates this.

```csharp
public class AwesomeWhereEnumerator<T> : IEnumerator<T>
{
	private readonly IEnumerator<T> _enumerator;
	private readonly Func<T, bool> _where;

	public AwesomeWhereEnumerator(
        IEnumerator<T> enumerator, 
        Func<T, bool> where)
	{
		_enumerator = enumerator;
		_where = where;
	}

	public T Current
	{
		get { return _enumerator.Current; }
	}

	object IEnumerator.Current
	{
		get { return Current; }
	}

	public bool MoveNext()
	{
		bool hasMoreElements;

		do
		{
			hasMoreElements = _enumerator.MoveNext();

			if (!hasMoreElements)
			{
				return false;
			}
		} while (!_where(Current));

		return hasMoreElements;
	}

	public void Reset()
	{
		_enumerator.Reset();
	}

	public void Dispose()
	{
		_enumerator.Dispose();
	}
}
```

`Dispose()`, `Reset()` and `Current` are just proxies of the same methods on the source enumerator, so they are not interesting for us. We will pay attention to the `MoveNext()` method. When a client code *(e.g. foreach loop)* accessing this method it spins till the filter function `_where(Current)` will not stop the loop and the `Current` property will be relevant according to this function. Next calls of `MoveNext()` will do the same until the elements end. Let's see how we can combine 2 functions together and what will be. 

```csharp
List<string> emails = new List<string> { "a", "ab", "abc", "abcd" };

IEnumerable<int> query = emails
    .AwesomeWhere(e => e.Contains('b'))
    .AwesomeSelect(e => e.Length);

foreach (var r in query)
{
    Console.WriteLine(r);
}
```

It works just fine. We can imagine `query` variable represented as the following code:

```csharp
new AwesomeSelectSequence<string, int>(
	new AwesomeWhereSequence<string>(
		emails, 
		e => e.Contains('b')), 
	e => e.Length);
```

And in order to completely understand what is going on we should perform at least one foreach iteration in our mind.


* Firstly foreach loop calls `MoveNext()` on enumerator of `SelectSequence` which just calls `MoveNext()` on enumerator of `WhereSequence`. `WhereSequence` spins the loop inside this method applying filter function and stops the loop when `Current` element is relevant. 
* Then foreach calls `Current` property on enumerator of `SelectSequence` which applies map function on the `Current` property of enumerator of `WhereSequence`.

When you understand all this magic you can notice that actually nothing happens until the foreach loop starts working. You can even add new element after defining `query` like in the following code:

```csharp
List<string> emails = new List<string> { "a", "ab", "abc", "abcd" };

IEnumerable<int> query = emails
    .AwesomeWhere(e => e.Contains('b'))
    .AwesomeSelect(e => e.Length);

emails.Add("abcde");

foreach (var r in query)
{
    Console.WriteLine(r);
}
```

The result will be *2 3 4 5*. And this is because `query` does not contain the actual result of execution. But working with linq you may notice that there are some methods are which executed immediately (e.g. Count method).

## AwesomeCount
To understand what is going on we will create our own extension method `AwesomeCount` which as usual will have the same functionality as linq Count. It is simple method which contains all its logic in extension method. So let's stop talking and see the code:

```csharp
public static int AwesomeCount<T>(
	this IEnumerable<T> values, 
	Func<T, bool> where)
{
	int count = 0;

	using (var enumerator = values.GetEnumerator())
	{
		while (enumerator.MoveNext())
		{
			if (where(enumerator.Current))
			{
				count++;
			}
		}
	}

	return count;
}
```

It takes `IEnumerable` of T source and filter function and runs the loop iterating all the source elements and counting ones which match to the filter function. As you can understand, in order to return count of elements it has to iterate them. So by calling `Count()` function you have to execute enumerable chain. And actually this is the main difference between deferred and immediate execution in linq to objects.  

The last thing I want to say is despite the title of this article, all the examples were artificially invented to make you superficially understand how it works under the hood. The real linq methods are more complicated and you can make sure by following [this link](http://referencesource.microsoft.com/#System.Core/System/Linq/Enumerable.cs).

Hope you liked the article and thank you for reading my blog. 