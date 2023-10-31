const axios = require("axios");
const { Drivers, Teams } = require("../db");

const urlIMG =
  "https://www.ellitoral.com/images/2023/05/04/bAPCCHT6v_1300x655__1.jpg";

const getDrivers = async () => {
  try {
    const driversFromDB = await Drivers.findAll();

    const getApi = (await axios("http://localhost:5000/drivers")).data;
    const driversFromApi = getApi.map((driver) => {
      return {
        id: driver.id,
        forename: driver.name.forename,
        surname: driver.name.surname,
        description: driver.description,
        image: driver.image.url || urlIMG,
        nationality: driver.nationality,
        dob: driver.dob,
        teams: driver.teams || "No se han definido teams",
        createdinDB: false,
      };
    });

    const allDrivers = [...driversFromApi, ...driversFromDB];

    // if (name && name !== undefined) {
    //   let driversByName = allDrivers.filter((driver) =>
    //     driver.forename.toLowerCase().startsWith(name.toLowerCase())
    //   );

    //   let driversBySurName = allDrivers.filter((driver) =>
    //     driver.surname.toLowerCase().startsWith(name.toLowerCase())
    //   );

    //   if (driversByName.length) {
    //     return driversByName.slice(0, 15);
    //   } else if (driversBySurName.length) {
    //     return driversBySurName.slice(0, 15);
    //   } else {
    //     throw new Error("No se encontró el nombre");
    //   }
    // }

    return allDrivers;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error al obtener los drivers");
  }
};

module.exports = getDrivers;
