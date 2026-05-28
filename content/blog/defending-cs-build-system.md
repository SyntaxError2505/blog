# Defending C's build system
An opinion Piece on Make, Cmake, VS, Ninja, Meson and all the other Tools that keep C worthwhile
## How does it work
Currently, it works like this:  

![Image showing compilation pipeline](/images/defending-cs-build-system/compiler.png)

The programmer installs a bunch of libraries (this is going to be discussed in [Package Management](#package-management)), writes code, configures a generator like Meson or Cmake using their own programming language. The generator writes a file for a build system like Make or Ninja. Those just execute bash commands that utilise helper executables like pkgconfig and of course the main compiler which for most projects is still gcc. This might sound overcomplicated to programmers who use other lagnagues like Rust, Java Script or Python. They just go their languages official website, download an installer or copy a curl | sh command and have simple commands at hand to install libaries or build the project. A subset of C/C++ programmers that uses Visual Studio with the MSVC compiler also gets easy configuration in their IDE and can just run their code using a button. This article is about how the shown pipeline is faster, better and more fun than the standardised language tools like pip, cargo or npm.
## A better look at modern languages
With modern languages, I mean everything that can have a NPM-like experience, not being modern by syntax or release date. Those fit two standards:  
- Internal language tools: e.g. cargo or go
- External language tools: e.g. npm/bun... or pip/uv...  
  
Internal tools are provided by the lagnauges creators. You install rustup, it will automatically install the compiler and the cargo toolkit for creating and managing projects. If you install python, pip is not really included even if it was the most used package manager for the language for a good decade now. There is a bit of a pattern, older languages tend not to have intenal tools. This is for 2 connected reasons: while new languages are created in the form of compilers and interpreters. Older ones like Python (which is older then java btw) and Java Script were created in the form of a language standard. A big paper that described how the language works, what code produces what behaviour and what behaviour is undefined. Then groups and companies could build (and sell) their own tools around it. That is why C/C++ has 3 different compilers, JavaScript has way to many different runtimes and implementing a basic interpreter (for the language "Basic") was the first thing you did after creating a system. Nowadays, people think of a langauge and just implement it. There are some exceptions like Jai. Jai is being actively developed by Jonathan Blow and is not yet released. Even worse, he actively hints at making it proprietary or even selling the tools. Since the language already has cool projects (All of is games), is being actively marketed by giving it to tech influenzers like Tsoding or Primeagen who insist on loving it and we know a lot of its syntax, community projects to build their own Jai compilers were created.
## Package management
Package management for most languages looks like this:  
- create project
- install libraries using a tool like cargo
- installed libraries and versions are kept in a config and lockfile
- You can just import them

Some languages install packages system wide, some create a folder in the project. The first one can bloat up the system while the second one needs to reinstall the same packages for different projects and uses more disk space. Using C gives you some flexibility. You can "vendor" libraries by including their binaries or their code inside your project directory or you can install them system-wide using your systems package manager like winget, brew, apt or dnf. Vendoring binaries can make your project useless on different systems or architectures which is why nobody actually does it. Vendoring code will fill your repository up with code that you didn't write which takes up cloud space if you are hosting it on github, gitlab or codeberg. 
## Obvious problems
