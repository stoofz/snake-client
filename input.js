let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = function (key) {
  switch (key) {
    case '\u0003':
      console.log("Quitting game")
      process.exit();
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
       break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case 'm':
      connection.write("Say: Snakes be snaking");
      break;
    case 'n':
      connection.write("Say: Hissssssssssssss");
      break;
    case 'b':
      connection.write("Say: Keep on slithering")
      break;
  }
};

module.exports = {setupInput};