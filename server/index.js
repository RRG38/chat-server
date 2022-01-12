const express = require("express");
const app = express();

const messagesController = require("./controllers/messages_controller");

const port = 3001;

app.use(express.json());
app.use(express.static("../public/build"));

app.get("/api/messages", messagesController.read);
app.post("/api/messages", messagesController.create);
app.put("/api/messages/:id", messagesController.update);
app.delete("/api/messages/:id", messagesController.delete);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
