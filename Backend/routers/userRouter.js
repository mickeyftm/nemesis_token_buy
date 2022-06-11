const router = require("express").Router();
const {addAccount, getAccount} = require("../controllers/user")

router.post("/add", addAccount)
router.post("/get", getAccount)

module.exports = router;