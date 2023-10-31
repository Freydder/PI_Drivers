import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ drivers }) {
  return (
    <div className={style.div}>
      {drivers?.map((driver) => (
        <Card driver={driver} key={driver.id} />
      ))}
    </div>
  );
}
