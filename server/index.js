const express = require("express");
const messagesController = require("./controllers/messages_controller");

const app = express();

app.use(express.json());

app.get("/api/messages", messagesController.read);

app.post("/api/messages", messagesController.create);

app.put("/api/messages/:id", messagesController.update);

app.delete("/api/messages/:id", messagesController.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
