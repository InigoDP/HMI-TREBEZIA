# TREBEZIA - C2M2 -HMI

Personal Token: xUvyKJ4dYaLypXQ5FMyL

# Web-based user interface for the MOMA control using the OPC-UA Protocol. HMI used in the C2M2 project.

Once the project is downloaded or cloned using git, make sure you have already installed node.JS and npm in your PC.

If so, install all the dependencies using the following command in the root of the project:

    > npm install

A folder named node_modules will be created in the project, which includes all the dependencies of the application.

To run the app, use the following command in the terminal:

    > node app.js

A web server will be created in your localhost. Access it typing localhost:5640 in your preferred web-browser.

The application will create an OPC-UA client using the specified URL and will provide a user interface (or HMI) 
to interact with the Mobile Manipulator.

You can also run the app using DOCKER. This alternative does not require a previous installation of node.JS and npm.
Download or clone the file named hmi.Dockerfile and build an image from it. Once the image is built, you can 
create a container to run the app inside this container using Docker. Follow the steps indicated it that file.