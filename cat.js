const fs = require('fs');

module.exports = function(filename) {
  fs.readFile(`./${filename}`, (err, data) => {
    if (err) throw err;
    process.stdout.write(data)
  })
}
