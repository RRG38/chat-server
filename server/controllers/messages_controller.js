let messages = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(messages);
  },
  create: (req, res, next) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },
  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(
      (message) => message.id == updateID
    );
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time,
    };

    res.status(200).send(messages);
  },
  delete: (req, res, next) => {
    const { id } = req.params;
    const index = messages.findIndex((e) => e.id === +id);
    messages.splice(index, 1);
    res.status(200).send(messages);
  },
};
