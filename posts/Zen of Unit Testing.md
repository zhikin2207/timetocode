Ability to write good unit tests is an important feature of any developer. But how to understand that your unit tests are correct? Good unit test is like a good chess game. In our case chessmen are the approaches which we are going to discuss in this post. There is no best chessman in a chess game because everything depends on the positions *(and a player)*. Likewise, in unit testing you don't have to distinguish only one approach. In other words, you should use all approaches together to get the best result. So, if you want to win this game, then welcome under the cut. 

<!--more-->

## Début 

### Why should I write unit tests?
You don't have to write unit tests unless you are a person with extrasensory perception who can write code without bugs, you have super memory, can compile your code in your head or you just like pain. Otherwise, you definitely have to write unit tests, because they decrease count of bugs in new and existing features, reduce cost and fear to change your features and allow refactoring your code. Moreover, you should always run existing tests and I recommend you to pay attention on continuous testing tools.

### What to test?
Obviously, in unit test you are testing behaviour of some separate unit *(not invocations, because they can be changed later)*. Also, make it a rule to cover with unit tests all the bugs which you have found to prove they are fixed. What about code coverage? Code coverage is not a goal, it is just a measure which helps you understand which part of logic you forgot to cover with unit tests. It would be a huge mistake when you decide to cover every line of code with unit tests.

## Mittelspiel 

### Test only one thing
Do not confuse unit testing with [integration testing][integration-testing] where testing more than one thing is normal. The idea of unit testing is to prove that a separate application module works or not. You have to understand easily and certainly which behaviour in your code fails and how to fix it. **How many asserts should you use? One!** Using many asserts may be the code smell that you are testing more than one thing. Moreover, there is a chance that somebody can add new assert into your test instead of writing another one. And how can you understand how your other asserts completed when the first one failed?

[integration-testing]: https://en.wikipedia.org/wiki/Integration_testing

### Avoid logic
Bugs in tests are the most difficult things to find for developers. The chance to get a bug in your test code increases as you decided to add logic into your test. It becomes harder to read, understand and maintain. Using `for`, `foreach`, `if`, `switch` and other operators in a test may also be a code smell that you are testing more than one thing.

### AAA
The **Arrange, Act, Assert** is a commonly used pattern which helps to organize your test code into three phases accordingly. It clearly separates what is being tested from the setup and verification steps. This is one of the best practices and it makes your test code more readable and maintainable. Having said that, don't use AAA **comments** in your tests if you want to keep you code clean and readable. Competently created test expresses AAA idea even without comments.

### Stick to the naming convention
Test names should be descriptive and understandable not only for its author. There are a lot of test naming strategies, but I like the [Roy Osherove's][ro-tests-naming] one: `[MethodName_StateUnderTest_ExpectedBehavior]`. It has all necessary information about test in formatted way. It is easy to follow this strategy for any developer.

Examples:

```csharp
public void Sum_NegativeNumberAs2ndParam_ExceptionThrown ()

public void Sum_simpleValues_Calculated ()

public void Parse_OnEmptyString_ExceptionThrown()

public void Parse_SingleToken_ReturnsEqualTokenValue ()
```

But pay attention that you may have naming convention which you have to follow on your current project. Don't mix them up.

[ro-tests-naming]: http://osherove.com/blog/2005/4/3/naming-standards-for-unit-tests.html

### Test data preparation
Constructing test data can bring mess and suffering into your tests code. You can face with this situation when:

* you have to change the constructor of your model in every piece of code where this model is created *(this usually happens when your model is immutable)*;
* you have a lot of code duplicates when building your test data;
* you have to pass a lot of "magic data" into your model constructor *(e.g. `new Device("Stub", 10, true, "http");`)*;
* you have feeling that you need to create a kind of random data generator;
* it is difficult for you to build tests data collections. 

With this in mind, you have to consider some common alternatives: [Object mother][object-mother] and [Fluent test data builder][test-data-builder]. This approaches are also good team players, so you can use them together.

Do not use random data, because your test may be sensitive to some kind of values. As a result you can get evil [heisenbug][heisenbug] in your test which is difficult to find and reproduce.

[object-mother]: http://martinfowler.com/bliki/ObjectMother.html
[test-data-builder]: https://www.kenneth-truyers.net/2013/07/15/flexible-and-expressive-unit-tests-with-the-builder-pattern/
[heisenbug]: https://en.wikipedia.org/wiki/Heisenbug

### Learn your testing framework
Learn all the attributes, assertions and other features of your testing framework. It helps you to make your tests more readable and elegant. For example in [NUnit][nunit] framework you can use two assertions models and you can choose one which you like the most:

```csharp
Assert.AreEqual(StatusCode.OK, response.StatusCode);
```

or

```csharp
Assert.That(StatusCode.OK, Is.EqualTo(response.StatusCode));
```

Do not forget about setup and teardown methods, TestCase and Category attributes, collection asserts. Do not confuse expected and actual result parameters in assertions.

[nunit]: http://www.nunit.org/

## Endspiel
Your test code has the same privilege as your production code which you have to write and maintain, do not forget about SOLID principles. Also, your unit tests should be readable and there are several reasons why. Firstly, the intention of your tests should be understandable and clear. It means that you don't have to waste your time while reading your tests. Secondly, it should be easy to maintain your tests, detect and eliminate troubles without debugging.

Unit testing is a huge philosophy which can not be discussed just in one post. Here I explained common approaches and frequent questions related to unit testing. If you want to dive deeper you may found this links interesting:

* [Roy Osherove blog][ro-blog]
* [Roy Osherove book, "The Art of Unit Testing"][ro-book]

[ro-blog]: http://osherove.com/blog/
[ro-book]: https://www.amazon.com/Art-Unit-Testing-examples/dp/1617290890

> Keep calm and unit test!

Hope you liked the post and thank you for reading my blog.
