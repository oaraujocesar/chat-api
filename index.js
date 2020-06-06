const app = require("express")();
const cors = require('cors');
const http = require("http");
const io = require("socket.io")(http);

app.use(cors());

http.createServer(app)

io.origins('*:*')

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

http.listen(4000, () => {
  console.log("listening on port 4000...");
});
