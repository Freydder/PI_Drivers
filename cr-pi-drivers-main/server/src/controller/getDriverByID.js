const getDrivers = require("./getDrivers");

const getDriverByID = async (id) => {
  try {
    const drivers = await getDrivers();
    const driver = drivers.find((e) => e.id == id);
    if (!driver) {
      throw new Error("Driver no encontrado");
    }
    return driver;
  } catch (error) {
    throw new Error("Hubo un error al obtener el detalle del driver");
  }
};

module.exports = getDriverByID;