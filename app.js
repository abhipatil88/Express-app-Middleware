const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//First Middleware
app.use((req ,res, next) => {
    console.log("It is a Middleware 1");
    next();
});

//second Middleware
// app.use((req,res) => {
//     console.log("it is a middleware 2 ");
// });


//GET REQUEST
app.get("/",(req,res,next) => {
    console.log(" Get req Received for the login");
    res.status(200).send("Hello World!");
    next();
});

//POST REQUEST

app.post("/login",(req,res) => {
    console.log("POST Request Received");
    console.log("Headers:",req.headres);
    res.status(200).send("Login Successful");
});

//server listining

app.listen(port, ()  => {
    console.log(`Server is running on port ${port}`);
});
