/**
* @api {post} api/users/ Registration for user
* @apiVersion 0.1.0
* @apiName addUser
* @apiGroup User
* @apiPermission public
*
* @apiDescription for registartion user
*
* @apiExample Usage:
* http://localhost:8080/api/users/
*/

/**
* @api {post} api/users/login Login for user
* @apiVersion 0.1.0
* @apiName loginUser
* @apiGroup User
* @apiPermission public
*
* @apiDescription for login user, will return token for access API end point
*
* @apiExample Usage:
* http://localhost:8080/api/users/login
*/

/**
* @api {get} api/movies/favorite Will return all favorite movies
* @apiVersion 0.1.0
* @apiName getMovie
* @apiGroup Movie
* @apiPermission public
*
* @apiDescription for get all favorite movies data
*
* @apiExample Usage:
* http://localhost:8080/api/movies/favorite
* @apiHeader Authorization Bearer Token.
*/

/**
* @api {get} api/movies/favorite/{user_id} Will return all favorite movies of that user’s favorite movies
* @apiVersion 0.1.0
* @apiName getFavMovie
* @apiGroup Movie
* @apiPermission public
*
* @apiDescription for get all favorite movies data by user id
*
* @apiExample Usage:
* http://localhost:8080/api/movies/favorite/{user_id}
* @apiHeader Authorization Bearer Token.
*/

/**
* @api {post} api/movies/favorite/ Create new users favorite movies
* @apiVersion 0.1.0
* @apiName postFavMovie
* @apiGroup Movie
* @apiPermission public
*
* @apiDescription for create user favorite movie
*
* @apiExample Usage:
* http://localhost:8080/api/movies/favorite/
* @apiHeader Authorization Bearer Token.
* @apiParam {string} title title favorite movie user
* @apiParam {integer} id_user data id user
*/

/**
* @api {get} api/movies/{title} Get poster url of that movie
* @apiVersion 0.1.0
* @apiName getFavMovie
* @apiGroup Movie
* @apiPermission public
*
* @apiDescription for get poster url movie
*
* @apiExample Usage:
* http://localhost:8080/api/movies/{title}
* @apiHeader Authorization Bearer Token.
*/