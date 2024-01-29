# Intro to C

Welcome to our Introduction to C workshop!! In this workshop, you're going to create a traffic light in C.

# Task

You're job is to create a stoplight in C. This needs to:
1. Print `Green`, `Yellow`, `Red` in a loop, 1 second for yellow, 3 seconds for red, and 5 seconds for green (hint: maybe use a state machine and the `sleep()` function?)
2. Your code should be easily readable, i.e. no "magic numbers" (hint: think about using enums)
3. Bonus! If the user enters a value, the light will enter a "walk cycle" where it is red for 3 seconds the next time it turns red

# Building & Running your Project

For streamlining development (and because compiling C/C++ on Windows is kinda annoying) we are going to be using a Docker container to actually handle the compilation. Literally all this container is doing is providing a build environment with all the tooling we need.

>! Execute these in the `c` directory of the Learning Session repo

To build your project:
```
docker build -t ner-gcc .
```

To run your project:
```
docker run -it --rm ner-gcc
```

> Note that what is actually happening here is that you are compiling your C file into assembly, then into symbols, and then linking together to create an executable binary that can be run on your system. This docker method is just abstracting a lot of the system setup so y'all don't have to install stuff locally


# Tips & Tricks

1. Google is your best friend! Any libraries you need should be readily available
2. Enums exist in C just like other languages
3. Don’t forget State Machines
4. `sleep(int ms)` function can be used to pause for some time
5. `printf()` prints data to the console
6. '\n' is a keyword for the console that will print a newline (i.e. go to next line)
7. `fork()` can be used to enter a new process in the background. Pipes can be used to talk between threads. Here is some documentation on this https://stackoverflow.com/questions/14170647/fork-parent-child-communication
