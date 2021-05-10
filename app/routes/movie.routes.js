module.exports = app => {
    const movies = require("../controllers/movie.controller.js");
    const { authJwt } = require("../middleware");
    var router = require("express").Router();
  
    router.get("/favorite", movies.findAllUrl);
    router.get("/favorite/:user_id", movies.findById);
    router.post("/favorite", movies.create);
    router.get("/:title", movies.findUrl);
  
    app.use('/api/movies', [authJwt.verifyToken], router);
  };
  