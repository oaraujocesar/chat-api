const app = require("express")();
var cors = require('cors');
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(cors());

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

http.listen(4000, () => {
  console.log("listening on port 4000...");
});
