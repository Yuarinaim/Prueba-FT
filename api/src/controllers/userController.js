const { User, Client } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { response } = require("express");

const getAllClientByUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    const clients = await Client.findAll({
      where: { UserId: id, isDeleted: false },
    });
    if (!clients.length) {
      res.status(404).json({ error: "Clients not found" });
    }
    res.status(200).json({
      state: "Clientsfound",
      data: clients,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ where: { name: name } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const payload = {
      userId: user.id,
      name: user.name,
    };
    const token = jwt.sign(
      payload,
      "keySecret156754asdas897fav45646xz4c65z899sa4fa654fas65f4sa65sadasf"
    );

    // Envía la respuesta una vez, no después de cada condición.
    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({ name, email, password: hashedPassword });
    // response(res, 200, createUser);
    res.status(200).json({
      state: "User created",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllClientByUser, postUser, loginUser };
