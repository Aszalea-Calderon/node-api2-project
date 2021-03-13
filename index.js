// require your server and launch it here
//
//Import and start
const server = require("./api/server");

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`\n Listening on port 3000 \n`);
});
