import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { getDrivers, getByName, getTeams } from "../../redux/action";
import NavBar from "../../components/NavBar/NavBar";

function Home() {
  const drivers = useSelector((state) => state.drivers);
  const filteredDriver = useSelector((state) => state.filteredDriver);
  const teams = useSelector((state) => state.teams);
  // console.log("Equipos en Home:", teams);
  const dispatch = useDispatch();

  const [searched, setSearched] = useState(false);

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, [dispatch]);

  const handleSearch = (name, team) => {
    if (name || team) {
      dispatch(getByName(name, team));
      setSearched(true);
    } else {
      setSearched(false);
    }
  };

  return (
    <div>
      <NavBar handleSearch={handleSearch} teams={teams} />
      <Cards drivers={searched ? filteredDriver : drivers} />
    </div>
  );
}

export default Home;
