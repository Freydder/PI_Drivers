const getDrivers = require("../controller/getDrivers");

const getDriversByName = async (req, res) => {
  const nameQuery = req.query.name;

  if (!nameQuery) {
    return res
      .status(400)
      .json({ message: "Debe proporcionar un nombre para poder buscar" });
  }

  try {
    const drivers = await getDrivers();
    const filteredDrivers = drivers.filter((driver) =>
      driver.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
    if (filteredDrivers.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron drivers con ese nombre" });
    }
    res.json(filteredDrivers.slice(0, 15)); 
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Hubo un error al realizar la búsqueda por nombre" });
  }
};

module.exports = getDriversByName;
