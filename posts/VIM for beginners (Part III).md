This is the last post about VIM for beginners. You are on the way to become a VIM master. As you may found, this is not so easy to learn VIM and this is also talking about previous posts ([part 1][vim-part-1] and [part 2][vim-part-2]). When you feel the power in your hands using VIM, you will want something more and this is what this post about. We'll speak about some useful things you have to know before you can go by yourself. All topics will be discovered superficially in order to let you decide what you want. 

[vim-part-1]: https://timetocode.wordpress.com/2016/05/16/vim-for-beginners/
[vim-part-2]: https://timetocode.wordpress.com/2016/05/20/vim-for-beginners-part-2/

<!--more-->

## VIM is not an IDE
Yeah, VIM is not an IDE despite that you can setup it to perform almost all [IDE functions][vim-as-ide]. I am sure you won't leave your favorite Visual Studio or WebStorm and that is why I prepared the list of plugins for your IDE and not only IDE. Go ahead:

* [VSVim][vsvim] for VisualStudio
* [VS VIM][vscode-vim] for VSCode
* [IdeaVim][idea-vim] for WebStorm, IntelliJ IDEA (and other Jetbrains products)
* Sublime text has [Vintage mode][vintage] out of the box
* [Vim mode][atom-vim] for Atom
* [XVim][xvim] for XCode
* **Hardcore! Do not repeat this at home!** Google Chrome also has extensions for VIM-like navigation. *(find it in Chrome Store)*

Still, you have to keep in mind that the maximum performance can achieved by using just VIM. Basically, it is suitable for small js/html/css projects, editing configuration files or just as replacement of your notepad++ :) 

[vsvim]: https://visualstudiogallery.msdn.microsoft.com/59ca71b3-a4a3-46ca-8fe1-0e90e3f79329
[vscode-vim]: https://marketplace.visualstudio.com/items?itemName=vscodevim.vim
[idea-vim]: https://plugins.jetbrains.com/plugin/164?pr=idea
[vintage]: https://www.sublimetext.com/docs/2/vintage.html
[atom-vim]: https://atom.io/packages/vim-mode-plus
[xvim]: http://xvim.org/
[vim-as-ide]: http://vim.wikia.com/wiki/Use_Vim_like_an_IDE

## VIM plugins
VIM has thousands of [plugins][vim-plugins] for any caprice. Here you can found almost everything from file explorer and git integration to build systems. 

One of my favorite plugins is [EasyMotion][easy-motion]. It was created to speed up your navigation in VIM. EasyMotion is very sophisticated and deeply integrated within VIM philosophy. For example if you just want to navigate to a specific line behind the current one, you can do this by pressing `j` key several times. In comparison, with EasyMotion you can press leader key (in my case `TAB`) and `j` to highlight all the lines behind with different letters. All that has left to do is to press the letter which represents the line you need.

![EasyMotion](https://timetocode.files.wordpress.com/2016/05/easy-motion5.gif)

In my case I pressed `TAB` key and `ju` to navigate to the appropriate line. It was the easiest example and as usual, in the world of VIM you can craft almost any command according to your needs.

[vim-plugins]: http://vimawesome.com/
[easy-motion]: http://vimawesome.com/plugin/easymotion

## Mappings
This feature I decided to consider separately. You may think about mapping as key bindings for all modes. That is to say, you can bind some pattern to perform some actions in different modes. I know, nothing is understandable. 

So let's look at the easy and real example. Almost every person who works in VIM does not change mode from insert to normal by pressing `ESC`. We are doing it by pressing `jj` because we have the following mapping: `:imap jj`&lt;`ESC`&gt;. `imap` stands for insert mode mapping and means that it works only in insert mode. 

You can map everything you want to do and this will save your time in future. Read more about mapping [here](http://vim.wikia.com/wiki/Mapping_keys_in_Vim_-_Tutorial_(Part_1)).

## VIM features
There are a lot things to learn in VIM besides the features mentioned above. You definitely should pay attention to the following list:

* global commands
* search and replace
* macros and registers
* buffers
* tabs
* indents and foldings
* autocommands

They may exist in other development tools, but this is VIM. All things considered, it means that you will wonder how brilliant all this things are constructed. Check it out to make sure.

## Configuration
There are a lot of VIM settings which have to be stored somewhere in order to use the same settings for all editors with VIM plugin. And this is the responsibility of .vimrc file. By default, in Windows 10 this file is located in `C:\Users\Current_User`. Here you can setup all mappings, autocommands, plugins, colorscheme and all other settings. I've found pretty good article [how to setup your own .vimrc file][setup-vimrc] so you can practice by yourself. 

> Note: Don't put any lines in your .vimrc that you don't understand

[setup-vimrc]: http://dougblack.io/words/a-good-vimrc.html

## Awesome VIM courses:

* [Tuts+ Venture into VIM](http://code.tutsplus.com/courses/venture-into-vim)
* [Tuts+ VIM for Advanced Users](http://code.tutsplus.com/courses/vim-for-advanced-users)
* [Pluralsight Smash into VIM](https://www.pluralsight.com/courses/smash-into-vim)
* [Upcase Learn VIM](https://thoughtbot.com/upcase/vim)

![Master Yoda](https://timetocode.files.wordpress.com/2016/05/master-yoda.png)

> May the VIM be with you.

If you enjoyed the post, please follow up and thank you for reading my blog.
