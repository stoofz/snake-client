const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
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