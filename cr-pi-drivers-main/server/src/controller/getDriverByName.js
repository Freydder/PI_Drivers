const axios = require("axios");
const { Op } = require("sequelize");
const { Drivers, Teams } = require("../db");

const searchDriversByName = async (name) => {
  const driverDB = await Drivers.findAll({
    where: {
      [Op.or]: [
        { forename: { [Op.iLike]: `%${name}%` } },
        { surname: { [Op.iLike]: `%${name}%` } },
      ],
    },
    include: Teams,
  });

  const driversFromDB = driverDB.map((driver) => ({
    id: driver.id,
    forename: driver.forename,
    surname: driver.surname,
    description: driver.description,
    image: driver.image,
    nationality: driver.nationality,
    dob: driver.dob,
    teams: driver.teams,
  }));

  const driverApi = await axios.get(
    `http://localhost:5000/drivers?name.forename=${name}`
  );

  const driversFromAPI = driverApi.data.map((driver) => ({
    id: driver.id,
    forename: driver.name.forename,
    surname: driver.name.surname,
    description: driver.description,
    image: driver.image,
    nationality: driver.nationality,
    dob: driver.dob,
    teams: driver.teams,
  }));

  const drivers = [...driversFromDB, ...driversFromAPI].slice(0, 15);

  return drivers;
};

module.exports = searchDriversByName;
