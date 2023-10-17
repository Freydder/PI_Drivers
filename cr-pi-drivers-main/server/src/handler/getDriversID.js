const getDriverByID = require("../controller/getDriverByID");

const getDriverIDhandler = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await getDriverByID(id);
    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getDriverIDhandler;
