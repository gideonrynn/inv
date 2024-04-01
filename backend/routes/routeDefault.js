const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Default home page. Review documentation for the correct api data.");
});

module.exports = router;