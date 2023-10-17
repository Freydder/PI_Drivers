const axios = require("axios");
const { Drivers } = require("../db");

const URL = "http://localhost:5000";

const getDrivers = async () => {
  try {
    const { data: driverFromApi } = await axios(URL);
    const driverFromDB = await Drivers.findAll();
    const drivers = [...driverFromApi, ...driverFromDB];
    return drivers;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error al obtener los drivers");
  }
};

module.exports = getDrivers;
