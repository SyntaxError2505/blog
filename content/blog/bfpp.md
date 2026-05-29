# Brainfuck++
A better Brainfuck.
## Normal bf syntax
As anyone knows, brainfuck is a language made to controll, change and output the elements of an unlimited array of integers. The size of those integers varries on implementation but bf normally uses signed bytes (8 bit ints) bf++ usees 64 bit signed integers to represent single indicies. Also, the array will be shrunken down from infinite to 0xFFFFFFFFFFFFFFFF which is the maximum of what a 64 bit unsinged integer can be. This is a limitation that is actually not part of the brainfucks spec, but makes sense since 64 bit computers cannot index more values. There is a cursor on the array which is called the "data pointer". Some operations change it but most read it and use it to select an element of the array.
Code is written inside another list of single-char operators. Those are:  
- '>': Increment the data pointer ('s for markdown to stop crying)
- <: Decrement the data pointer
- +: Increment the current element by 1
- -: Decrement the current element by 1
- .: Output the current element as ascii
- ,: Accept one ascii byte 
- [: Start a [] scope
- ]: If the current element is 0, jump BACK to the last [  

any other character will not be ran and counts as a comment

## bf++ syntax
### Comments
There is only one type of comment. Putting an `#` anywhere in code will make evaluation skip the next code until a newline happens.  

Examples:  
```bfpp
++-- # This is a comment, "++--" will still be executed  
# This comment spans the whole line  
#This is ugly but works  
```  

### Scope
#### Concept
You know how there are {} in some languages? While they have different uses in e.g. C or JS, their most important job is showing scope. This could be in functions, if statements, loops or just standalone scopes. We are bringing that exact same feature to brainfuck. While code still executes line by line, char by char, you can put snippets inside it. Since there are no variables, it doesn't actually scope anything. Changes to the array still apply and will be saved even when it is exited. This is an easy way to organise code but also to put it in groups so later features apply. Scoped code will run as long it is not a part of a [label](#Labels). 
#### Syntax
New operators:
- {: Start a scope
- }: End a scope  

Any start needs an end. If a close is found, it will close the LATEST start.

### Quick loops
Any integer in the code will trigger a search for the next operator. Most operators will then be repeated the amount of the integer before. If the next operator is a [{](#Scope), any code inside the scope is going to be repeated. If the next operator is a [label](#Labels) or a }, it will error out. Spaces between 2 numbers will be disregarded and make the number count as one by concatinating both together.  

Example:  
```bfpp
4+ # Will repeat '+' 4 times  
62{++-} # Will repeat '++-' 62 times
```

### Labels
Labels are the main feature of brainfuck++. They are basically just the labels you know out of assembly or "scopeless, argumentless, return-less" functions. 
#### Syntax
Labels introduce a lot of new operators:  
- &: define a new label with the name and code following.   
- $: Call a label  
- $: end a label call  

A label definition looks like this:  
```bfpp
&my_label {  
++-->><<  
}  
```

A label call looks like this:  

```
++--&my_label&++--  
```

Label names are not allowed to include operators/#s/anything-that-does-not-make-sense. Kebab Case is undefined behaviour since - is an operator. Spaces inbetween parts so the name will be automatically removed.  
## How to make and publish an interpreter:
### General rules for interpreters:  
- Backwards compatible with brainfuck.
- Stdout/in based io
- Endorse .bfpp filetype
- Possible support for unix-style shebangs (comments are #s so it should work)  

### List of endorsed interpreters:
#### How to get in:
Your interpreter:
- Needs to be at-least source available with repository updates every release. OpenSource is of course the standard. We recommend using Github, Gitlab or codeberg  
- Can use any license you want that allows for users to: clone the code, build it themselves, use their own versions and publish unmonitized forks.  
- Needs to be written in a compiled language and be easily built to an executable. Python is allowed, JavaScript and Java are not. E-Mail me at **mr.sascha.cherevko@gmail.com** for questions about tool choice
- Is not allowed ot be brainlessly and purelly vibecoded. Expect quality checks including amout ot comments  
Write to mr.sascha.cherevko@gmail.com if you have questions or want to get in
#### The List:
**empty noises**
