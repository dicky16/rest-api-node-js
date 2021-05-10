const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var pino = require('express-pino-logger')()

app.use(pino)

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// require("./app/routes/turorial.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/movie.routes")(app);
app.get(/^(?!\/view$).*$/, function(req, res) {
  res.status(500).send({
    message: "Forbidden Access with code 443"
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
