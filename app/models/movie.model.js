module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("favorite_movie", {
      title: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return User;
  };
  