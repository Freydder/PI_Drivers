import {
  GET_NAME,
  GET_DRIVERS,
  FILTER_BY_TEAM,
  GET_TEAMS,
  FILTER_BY_ORIGIN,
} from "./action";

const initialState = {
  drivers: [],
  filteredDriver: [],
  teams: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAME:
      return { ...state, filteredDriver: action.payload };
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
      };
    case FILTER_BY_TEAM:
      const teamName = action.payload;
      const filteredDriver = state.drivers.filter((driver) => {
        if (
          Array.isArray(driver.teams) &&
          driver.teams.some((team) => team.name === teamName)
        ) {
          return true;
        }
        if (typeof driver.teams === "string") {
          const teamsArray = driver.teams.split(",").map((team) => team.trim());
          return teamsArray.includes(teamName);
        }
        return false;
      });
      return {
        ...state,
        filteredDriver: filteredDriver,
      };

    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case FILTER_BY_ORIGIN:
      const origin = action.payload;
      const driverFilter = state.drivers;

      const filter = driverFilter.filter((driver) => {
        if (origin === "database") {
          return driver.createdinDB === true;
        }
        if (origin === "api") {
          return driver.createdinDB === false;
        }
        return false;
      });
      return {
        ...state,
        filteredDriver: filter,
      };

    default:
      return state;
  }
};

export default reducer;
