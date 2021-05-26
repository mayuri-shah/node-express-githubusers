const express = require('express');
let axios = require('axios');
const itemRoutes = require("./routes/developer")
const ExpressError = require("./expressError.js") 

var app = express();

app.use(express.json());
app.use("/developer", itemRoutes);

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found",404);

  // pass the error to the next piece of middleware
  return next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

app.listen(3000,function() {
  console.log('Server running')
 })


