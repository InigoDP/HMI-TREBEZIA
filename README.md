# TREBEZIA - C2M2 -HMI

Personal Token: xUvyKJ4dYaLypXQ5FMyL

## Web-based user interface for the MOMA control using the OPC-UA Protocol. HMI used in the C2M2 project.

The user interface has been developed using the web-standards HTML5, CSS and JS. All these files are 
included in the public folder. For the backend code, a Node.JS environment has been used to use the
same programming language has in the frontend (JavaScript). The app.js file includes all these backend
code, where the OPC-UA client is created.

## How to run the application

Once the project is downloaded or cloned using git, make sure you have already installed node.JS and npm in your PC.

If so, install all the dependencies using the following command in the root of the project:

    `npm install`

A folder named node_modules will be created in the project, which includes all the dependencies of the application 
(npm reads the package.json file, where all dependencies all listed).

To run the app locally, use the following command in the terminal:

    `node app.js`

A web server will be created in your localhost. Access it typing localhost:5640 in your preferred web-browser.

The application will create an OPC-UA client using the specified URL and will provide a user interface (or HMI) 
to interact with the Mobile Manipulator formed by a Mobile Robot (Omron LD90) and a Cobot (TM5).

## DOCKER

You can also run the app using DOCKER. Download or clone the file named hmi.Dockerfile and build an image from it. 
Once the image is built, you can create a container to run the app inside this container using Docker. Follow the 
steps indicated it that file.

## CONFIGURE THE APP

The application can be configured to change some of its characteristics. Inside the config folder, an Excel file
provides all the necessary information related to the OPC-UA server, such as the URL and the nodes to be controlled.
When the app.js is run, the excel file is read before creating the OPC-UA Client, so you can easily change the 
excel file to modify some of these aspects.