/*
    A middleware function is a function with 3 parameters.
    The first parameter is the request object.
    The second parameter is the response object.
    The third parameter is the next function in the middleware chain.

    These functions execute in between req and res cycle
*/
const logger = (req, res, next) => {
  console.log("I am trying to log in");
  next();
};

module.exports = { logger };
