
#The purpose of this DOCKERFILE is to create an image that contains all the source code, dependencies and modules to create a
#web based application which can be used as a HMI to control the Mobile Manipulator.

#To build this docker file use:

    # > docker build -f hmi.Dockerfile -t hmi .

#By default it uses the melodic distro. to change it, run the following command to generate a kinetic distro:

    # > docker build --build-arg ROS_DISTRO=kinetic  -f hmi.Dockerfile -t rplidar:kinetic .  

# other --build-arg param is OVERLAY_WS=/opt/ros/overlay_ws. This param controls where the ROS packages will be stored by github.

#To execute a container:

    # > docker run -it hmi

#The template from which the image will be created is node:latest

FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

#We clone the files located in the C2M2 remotehmi repository

RUN git clone https://A904983:xUvyKJ4dYaLypXQ5FMyL@git.unav.edu/vision-robotica/C2M2/remotehmi.git

WORKDIR /usr/src/app/remotehmi

#As the node_modules are not cloned, with NPM we install all the dependencies required by the app

RUN npm install

EXPOSE 5640

CMD ["npm", "start"]
