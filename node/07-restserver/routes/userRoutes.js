const { Router } = require("express");
const {
  getUser,
  putUser,
  postUser,
  deleteUser,
} = require("../controllers/userController");
const router = Router();

router.get("/", getUser);

router.put("/", putUser);

router.post("/", postUser);

router.delete("/", deleteUser);

module.exports = router;
