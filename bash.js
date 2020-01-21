const pwd = require("./pwd");
const ls = require('./ls');
const cat = require('./cat')

process.stdout.write("prompt >");

process.stdin.on("data", data => {
  const cmd = data.toString().trim().split(' ');

  if (cmd[0] === "pwd") {
    pwd(__dirname);
  } else if (cmd[0] === 'ls') {
    ls();
  } else if (cmd[0] === 'cat')  {
    cat(cmd[1])
  }  else {
    process.stdout.write("You typed: " + cmd);
  }

  setTimeout(() => {
    process.stdout.write("\nprompt > ")
  }, 5);
});
