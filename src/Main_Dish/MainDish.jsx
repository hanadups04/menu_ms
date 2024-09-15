import React from "react";
import "./MainDish.css";
import mainDishList from "./MainDishList.jsx";

export default function MainDish() {
  return (
    <>
      <div className="mainContent">
        <mainDishList />
      </div>
    </>
  );
}
