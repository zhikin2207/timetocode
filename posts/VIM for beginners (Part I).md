As any developer, you are constantly developing. You are learning new technologies by reading books, watching online lessons, attending some courses, and so on and so forth. You know that if you stop learning, you become uncompetitive. But have you ever thought about your performance? How do you improve that? If you don't know how to answer than welcome under the cut.

<!--more-->

## Touch typing
This post is not about [touch typing](https://en.wikipedia.org/wiki/Touch_typing). Nevertheless this is the first answer on the question above. To understand the rest of this article you have to [manage touch typing](https://timetocode.wordpress.com/2016/06/09/touch-typing/).

## VIM Intro
![](https://timetocode.files.wordpress.com/2016/05/vim.png?w=680)

In this post I will tell you how to improve your coding speed, how to navigate in code faster and how to get rid of your computer mouse. So we will talk about [VIM](http://www.vim.org/about.php) (the best text editor known to the human kind). In unskilful hands it is just an awkward text editor, and no one knows how to exit from it. But actually, it is highly configurable text editor (or plugin to almost any IDE) built to allow you to manage your code in the most efficient way. VIM is not just text editor. Not to seem crazy, but imagine that you do not code, you speak with a computer. So your coding process may be built in the following monologue:

* here I will type: `string text = file.ReadAll();`
* create an empty line above this one
* move all lines with **todo** comments to the end of this file
* navigate to the function `GetDirectoryFiles` and copy all its content
* navigate to that "if" statement and replace its content with the text from the buffer

But if you want to dance, you have to pay the piper. To "speak" with VIM you have to learn language which has its own nouns, verbs, adjectives, etc. That is why VIM does not have shortcuts, it has sentences *(e.g. change inner tag)*. When you learn basics of this language you will be able to combine your own sentences depending on what you are going to do. Afterwhile you will understand that you don't need your mouse anymore. 

It is not easy to start learning this language because all its components should become your habit. And it is a painful challenge to yourself which can take at least 2 weeks, so think twice before you start. But if you overcome it, you will open a new world of your code managing.

> The primary benefit of quick data entry is not the time saved in data entry per second, but the increased chance that your hands can keep up with your brain. 

## Level 1 - Survive
The most distinctive feature of VIM is that it has modes. We can define the main 4 of them:

* **Normal** mode - here you can type text commands and do navigation. To enter this mode press `ESC`
* **Insert** mode - in this mode you can type text as in other editors. To enter this mode press `i`
* **Visual** mode - here you can select text. To enter this mode press `v`
* **Command** mode - editor commands *(like save, open, etc.)*. To enter this mode press `:`

Also you have to learn basic navigation which works in a normal mode. Forget about arrows because they are slow to work with. When you are typing, your fingers are usually placed in the middle of your keyboard. Left hand on **asdf** and right hand on **jkl;**. And usually you are navigating in your code up/down and rarely left/right. So navigation in VIM is the following:

* down - `j` *(looks like a down arrow)*
* up - `k`
* left - `h`
* right - `l`

To get used to basic movement you can play [VIM Adventures game](http://vim-adventures.com/). Actually this is all you have to know to get started. So install vim plugin on your favourite IDE and practice. In the [next post](https://timetocode.wordpress.com/2016/05/20/vim-for-beginners-part-2/) we will move to the level 2 and learn the basics of VIM language. 

Thank you for reading my blog. 
