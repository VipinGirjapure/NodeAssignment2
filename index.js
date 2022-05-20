var express = require("express"); //it will load the express package in our app

//Creating app object

const app = express(); //this express function returns us app object

// const app = require("express")(); //another way of writing

const port = 2121; //creating variable for port

//creating route handlers
app.get("/", function (req, res) {
  res.send("Hi Server");

  //res.send(); --> res.write(); + res.end();
});
app.get("/api/main", function (req, res) {

  res.send(
    " <h1>Express</h1> Express is a framework and It is the most popular Node web framework.It provides a robust set of features to develop web and mobile applications.Express helps rapid development of Node based Web applications."
  );
});

app.listen(port);
