var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var obrasRouter = require("./routes/obras");
var acercaRouter = require("./routes/acerca");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/obras", obrasRouter);
app.use("/acerca", acercaRouter);
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/public/404.html"));
});

module.exports = app;
