const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.get("/", registerController.list);
router.post("/add", registerController.save);

router.get("/update/:id", registerController.edit);
router.post("/update/:id", registerController.update);

module.exports = router;
