const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const config = require("../config/auth.config");
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var jwt = require("jsonwebtoken");


//create users
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.password) {
      res.status(400).send({
        message: "Name and Password can not be empty!"
      });
      return;
    }
    var password = bcrypt.hashSync(req.body.password, salt);
    // Create a User
    const user = {
      name: req.body.name,
      password: password
    };
  
    // Save User in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };

  //login
  exports.login = (req, res) => {
    User.findOne({
      where: {
        name: req.body.name
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
  
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
  
          res.status(200).send({
            id: user.id,
            name: user.name,
            accessToken: token
          });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };