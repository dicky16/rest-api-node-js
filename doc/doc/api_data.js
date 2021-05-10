define({ "api": [
  {
    "type": "get",
    "url": "api/movies/favorite/{user_id}",
    "title": "Will return all favorite movies of that user’s favorite movies",
    "version": "0.1.0",
    "name": "getFavMovie",
    "group": "Movie",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>for get all favorite movies data by user id</p>",
    "examples": [
      {
        "title": "Usage:",
        "content": "http://localhost:8080/api/movies/favorite/{user_id}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "filename": "./api-doc.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "api/movies/{title}",
    "title": "Get poster url of that movie",
    "version": "0.1.0",
    "name": "getFavMovie",
    "group": "Movie",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>for get poster url movie</p>",
    "examples": [
      {
        "title": "Usage:",
        "content": "http://localhost:8080/api/movies/{title}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "filename": "./api-doc.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "api/movies/favorite",
    "title": "Will return all favorite movies",
    "version": "0.1.0",
    "name": "getMovie",
    "group": "Movie",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>for get all favorite movies data</p>",
    "examples": [
      {
        "title": "Usage:",
        "content": "http://localhost:8080/api/movies/favorite",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "filename": "./api-doc.js",
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "api/movies/favorite/",
    "title": "Create new users favorite movies",
    "version": "0.1.0",
    "name": "postFavMovie",
    "group": "Movie",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>for create user favorite movie</p>",
    "examples": [
      {
        "title": "Usage:",
        "content": "http://localhost:8080/api/movies/favorite/",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title favorite movie user</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id_user",
            "description": "<p>data id user</p>"
          }
        ]
      }
    },
    "filename": "./api-doc.js",
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "api/users/",
    "title": "Registration for user",
    "version": "0.1.0",
    "name": "addUser",
    "group": "User",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>for registartion user</p>",
    "examples": [
      {
        "title": "Usage:",
        "content": "http://localhost:8080/api/users/",
        "type": "json"
      }
    ],
    "filename": "./api-doc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/users/login",
    "title": "Login for user",
    "version": "0.1.0",
    "name": "loginUser",
    "group": "User",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>for login user, will return token for access API end point</p>",
    "examples": [
      {
        "title": "Usage:",
        "content": "http://localhost:8080/api/users/login",
        "type": "json"
      }
    ],
    "filename": "./api-doc.js",
    "groupTitle": "User"
  }
] });
