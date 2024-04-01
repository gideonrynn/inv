const router = require("express").Router();
const routeOne = require("./routesOne");
const routeTwo = require("./routesTwo");
const routeDefault = require("./routeDefault");

router.use("/api/v1", routeTwo);
router.use("/api/v1", routeOne);
router.use("/", routeDefault);

module.exports = router;