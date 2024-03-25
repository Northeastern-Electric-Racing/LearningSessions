# Rust Learning Session

### Workshop Description

This workshop introduces people to the rust language through a simple networking task.
We will be connecting a socket from our rust app to a server in order to receive data from the server.

This will involve parsing the host and port from the command line and then configuring a TCP socket to connect to the tcp server hosted on our server

### Parsing command line arguments

Command line arguments are retrieved via `std::env::args()`

This function returns a vector of strings that represents the arguments supplied to the application starting at index 1, as 0 is the name of the application itself

Your task is to parse out the host and port from the arguments, then pass that to a ProxySocket and return the ProxySocket so that the main function is able to use it. 

This is trickier than it seems having to deal with rusts ownership issues. The rust compiler is very helpful in telling you what you can and cannot do. 

### Testing

Run `docker-compose build` then `docker-compose up` to load and start your current code. If you see a repeated value of "Hello from TCP Server" then you have done it correctly. 