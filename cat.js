const fs = require("fs");

module.exports = function(filename, done) {
  fs.readFile(`./${filename}`, (err, data) => {
    if (err) throw err;
    done(data);
  });
};
