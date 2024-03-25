use std::io::Error;

/**
 * Receiver trait for an object that can receive data.
 * @method: receive - The method that receives data from the server in the form of an array of bytes
 */
pub trait Receiver {
    /* Receive the data, returns an array of bytes or an error, must be called after receiver has connected, self is mutable so that we can mutate the struct that implements the function to be able to read from whatever connectiono we have */
    fn receive(&mut self) -> Result<Vec<u8>, Error>;
}
