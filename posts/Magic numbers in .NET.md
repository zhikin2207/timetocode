Numbers are all the way and around us. Here we will also talk about numbers. Moreover, in this post we will try to gather valuable constants for our knowledge. The main idea is to make a kind of handbook of interesting and useful numbers for .NET developers. 

<!--more-->

## Why is this important?
New numbers may help to detect unknown knowledge areas. Some of this numbers may be asked on the interview. And finally, numbers are also a kind of information which we absorb every day. So if you have something to add then feel free to suggest your numbers in the comments below.

## Let's get started

The C# reference size is obviously **32 bits** in 32 bit OS, and **64 bits** on a 64 bit OS. In future, I will speak only about 32 bit OS. 

The empty string size in .NET 4+ is **16 bytes**. (**4 bytes** to store string length + **4 bytes** for sync-block + **4 bytes** for the type-object pointer + **2 bytes** per each character in the string (in our case only for 0 char). The memory allocated for objects is always multiple of **4 bytes** long and its minimum size is **16 bytes**.

Default List<T> capacity is **0**. But with the first `Add` method it grows up to **4** and keeps doubling when expansion is needed. *(So it worth thinking about collection initialization and `AddRange` method)*.

Garbage collector (GC) has **3** generations *(0, 1 and 2)*. Almost all newly created objects belong to **Generation 0** and allocated in a small heap. Objects which are larger than **85000 bytes** belong to **Generation 2** and allocated in large object heap *(LOH)*.

The default thread stack size is **1 Mb**.

If you are using IIS for hosting your ASP.NET application, then there are some defaults. Default request content length is **4Mb**. The default value of concurrent requests per application is **5000**. The default number of requests that Http.sys queues for the application pool is **1000**. The default connection timeout is **120 sec**.

## Wrap up
This post is not completed yet, because there are a lot of numbers which should be added later. So let's complete it together by adding new numbers in comments and I will update the post.

Thank you for reading my blog.
