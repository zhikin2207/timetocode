Recently, I had a task to display dependencies between project files according to some rules. I built a tree structure with all necessary information, but the most interesting part was to display it. In this post I will tell you about the easiest solution and maybe the best one I've found. If you are interested in, then welcome under the cut.

<!--more-->

## DGML magic
DGML (Direct Graph Markup Language) is XML-based Markup Language for [Directed Graphs](https://en.wikipedia.org/wiki/DGML). As DGML is used by Visual Studio tools to display lots of dependencies, you can easily view your custom graphs in Visual Studio 2010+. Everything you have to do is just describe your graph in the right way. For instance:

```xml
<?xml version='1.0' encoding='utf-8'?>
<DirectedGraph xmlns="http://schemas.microsoft.com/vs/2009/dgml">
  <Nodes>
    <Node Id="a" Label="a" />
    <Node Id="b" Label="b" />
    <Node Id="c" Label="c" />
  </Nodes>
  <Links>
    <Link Source="a" Target="b" />
    <Link Source="a" Target="c" />
  </Links>
</DirectedGraph>
```

Nodes are graph vertices, and links are directions from source to target. If you save this file with `.dgml` extension and open with Visual Studio, the result would be the following: 

![General graph](https://timetocode.files.wordpress.com/2016/07/graph-general.png)

You can drag your nodes, change layout, see the legend and do everything you want in VS. At least these features make DGML awesome, but this is not the end. So, let's dig a little bit deeper.

## DGML useful features

### Groups
You can easily group your nodes and other groups. What you have to do:

- create a node with attribute `Group="Expanded"` *(can be `Collapsed`)*;
- link all necessary nodes with this group;
- in every link specify attribute `Category="Contains"`.

See the following example:

```xml
<?xml version='1.0' encoding='utf-8'?>
<DirectedGraph xmlns="http://schemas.microsoft.com/vs/2009/dgml">
  <Nodes>
    <Node Id="a" Label="a" />
    <Node Id="b" Label="b" />
    <Node Id="c" Label="c" />
	<Node Id="d" Label="d" />
	<Node Id="GroupA" Group="Expanded" />
  </Nodes>
  <Links>
    <Link Source="a" Target="b" />
    <Link Source="a" Target="c" />
	<Link Source="a" Target="d" />
	<Link Source="c" Target="d" />
	<Link Category="Contains" Source="GroupA" Target="c" />
	<Link Category="Contains" Source="GroupA" Target="d" />
  </Links>
</DirectedGraph>
```

![General graph](https://timetocode.files.wordpress.com/2016/07/graph-group.png)

### Styles & Categories
You can apply styles to whole graph, nodes and links just by adding appropriate attributes to them. 

#### Graph style attributes:
- `Background` - background color
- `Stroke` - border color

#### Node style attributes:
- `Background` - background color
- `Stroke` - border color
- `StrokeThickness` - border thickness 
- `Foreground` - foreground color
- `Icon` - icon file path
- `FontSize` - text size
- `FontFamily` - text type
- `FontWeight` - text weight
- `FontStyle` - text style *(e.g. italic)*
- `Style` - texture *(can be `Glass` or `Plain`)*
- `Shape` - shape file path

#### Link style attributes:
- `Stroke` - arrow color
- `StrokeThickness` - arrow thickness
- `StrokeDashArray` - array to determine arrow dash sizes *(e.g. 2,2,5)*

Let's build an example: 

```xml
<?xml version='1.0' encoding='utf-8'?>
<DirectedGraph xmlns="http://schemas.microsoft.com/vs/2009/dgml">
  <Nodes>
    <Node Id="a" Label="a" Background="#007ACC" />
    <Node Id="b" Label="b" />
    <Node Id="c" Label="c" />
	<Node Id="d" Label="d" />
	<Node Id="GroupA" Group="Expanded" Stroke="#FF0000" />
  </Nodes>
  <Links>
    <Link Source="a" Target="b" />
    <Link Source="a" Target="c" />
	<Link Source="a" Target="d" />
	<Link Source="c" Target="d" StrokeDashArray="2,5,2" />
	<Link Category="Contains" Source="GroupA" Target="c" />
	<Link Category="Contains" Source="GroupA" Target="d" />
  </Links>
</DirectedGraph>
```

![General graph](https://timetocode.files.wordpress.com/2016/07/graph-styles.png)

Sometimes, it would be easier to organize your elements logically into different categories and apply styles for them. You can assign categories for nodes and links. And categories can also be based on the other ones. Talk is cheap, let's look the code: 

```xml
<?xml version='1.0' encoding='utf-8'?>
<DirectedGraph xmlns="http://schemas.microsoft.com/vs/2009/dgml">
  <Nodes>
    <Node Id="a" Label="a" Background="#007ACC" />
    <Node Id="b" Label="b" Category="Test" />
    <Node Id="c" Label="c" Category="Test" />
	<Node Id="d" Label="d" />
	<Node Id="GroupA" Group="Expanded" Stroke="#FF0000" />
  </Nodes>
  <Links>
    <Link Source="a" Target="b" />
    <Link Source="a" Target="c" />
	<Link Source="a" Target="d" />
	<Link Source="c" Target="d" StrokeDashArray="2,5,2" />
	<Link Category="Contains" Source="GroupA" Target="c" />
	<Link Category="Contains" Source="GroupA" Target="d" />
  </Links>
  <Categories>
    <Category Id="Test" Label="Test" Background="#0000FF"/>
  </Categories>
</DirectedGraph>
```

![General graph](https://timetocode.files.wordpress.com/2016/07/graph-categories.png)

The greatest flexibility you can achieve by using element `Style` which should be added to the section `Styles`. For every style should be specified `TargetType` attribute *(Node|Link|Graph)* to make DGML know about your source. `Style` contains elements `Setter` with attributes `Property` and `Value` and I think it is easy to figure out what should be there. We will see an example later.

### Conditional styles
Conditional style is a very useful DGML feature which is partly based on the ability to add custom attributes. So, to make some `<Style>` element work according to some condition we have to specify `Condition` elements inside. And the actual condition should be specified in the `Expression` attribute. The expression uses [Backus-Naur Form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form) (BNF) syntax. Let's look at the examples below:

```xml
<?xml version='1.0' encoding='utf-8'?>
<DirectedGraph xmlns="http://schemas.microsoft.com/vs/2009/dgml">
  <Nodes>
    <Node Id="a" Label="a" />
    <Node Id="b" Label="b" Category="Test" Random="4" />
    <Node Id="c" Label="c" Category="Test" Random="10" />
	<Node Id="d" Label="d" Random="15"/>
	<Node Id="GroupA" Group="Expanded" />
  </Nodes>
  <Links>
    <Link Source="a" Target="b" />
    <Link Source="a" Target="c" />
	<Link Source="a" Target="d" />
	<Link Source="c" Target="d" />
	<Link Category="Contains" Source="GroupA" Target="c" />
	<Link Category="Contains" Source="GroupA" Target="d" />
  </Links>
  <Categories>
    <Category Id="Test" Label="Test" />
  </Categories>
  <Styles>
    <Style TargetType="Node">
      <Condition Expression="HasCategory('Test')" />
      <Condition Expression="Random >= 10" />
      <Setter Property="Background" Value="#FF0000" />
      <Setter Property="StrokeThickness" Value="5" />
    </Style>
  </Styles>
</DirectedGraph>
```

![General graph](https://timetocode.files.wordpress.com/2016/07/graph-condition-styles.png)

## Conclusion
This is all I wanted to show, but there are a lot of things which are still uncovered. For now, you know the basic principle, so you can overcome almost any similar task. 

Hope you liked the post and have a nice day.
