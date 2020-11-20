# OSC-Elate
Control Resolume in your browser with OSC

## Getting started

Node.js must be installed on your computer for OSC Elate to work.

Download Node from Nodejs.org and follow their installation instructions.

Confirm Node.js is installed by typing **node -v** in Terminal to get the version number. If you get a version number, your ready to use OSC Elate!

## Launching OSC Elate

Every time OSC Elate is used, a node connection must be made. Go to Terminal and open the directory of your project.

cd /Users/ExampleUser/Documents/OSC-Elate-Project/

node index.js

A successful message will look like this:
Listening for OSC over UDP. Host: 192.168.0.9, Port: 57121 To start the demo, go to http://localhost:8081 in your web browser.

Your project is now live and ready to use at http://localhost:8081. Open Resolume, and OSC Elate will control your Resolume project in your browser interface.

## Using the functions

Refer to the example functions in the OSC Documentation.

OSC addresses are able to control every item in Resolume. So we get OSC addresses from Resolume and put them in our functions. 

To get OSC addresses from Resolume, enter OSC Shortcut mode (Shortcuts > Edit OSC), and click a control. The Shortcuts panel will show the OSC address.

With these functions, we can design our own interfaces for Resolume and control the software locally from the browser.
