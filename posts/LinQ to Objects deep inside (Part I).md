The best way to understand how "LinQ to objects" (in future just linq) works is to create a method by yourself. We will write the `AwesomeSelect` method which has the same functionality as real linq Select method. If you are interested in then welcome under the cut.

<!--more-->

## AwesomeSelect
Select method is an extension of `IEnumerable`, so let's open our favourite editor *(e.g. [VIM](https://timetocode.wordpress.com/2016/05/16/vim-for-beginners/))* and create our `AwesomeSelect` extension.

```csharp
public static class EnumerableAwesomeExtensions
{
    public static IEnumerable<To> AwesomeSelect<From, To>(
        this IEnumerable<From> source, 
        Func<From, To> map)
    {
            return new AwesomeSelectSequence<From, To>(source, map);
    }
}
```

This method takes `IEnumerable<From>` source and function which maps values of source type into To type. And returns `IEnumerable` represented by custom select sequence. 

```csharp
public class AwesomeSelectSequence<From, To> : IEnumerable<To>
{
	private readonly IEnumerable<From> _values;
	private readonly Func<From, To> _map;

	public AwesomeSelectSequence(
		IEnumerable<From> values, 
		Func<From, To> map)
	{
		_values = values;
		_map = map;
	}

	public IEnumerator<To> GetEnumerator()
	{
		var enumerator = _values.GetEnumerator();
		
		return new AwesomeSelectEnumerator<From, To>(
			enumerator, 
			_map);
	}

	IEnumerator IEnumerable.GetEnumerator()
	{  
		return GetEnumerator();
	}
}
```

This sequence as any `IEnumerable` object returns `IEnumerator`. In our case this `Enumerator` is custom and all the magic lives here. Let's look at the following piece of code.

```csharp
public class AwesomeSelectEnumerator<From, To> : IEnumerator<To>
{
	private readonly IEnumerator<From> _enumerator;
	private readonly Func<From, To> _map;

	public AwesomeSelectEnumerator(
		IEnumerator<From> enumerator, 
		Func<From, To> map)
	{
		_enumerator = enumerator;
		_map = map;
	}

	public To Current
	{
		get
		{
			return _map(_enumerator.Current);
		}
	}

	object IEnumerator.Current
	{
		get
		{
			return Current;
		}
	}

	public bool MoveNext()
	{
		return _enumerator.MoveNext();
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

This class works over `IEnumerator<From>` of our source except property `Current`. When client code accessing `Current` property we just apply our map function to `Current` element of source and return the result.

The result of our work is the following:

```csharp
string[] emails = { "a", "ab", "abc", "abcd" };

IEnumerable<int> result = emails.AwesomeSelect(e => e.Length);

foreach (var r in result)
{
	Console.WriteLine(r);
}
```

If you want to deep more you are welcome to read my [next article](https://timetocode.wordpress.com/2016/04/25/linq-to-objects-deep-inside-part-2/).	
