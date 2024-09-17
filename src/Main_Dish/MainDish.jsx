import React from "react";
import MainDishList from "./MainDishList";
import "./MainDish.css";

export default function MainDish({ items }) {
  return (
    <>
      <div className="mainContent">
        <MainDishList products={items} />
      </div>
    </>
  );
}
