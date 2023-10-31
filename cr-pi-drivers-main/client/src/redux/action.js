import axios from "axios";
export const GET_NAME = "GET_NAME";
export const GET_DRIVERS = "GET_DRIVERS";
export const FILTER_BY_TEAM = "FILTER_BY_TEAM";
export const GET_TEAMS = "GET_TEAMS";

export const getByName = (name) => {
  return async (dispatch) => {
    try {
      if (name) {
        let url = `http://localhost:3001/drivers/name?name=${name}`;
        const response = await axios.get(url);
        const data = response.data;
        dispatch({
          type: GET_NAME,
          payload: data,
        });
      } else {
        dispatch(getDrivers());
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
};

export const getDrivers = () => {
  return async function (dispatch) {
    try {
      const serverData = await axios.get("http://localhost:3001/drivers");
      const drivers = serverData.data;
      dispatch({
        type: GET_DRIVERS,
        payload: drivers,
      });
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
};

export const filterByTeam = (teamName) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: FILTER_BY_TEAM,
        payload: teamName,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const getTeams = () => {
  return async function (dispatch) {
    let teams = await axios.get("http://localhost:3001/teams");
    // console.log(teams);
    try {
      dispatch({
        type: GET_TEAMS,
        payload: teams.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};
