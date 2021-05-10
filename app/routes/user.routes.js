module.exports = app => {
    const users = require("../controllers/user.controller.js");
    // const { authJwt } = require("../middleware");
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);
    router.post("/login", users.login);
  
    app.use('/api/users', router);
  };
  