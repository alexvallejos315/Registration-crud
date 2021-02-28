const express = require("express");
const mysql = require("mysql");
const morgan = require("morgan");
const path = require("path");
const myConnection = require("express-myconnection");
const app = express();

//Setting
app.set("port", process.env.PORT || 5000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

//Import Routes
const routerRegister = require("./routes/routerRegister");

//Middleware
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      hostname: "localhost",
      user: "root",
      password: "torricel1",
      database: "register_school",
      port: 3306,
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/", routerRegister);

//Static files
app.use(express.static(path.join(__dirname, "./public")));

//Starting Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
