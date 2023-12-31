const { Client, User } = require("../db");

// Es una buena practica tener las peticiones basicas
const getAllClients = async (req, res) => {
  try {
    const client = await Client.findAll({ where: { isDeleted: false } });
    res.status(200).json({ client });
  } catch (error) {
    res.status(400).json(error);
  }
};

const putClients = async (req, res) => {
  const { id, name, email, phone, status } = req.body;
  // console.log("soy id putclient controller", id, name, email, phone, status);
  try {
    const client = await Client.findByPk(id);
    if (!client) {
      throw new Error("Client not found");
    }
    await client.update({ name, email, phone, status });
    await client.save();
    return res.status(200).json({ client });
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteClients = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findByPk(id);
    if (!client) {
      throw new Error("Client not found");
    }
    // await client.destroy({ where: { id }} ); esto esta mal
    // es mejor practica realizar un borrado logico
    await client.update({ isDeleted: true });
    await client.save();
    res.status(200).json({ client });
  } catch (error) {
    res.status(400).json(error);
  }
};

const postClients = async (req, res) => {
  const { id, name, email, phone, status } = req.body;
  try {
    const user = await User.findOne({ where: { id } });
    const createClient = await Client.create({ name, email, phone, status });
    if (!user) {
      throw new Error("User not found");
    }
    createClient.setUser(id);
    res.status(200).json({
      state: "Client created",
      data: createClient,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getAllClients, putClients, deleteClients, postClients };
