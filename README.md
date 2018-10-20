# nodejs-jwt-key-pairs
Authentication Example with JWT using a public and private key in nodejs

# Installation
Run:
```
npm install
node server.js
```
# Information
Use Postman to test the application.

Two available routes:

/POST localhost:3000/api/login

/POST localhost:3000/api/register

First make a post request at /api/register route, in the body of the request pass the username and password as json.
```
{
  "username": "test",
  "password: "test
}
```

The register route will return the token as a header named "x-auth" and the id of the account created.

Use this token in your request to /api/login route to authenticate.


