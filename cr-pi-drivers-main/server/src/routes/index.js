const { Router } = require("express");
const getDriver = require("../handler/driver");
const getDriverIDhandler = require("../handler/getDriversID");
const getDriverByName = require("../handler/getDriverByName");
const getTeams = require("../controller/getTeams");
const createDriver = require("../controller/postDrivers");

const router = Router();

router.get("/drivers", getDriver);
router.get("/drivers/name", getDriverByName);
router.get("/drivers/:id", getDriverIDhandler);
router.get("/teams", getTeams);
router.post("/drivers", createDriver);

module.exports = router;
