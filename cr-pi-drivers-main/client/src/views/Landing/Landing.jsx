import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function Landing() {
  return (
    <div className={style.landing}>
      <h1>Drivers</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Landing;
