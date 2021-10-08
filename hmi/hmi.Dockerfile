
#to build this docker file use:
# docker build -f hmi.Dockerfile -t hmi .
#by default it uses the melodic distro. to change it, run the following command to generate a kinetic distro:
# docker build --build-arg ROS_DISTRO=kinetic  -f hmi.Dockerfile -t rplidar:kinetic .  

# other --build-arg param is OVERLAY_WS=/opt/ros/overlay_ws. This param controls where the ROS packages will be stored by github

# to execute:
# docker run -it hmi

FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN git clone https://A904983:XwWEBuGR6VMztocJRsoH@git.unav.edu/vision-robotica/C2M2/trebezia.git

WORKDIR /usr/src/app/hmi

# RUN npm install

# EXPOSE 5640

# CMD ["npm", "start"]
