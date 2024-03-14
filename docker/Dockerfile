# Here, we are telling the Dockerfile to use the latest Ubuntu image to build off of
# You can use FROM to eliminate a lot of redundant work if there is already an image
# you want to base it off of
FROM ubuntu:latest

# RUN allows you to specify command outputs to be built into the image. Specifically in this case,
# we are baking in some packages into the image, such that the dependencies are already in the image
# when we run it. Allows you to pre-run stuff to automate runtime environment setup

# Here is some boilerplate for a nice Ubuntu environment, not really necessary but nice to have
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive TZ="America/New_York" \
    apt-get -y install tzdata

# Here is where we are actually installing packages
RUN apt-get install -y \
    #mosquitto-clients      # This is a super helpful package for CLI testing of an MQTT broker, you can find more docs on Google

# Feel free to experiment with other docker syntax stuff inside Dockerfiles! Some of interest might be:
# ENV
# USER
# WORKDIR
# COPY
# Do more stuff with RUN

ENTRYPOINT "/bin/bash"