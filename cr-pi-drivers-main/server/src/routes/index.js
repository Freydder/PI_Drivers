const { Router } = require("express");
const getDriver = require("../handler/driver");
const getDriverIDhandler = require("../handler/getDriversID");
const getTeams = require("../controller/getTeams");
const createDriver = require("../controller/postDrivers");
const getDriversByNameHandler = require("../handler/getDriverByNameHandler");

const router = Router();

router.get("/drivers", getDriver);
router.get("/drivers/name", getDriversByNameHandler);
router.get("/drivers/:id", getDriverIDhandler);
router.get("/teams", getTeams);
router.post("/drivers", createDriver);

module.exports = router;
