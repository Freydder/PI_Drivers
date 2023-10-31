import React from "react";
import style from "./Card.module.css";

export default function Card({ driver }) {
  const { forename, surname, image, teams } = driver;
  return (
    <div className={style.div}>
      <br />
      <h2>{`${forename} ${surname}`}</h2>
      {driver.teams && <h3>{`Teams: ${teams}`}</h3>}
      {driver.image && (
        <img className={style.img} src={image.url || image} alt="" />
      )}
      <br />
    </div>
  );
}
