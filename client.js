const net = require("net");
const { IP, PORT } = require('./constants');

// Takes initials, if not assigns P1 as default
const initials = function() {
  if (process.argv.slice(2).length === 0) {
    return 'P1';
  }
  return process.argv.slice(2);
};

// Connect to server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Connected to server!');
    conn.write(`Name: ${initials()}`);
  });

  conn.on('end', () => {
    console.log('Connection ended');
    process.exit();
  });

  conn.on("data", (data) => {
    console.log("Server message: ", data);
  });
  
  return conn;
};

module.exports = { connect };