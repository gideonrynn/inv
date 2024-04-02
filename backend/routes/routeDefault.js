const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Default home page. Review documentation for the correct api data for your use case.");
});

module.exports = router;
