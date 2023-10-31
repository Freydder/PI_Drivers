const getDrivers = require("../controller/getDrivers");

const getDriver = async (req, res) => {
  try {
    const drivers = await getDrivers();
    console.log(drivers);
    res.status(200).json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al obtener los drivers");
  }
};

module.exports = getDriver;
