const request = require("request");
const done = require("./bash");

module.exports = function(url, done) {
  request(url, function(error, response, body) {
    console.error("error:", error);
    console.log("status code: ", response && response.statusCode);
    done(body);
  });
};
