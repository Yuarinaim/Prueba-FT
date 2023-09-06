const { Router } = require("express");
const {
  putClients,
  getAllClients,
  postClients,
  deleteClients,
} = require("../controllers/clientController");
const { postUser, getAllClientByUser, loginUser } = require("../controllers/userController");

const router = Router();

router.post("/", postClients);
router.post("/register", postUser);
router.post("/login", loginUser);
router.put("/", putClients);
router.get("/", getAllClients);
router.get("/:id", getAllClientByUser);
router.delete("/:id", deleteClients);

module.exports = router;
