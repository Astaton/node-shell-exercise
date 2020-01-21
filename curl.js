const request = require("request");

module.exports = function(url) {
  request(url, function(error, response, body) {
    console.error("error:", error);
    console.log("status code: ", response && response.statusCode);
    console.log(body);
  });
};
