Ok, you read the [previous post](https://timetocode.wordpress.com/2016/05/16/vim-for-beginners/) and decided to learn VIM and this is awesome. Let's make sure you are doing it right. Your fingers got used to `hjkl` navigation and you also know how to change modes from one to another. If it is true, so you are ready. 

In this post we will speak about VIM language and consider some of VIM modes deeper.

<!--more-->

## Level 2 - Confidence

### Getting insert mode
You know you can enter this mode by pressing `i` on a keyboard. Let's think that `i` stands for *insert* as insert text before cursor. You can also press `a` which stands for *append* as append text after cursor. It is easy to intensify these commands by changing the case, so result would be the following: `I` inserts text before the first non-blank in the line and `A` appends text at the end of the current line.

To make you future work more pleasant you have to know command `o` which appends new blank line after the current and `O` which does the same but before the current line.

These are the most often used insert mode-switching commands in VIM. If you adjust to `hjkl` navigation it will take a couple of days to get used to these commands. The more you sweat in training, the less you bleed in war.

### Normal mode
Before we start to learn VIM language we should also improve our navigation skills. In this question command `f` (stands for *find*) will help us. This command is used to navigate within the current line. You type `f` and a letter to which you want to move the cursor. `fP` moves cursor from current position to the first occurrence of letter *P*. You can power up this command to `F` which does the same but changes the side of the search.

### VIM language
Now it is the time to become a crazy geek. You should "speak" with VIM in the normal mode otherwise it would be something else. Firstly, lets consider some constructions of VIM language:

#### Nouns: 
* `w` - word
* `s` - sentence 
* `p` - paragraph
* `b` - (block/parentheses)
* `t` - tag
* braces
* quotes

#### Verbs:
* `v` - visual
* `c` - change (delete text and switch VIM into *insert* mode)
* `d` - delete and copy (delete text and leave VIM in *normal* mode)
* `y` - yank (means copy)

#### Adverbs:
* `i` - inside
* `a` - around
* `t` - till
* `f` - find

Pay attention that these commands may work by itself not so as you expected. Moreover, when you create VIM sentence, it should be sufficient and all constructions should be on theirs place, otherwise you will get another result. Now let's create some easy VIM sentences as an example:

* `ciw` - change inside word - deletes whole word under cursor and switches to insert mode, unlike `cw` which deletes word from cursor to the end of this word.
* `cis` - change inside sentence.
* `ci"` - change inside " brace - deletes all text between " braces.
* `da}` - delete around } brace - deletes all text inside curly braces including them.
* `vip` - visual inside paragraph - selects all paragraph.
* `ctp` - change till p - delete everything from here to the letter *p*.

![VIM sentence command][ciw]

To expand your VIM language right now I suggest you to learn new VIM construction - number modifier. Let's consider the following code:

```js
function foo() {
    function bar() {
        // some code here
    }
}
```

And you want to remove all code inside *{}* of `foo` function. Using number modifier it is easy to do. Just type `2ci{` - change inside curly braces 2 times.

![VIM sentence command][2ci{]

Number modifier works not only in sentences but it works almost everywhere:

* `5j` - moves cursor down 5 times. 
* `2fK` - moves cursor to the second occurrence of litter *k* in the line.
* `2iHello <ESC>` - insert `Hello ` 2 times.

## Be persistent
As you learn VIM you will find some new language constructions and expand your VIM language. Day by day it would be easier to "speak" with VIM. All the commands and language constructions are tightly coupled and created to maximize you performance, and it is proved by more than 20 years of VIM existence. [Next time](https://timetocode.wordpress.com/2016/05/24/vim-for-beginners-part-3/) we will complete our VIM knowledge and speak about future development.

Thank you for reading my blog and have a nice day.

[ciw]: https://timetocode.files.wordpress.com/2016/05/ciw.gif "ciw command example"
[2ci{]: https://timetocode.files.wordpress.com/2016/05/2ci.gif "2ci{ command example"
