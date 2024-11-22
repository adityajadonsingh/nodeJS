// Express(Framework) is also used for creating APIs with minimilistic code in which many things will be same as node
// Also we don't have to give error code it will give 404 by itself

// NOTE : SEQUENCE OF APIS / CODE IS VERY IMPORTNAT IN EXPRESS JS AS IT IS READ LINE BY LINE

const express = require('express');

const app = express(); // This will create server like http.createServer

// In express every api has its own callback function(req,res) unlike in node which has only one (req,res)
app.get("/todos", (req, res) => {
    
    const data = [
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

    // In this we can directly specify which type of data we are sending
    res.json(data);

});

app.post("/todos", (req, res) => {
    res.json({
        response: "This is a post api"
    })
});

// If have to customize the 404 code error the we will use ".use" method but there is a problem that then it will give 200 status code which we also have to handle like adding status before the json with its code

// Always keep the * wild card scenario at the end of the code 

app.use("*", (req, res) => {
    res.status(404).json({
        message: "Route not found"
    })
});

app.listen(8080, () => {
    console.log("Server is running")
});