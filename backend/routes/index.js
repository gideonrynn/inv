const router = require("express").Router();
const routeOne = require("./routesOne");
const routeTwo = require("./routesTwo");

router.use("/api/v1", routeOne);
router.use("/api/v1", routeTwo);

module.exports = router;