# Use a Rust base image
FROM rust:latest as builder

# Set the working directory in the container
WORKDIR /usr/src/myapp

# Copy the Rust project files to the working directory
COPY . .

# Build the Rust application
RUN cargo build --release

# Start a new stage and use a lightweight base image
FROM ubuntu:latest

# Set the working directory in the container
WORKDIR /usr/src/myapp

# Copy the built binary from the builder stage to this stage
COPY --from=builder /usr/src/myapp/target/release/rust-learning-session .

# Expose any ports the app needs
EXPOSE 8000

# Command to run the Rust application
CMD ["sh", "-c", "sleep 2 && ./rust-learning-session backend 8080"]