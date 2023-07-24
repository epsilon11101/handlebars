require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//expose public folder
app.use(express.static("public"));

//this is our controller and hbs is our view
app.get("/", (req, res) => {
  res.render("home", {
    name: "Aaron Miranda",
    title: "HandleBars + Node",
  });
});

app.get("/generic", (req, res) => {
  //   res.sendFile(__dirname + "/public/generic.html");
  res.render("generic", {
    name: "Aaron Miranda",
    title: "HandleBars + Node",
  });
});

app.get("/elements", (req, res) => {
  //   app.sendFile(__dirname + "/public/elements.html");
  res.render("elements", {
    name: "Aaron Miranda",
    title: "HandleBars + Node",
  });
});

//when expose public folder this path doesnt serve

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/hello", (req, res) => {
//   res.send("Hello Page");
// });

app.get("*", (req, res) => {
  //   res.send("404 | Page not found");
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
