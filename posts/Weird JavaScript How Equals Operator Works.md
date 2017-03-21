Hi, friends. As you know JavaScript is a kind of weird language, at least it seems like for the first time. And what I am going to do is to improve your impression with this category of articles. So welcome to the Weird JavaScript.

And in this first post we are going to talk about equals operator (<span style="color:#d34c62;"><code>==</code></span>). Is there anything can be unclear here? Definitely, everything is understandable for you, just make sure you can answer this questions without any hesitation.

[code lang="javascript"]
1 == '1'
[] == false
NaN == NaN
+0 == -0
null == null
null == undefined
[] == []
[/code]

If you are not sure in your answers or you just want to get the results, this short post is worth your attention.

<!--more-->

To make long story short, let's take a look at the abstract comparison algorithm which I made for you in a form of a graph. But pay attention that you can <strong>switch parameters</strong> on any step.

<img src="https://timetocode.files.wordpress.com/2017/01/equality-comparison-js.png" alt="Abstract Equality Comparison Algorithm JavaScript" />

For now, I suppose, everything is understandable for you except <span style="color:#d34c62;"><code>ToNumber</code></span> and <span style="color:#d34c62;"><code>ToPrimitive</code></span> functions. But there nothing difficult in them too.

<h2>ToNumber function</h2>

There are a lot of ways how to convert anything to a number in javascript. That is why we use <span style="color:#d34c62;"><code>ToNumber</code></span> which is an abstract function that converts its argument to a value of type Number. 
<span style="color:#d34c62;"><code>undefined</code></span> becomes <span style="color:#d34c62;"><code>NaN</code></span>
<span style="color:#d34c62;"><code>null</code></span> becomes <span style="color:#d34c62;"><code>0</code></span>
<span style="color:#d34c62;"><code>true</code></span> becomes <span style="color:#d34c62;"><code>1</code></span>
<span style="color:#d34c62;"><code>false</code></span> becomes <span style="color:#d34c62;"><code>0</code></span>

Strings with mathematical values become these number values:
<span style="color:#d34c62;"><code>'0'</code></span> becomes <span style="color:#d34c62;"><code>0</code></span>
<span style="color:#d34c62;"><code>'42'</code></span> becomes <span style="color:#d34c62;"><code>42</code></span>
<span style="color:#d34c62;"><code>'-100'</code></span> becomes <span style="color:#d34c62;"><code>-100</code></span>
<span style="color:#d34c62;"><code>'[space]0.01'</code></span> becomes <span style="color:#d34c62;"><code>0.01</code></span>
<span style="color:#d34c62;"><code>0xA</code></span> becomes <span style="color:#d34c62;"><code>10</code></span>

Any spaces or empty string become <span style="color:#d34c62;"><code>0</code></span> and other strings become <span style="color:#d34c62;"><code>NaN</code></span>.

<h2>ToPrimitive function</h2>

<span style="color:#d34c62;"><code>ToPrimitive</code></span> is also an abstract function which converts input argument to primitive type. 
1. In general, if object has <span style="color:#d34c62;"><code>valueOf</code></span> method and it returns a primitive, then return it. 
2. Otherwise, if object has <span style="color:#d34c62;"><code>toString</code></span> method and it returns a primitive, then return it. 
3. Otherwise trow an exception.

true examples:

[code lang="javascript"]
'[object Object]' == {} 
42 == { valueOf: () => 42 }
42 == { valueOf: () => 42, toString: () => 0 }
0 == { toString: () => '0' }
[/code]

exception example:

[code lang="javascript"]
0 == Object.create(null)
[/code]

<h2>Wrap up</h2>

Looks like it is everything you need to know about equals operator. To dig a bit deeper, take a look at <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.9">ECMAScript Language Specification</a>.

Hope you liked this post and thank you for reading my blog :)
