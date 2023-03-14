const net = require("net");

const { IP, PORT } = require('./constants');


const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Connected to server!');
    conn.write('Name: AJC')
  });

  conn.on("data", (data) => {
    console.log("Server message: ", data);
    });
  
  return conn;
};

module.exports = { connect };