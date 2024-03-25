/* Import Syntax from external libraries */
use std::{
    io::{Error, Read},
    net::TcpStream,
};

/* Use Crate For Internal Imports */
use crate::receiver::Receiver;

/**
 * ProxySocket struct that is responsible for managing our connection to the server
 * @member: stream - The TCP stream that we are connected to
 * @method: receive - The method that receives data from the server in the form of an array of bytes
 */
pub struct ProxySocket {
    stream: TcpStream,
}

/**
 * Implementation of the ProxySocket struct
 * Will include any methods that are specific to the ProxySocket struct
 */
impl ProxySocket {
    /**
     * Constructor for the ProxySocket struct, will automatically try to connect to the server
     * @param: host - The host that we are connecting to
     * @param: port - The port that we are connecting to
     */
    pub fn new(host: String, port: u16) -> ProxySocket {
        let stream = TcpStream::connect((
            host.as_str(), // Convert the host to a string slice, this is required by the connect method and does not move the host string which allows us to pass it to the ProxySocket struct
            port, // The port that we are connecting to, this is a u16 which can be copied so we can pass it to the ProxySocket struct
        ))
        .expect("Failed to connect to server"); // Connect to the server
        println!("Connected to server at {}:{}", host, port); // Print a message to the console that we have connected to the server
        ProxySocket { stream }
    }
}

/**
 * Implementation of the Receiver trait for the ProxySocket struct
 */
impl Receiver for ProxySocket {
    fn receive(&mut self) -> Result<Vec<u8>, Error> {
        let mut buffer = [0; 1024]; // Create a buffer to store the data
        self.stream.read_exact(buffer.as_mut())?; // Read the data from the stream into the buffer, Question mark operator '?', is used to return an error if the read fails. You can hover over it to see the error message
        Ok(buffer.to_vec())
    }
}
