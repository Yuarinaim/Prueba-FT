const { Router } = require("express");
const db = require("../db");
const { putClients, getAllClients, postClients, deleteClients } = require("../controllers");

const router = Router();

router.get("/", getAllClients);

router.post("/", postClients);

router.delete("/", deleteClients);

router.put("/", putClients);

module.exports = router;
