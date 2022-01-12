let messages = [];
let id = 0;

class Message {
  constructor(id, text, time) {
    (this.id = id), (this.text = text), (this.time = time);
  }
}

module.exports = {
  read: (req, res, next) => {
    res.status(200).send(messages);
  },
  create: (req, res, next) => {
    const { text, time } = req.body;
    const newMessage = new Message(id, text, time);
    id++;
    messages.push(newMessage);
    res.status(200).send(messages);
  },
  update: (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    const index = messages.findIndex((e) => e.id === +id);
    messages[index].text = text;
    res.status(200).send(messages);
  },
  delete: (req, res, next) => {
    const { id } = req.params;
    const index = messages.findIndex((e) => e.id === +id);
    messages.splice(index, 1);
    res.status(200).send(messages);
  },
};
