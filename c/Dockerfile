FROM gcc:latest
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
RUN make all
CMD ["./stoplight"]