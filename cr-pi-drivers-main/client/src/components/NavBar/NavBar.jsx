import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { filterByTeam } from "../../redux/action";
import { useDispatch } from "react-redux";

function NavBar({ handleSearch, teams }) {
  // console.log("Equipos en NavBar:", teams);
  const imgURL = "https://cdn-icons-png.flaticon.com/512/84/84176.png";
  const dispatch = useDispatch();

  const filterTeam = (e) => {
    const teamName = e.target.value;
    dispatch(filterByTeam(teamName));
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
    </div>
  );
}

export default NavBar;
