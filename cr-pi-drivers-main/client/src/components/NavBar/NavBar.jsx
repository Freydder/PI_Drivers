import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { filterByTeam, filterByOrigin } from "../../redux/action";
import { useDispatch } from "react-redux";

function NavBar({ handleSearch, teams }) {
  // console.log("Equipos en NavBar:", teams);
  const imgURL = "https://cdn-icons-png.flaticon.com/512/84/84176.png";
  const dispatch = useDispatch();

  const filterTeam = (e) => {
    const teamName = e.target.value;
    dispatch(filterByTeam(teamName));
  };

  const filterOrigin = (e) => {
    const filter = e.target.value;
    dispatch(filterByOrigin(filter));
  };

  return (
    <div className={style.div}>
      <img className={style.img} src={imgURL} alt="" />
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/form">
        <button>Form</button>
      </Link>
      <SearchBar handleSearch={handleSearch} />
      <div>
        <select onChange={(e) => filterTeam(e)}>
          <option>Seleccionar team</option>
          {teams.teams?.map((team, index) => (
            <option key={index} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <select onChange={(e) => filterOrigin(e)}>
        <option>Seleccionar Opcion</option>
        <option>Base de Datos</option>
        <option>API</option>
      </select>
    </div>
  );
}

export default NavBar;
