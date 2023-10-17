const { Drivers, Teams } = require("../db");

const createDriver = async (req, res) => {
  try {
    const {
      name,
      last_name,
      description,
      image,
      nationality,
      birthday,
      teams,
    } = req.body;

    if (
      !name ||
      !last_name ||
      !description ||
      !image ||
      !nationality ||
      !birthday ||
      !teams ||
      !teams.length
    ) {
      return res.status(400).json({ status: "Se necesita información" });
    }

    // Crear el conductor en la base de datos
    const driver = await Drivers.create({
      name,
      last_name,
      description,
      image,
      nationality,
      birthday,
    });

    // Buscar los equipos relacionados en la base de datos
    const instancesTeams = await Teams.findAll({
      where: { name: teams },
    });

    if (instancesTeams && instancesTeams.length) {
      // Relacionar el conductor con los equipos
      await driver.addTeams(instancesTeams);
    } else {
      // Si no se encontraron equipos, puedes manejar el error aquí.
      return res.status(400).json({ status: "Equipos no encontrados" });
    }

    return res.status(201).json({
      status: "Driver created successfully",
      driver: driver.toJSON(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "Error en el servidor" });
  }
};

module.exports = createDriver;
