const db = require("../db");

const getAllClients = async (req, res) => {
  res.send("obteniendo clientes");
};

const putClients = async (req, res) => {
  res.send("actualizando clientes");
};

const deleteClients = async (req, res) => {
  res.send("borrando clientes");
};

const postClients = async (req, res) => {
  const { name, email, password, phone, status } = req.body;
  res.send("subiendo clientes");
};

module.exports = { getAllClients, putClients, deleteClients, postClients };
