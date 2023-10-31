import { GET_NAME, GET_DRIVERS, FILTER_BY_TEAM, GET_TEAMS } from "./action";

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
        return false;
      });
      return {
        ...state,
        filteredDriver,
      };

    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
