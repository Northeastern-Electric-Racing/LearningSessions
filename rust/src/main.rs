use rust_learning_session::{proxy_socket::{self, ProxySocket}, receiver::Receiver};

/**
 * Parses the arguments passed to the program
 * Expects the arguments in the following format
 * @param: host - The host that we are connecting to
 * @param: port - The port that we are connecting to
 *
 * @returns: A receiver that can receive data from the server
 */
fn parse_args() -> Box<dyn Receiver> {
    let args: Vec<String> = std::env::args().collect(); // Get the arguments passed to the program
    if args.len() != 3 {
        eprintln!("Usage: {} <host> <port>", args[0]);
        std::process::exit(1); // Exit the program with an error code if the arguments are not in the correct format
    }

    let host_arg = &args[1];
    let port_arg = &args[2];
    let port_arg = match port_arg.parse::<u16>() {
        Ok(port) => port,
        Err(_) => {
            eprintln!("Port must be a number");
            std::process::exit(1); // Exit the program with an error code if the port is not a number
        }
    };
    let proxy_socket = proxy_socket::ProxySocket::new(host_arg.clone(), port_arg); // Create a new proxy socket, Must clone the host argument as it is a reference and will be dropped at the end of the function
    Box::new(proxy_socket) // Return the proxy socket as a receiver, Boxing the receiver allows us to return a trait object which is a trait that is not known at compile time}
}
/**
 * Main function that is the entry point for the program
 * Will parse the arguments and start the proxy server
 * Expects arguments in the following format
 * @param: host - The host that we are connecting to
 * @param: port - The port that we are connecting to
 */
fn main() {
    let mut receiver = parse_args(); // Parse the arguments

    loop {
        let data = receiver.receive(); // Receive data from the server
        match data {
            Ok(data) => {
                // Print the data that was received decoded as utf8
                println!("{}", String::from_utf8_lossy(&data));
            }
            Err(e) => {
                eprintln!("Failed to receive data: {}", e); // Print an error message if we failed to receive data
                break; // Break out of the loop if we failed to receive data
            }
        }
    }
}
