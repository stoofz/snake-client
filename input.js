const { MSG, MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require('./constants');

let connection;

// Setup input for connection
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Input key Handler
const handleUserInput = function(key) {
  
  // Seperate if statement. If in switch statement, lint will want a break; that is unreachable.
  if (key === '\u0003') {
    console.log("Quitting game");
    process.exit();
  }

  switch (key.toLowerCase()) {
  case MOVE_UP_KEY:
    connection.write("Move: up");
    break;
  case MOVE_LEFT_KEY:
    connection.write("Move: left");
    break;
  case MOVE_DOWN_KEY:
    connection.write("Move: down");
    break;
  case MOVE_RIGHT_KEY:
    connection.write("Move: right");
    break;
  case key:
    try {
      connection.write(MSG[key]);
    } catch (error) {
      console.log("Key not mapped");
    }
    break;
  }
};

module.exports = {setupInput};