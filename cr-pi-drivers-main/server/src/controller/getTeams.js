const axios = require("axios");
const { Teams } = require("../db");

const getTeams = async (req, res) => {
  try {
    const { data } = await axios.get("http://localhost:5000/drivers");

    const teams = data.map((driver) => driver.teams?.split(/,|\s/) ?? []);

    const teamsFromApi = teams.flat();
    const uniqueTeams = Array.from(new Set(teamsFromApi));

    for (let i = 0; i < uniqueTeams.length; i++) {
      await Teams.findOrCreate({ where: { name: uniqueTeams[i] } });
    }

    const allTeams = await Teams.findAll();

    return res
      .status(200)
      .json({
        message: "Equipos guardados en la base de datos",
        teams: allTeams,
      });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error al cargar los equipos en la base de datos" });
  }
};

module.exports = getTeams;
