//check for login
/* 
A middleware is a function which takes up three parameters
req, res, next
req is the request object
res is the response object
next is the next middleware function in the application's request-response cycle.
*/
const logger = (req, res, next) => {
  console.log("I am trying to login");
  next();
};

module.exports = { logger };
