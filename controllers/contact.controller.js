const ContactModel = require("../models/contact.model");

const sendMessage = async (req, res) => {
  const newMessage = await ContactModel.create(req.body);
  res.status(201).json({ message: "Message received", data: newMessage });
};

module.exports = { sendMessage };
