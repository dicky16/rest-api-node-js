const db = require("../models");
const FavoriteMovie = db.favoriteMovies;
const axios = require('axios').default;

var bcrypt = require('bcrypt');

exports.findUrl = (req, res) => {
    const title = req.params.title;
    axios.get('http://www.omdbapi.com/?t='+title+'&apikey=5bc5a2be', {
      })
      .then((response) => {
        console.log(title);
        res.status(200).send({
            poster: response.data.Poster
          });
      }, (error) => {
        console.log(error);
      });
  };

  exports.findAllUrl = (req, res) => {
    FavoriteMovie.findAll()
    .then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving favorie movies."
        })
    })
  }

  exports.findById = (req, res) => {
    FavoriteMovie.findAll({
        where: {
            user_id: req.params.user_id
        }
    })
    .then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving favorie movies."
        })
    })
  }

  exports.create = (req, res) => {
    if (!req.body.title || !req.body.user_id) {
        res.status(400).send({
          message: "Title and User_id can not be empty!"
        });
        return;
      }
      axios.get('http://www.omdbapi.com/?t='+req.body.title+'&apikey=5bc5a2be', {
        })
        .then((response) => {
            var poster = response.data.Poster
            // console.log(response.data.Poster);
            const fav_movies = {
                title: req.body.title,
                poster: poster,
                user_id: req.body.user_id
              };
        
              FavoriteMovie.create(fav_movies)
              .then(data => {
                  res.send(data)
              })
              .catch(err => {
                  res.status(500).send({
                      message:
                      err.message || "Some error occurred while creating the Favorite Movie."
                  });
              });
        }, (error) => {
            console.log(error);
      });
  }

  