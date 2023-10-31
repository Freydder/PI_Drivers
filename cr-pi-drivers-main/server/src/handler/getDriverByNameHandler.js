const searchDriversByName = require("../controller/getDriverByName");

const getDriversByNameHandler = async (req, res) => {
  const nameQuery = req.query.name;

  if (!nameQuery || typeof nameQuery !== "string" || nameQuery.trim() === "") {
    return res
      .status(400)
      .json({ message: "Proporcione un nombre válido para buscar" });
  }

  try {
    const drivers = await searchDriversByName(nameQuery);

    const filteredDrivers = drivers.filter((driver) => {
      const forenameDB = (driver.forename || "").toLowerCase();
      const forenameAPI =
        driver.name && driver.name.forename
          ? driver.name.forename.toLowerCase()
          : "";
      const query = nameQuery.toLowerCase();
      return forenameDB.includes(query) || forenameAPI.includes(query);
    });

    if (filteredDrivers.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron conductores con ese nombre" });
    }

    res.json(filteredDrivers);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al realizar la búsqueda por nombre" });
  }
};

module.exports = getDriversByNameHandler;
