# Rust Learning Session

### Workshop Description

This workshop introduces people to the rust language through a simple networking task.
We will be connecting a socket from our rust app to a server in order to receive data from the server.

This will involve parsing the host and port from the command line and then configuring a TCP socket to connect to the tcp server hosted on our server

### Parsing command line arguments

Command line arguments are retrieved via `std::env::args()`

This function returns a vector of strings