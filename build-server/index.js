// Setting up software server

const http = require('node:http'); // Imported http module

const server = http.createServer((req, res) => { // Created server with its request and response callback function

    // Here we will code to handle a request

    let data = [];

    //--------------------------- Response Code ------------------------------------

    // In API route if we want like /todo data or /product data in request then we can get the route with req.url and then we will handle which data to send

    // req.method will give the requested method with the client

    if(req.method === "GET"){
        if(req.url === "/todo"){
            data = [
                {
                    id: 1,
                    todo: 1
                },
                {
                    id: 2,
                    todo: 2
                },
                {
                    id: 3,
                    todo: 3
                },
            ]
        }else if(req.url === "/user"){
            data = [
                {
                    id: 1,
                    user: 1
                },
                {
                    id: 2,
                    user: 2
                },
                {
                    id: 3,
                    user: 3
                },
            ]
        }else{
            data = [
                {
                    Error : "Invalid Request"
                }
            ]
            res.statusCode = 404; // This will change the status code to 404 not found
        }
    }else{
        res.statusCode = 404;
        res.end("This API only support GET method")
    }

    

    console.log("Request Recieved");


    //--------------------------- Response Code ------------------------------------
    // res.end will give the response to the request and only accept a string only
    // Also add header to tell client that which type of data we are sending. Example for JSON we will use "application/json"
    
    res.setHeader("Content-Type", "application/json"); // Setting the header for response that which type of data we are sending
    // res.end should be the last thing to put in the code like return 
    res.end(JSON.stringify(data)); // Sending Data

});

// Now we will listen on port 8080 
server.listen(8080, () => console.log("Server is up and running on port 8080"));