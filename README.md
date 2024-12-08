# task-manager

Task Manager Web App

-   global is the object containing fucntions all round the environment
-   setInterval(callback fun, time interval to repeat the callback fun)
-   to stop the execution of the setInterval use setTimeout with clearInterval as a callback fun
-   \_\_dirname and \_\_filename
-   modules are encapsulated code that is to import and use in another code block - simply a js file
-   default is the commonjs module using require function and parameter as the file location
-   top level code in module will be executed and modeul.exports is assigned to the varibale where the require fucntion is called
-   module.exports = variable/fun
-   module.exports = {
    name1: name1
    or
    name1,
    name2,
    }
-   Core modules are predefined inside nodejs
-   os module contains the details of the operating system
-   path is another such package
-   to make a server we need http module - core module
-   http.createServer(callback fun)
    callback fun takes in req, res
-   now listen to the server by defining the port and hostname finally a call back fun
-   req is a ver big object
-   create routes inside the createServer callback fun
-   use res properties to decide what to do on which route
-   res.url will tell the path of the page requested
-   res.setHeader will display the text/html and Content-Type
-   res.write will implement the html code written inside this write function call
-   initialise the folder with npm to track the package changes
-   npm init -y so that it will take the default values to the options asked
-   create instance of express()
-   similar to the node core modules - http to create a server express is used to create an express server
-   express server is simpler to use than http module
-   routes are established using app.get(route name, callback fun containing req, res)
-   res.send is used to send the thing to the page
-   nodemon is used to monitor the changes in the server and restart the server automatically
-   nodemon is a local dependency i.e dev dependency so -D to install as dev dependency
-   nodemon serverfilename
-   to not run with the nodemon as a command embed that in the main key of package.json
-   "main" : "serverfilename.js"
-   inside scripts add

    start : "node filename.js" this is worked with deployment
    backend : "nodemon filename.js"

-   now just use npm run start | backend
-   http request methods - get | post | put / patch | delete
-   get(read) : retrieve the data from the web server - frontend to backend
-   post(create) : send data to server
-   put / patch(update) : modify or update data on the server
-   delete(delete) : delete data from the server
-   \*http response status codes
-   Informational responses (100 - 199)
-   Successful responses (200 - 299)
-   Redirection messages (300 - 399)
-   Client error responses (400 - 499)
-   Server error responses (500 - 599)
-   200 request success
-   404 page not found
-   install mongoose and dotenv to use the .env file values
-   use seperation of concerns to make sure db schema and model file is seperated from the server.js
-   connectonDB is preffered to be in the server.js as it may be simplified
-   first connect to the db and only start the server
-   while post request establishment is done

    done it either by middleware using next fun
    or do it using express module

-   importing task model is used to do CRUD operations on the database
-
