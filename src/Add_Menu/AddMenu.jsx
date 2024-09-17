import React from "react";
import { useState } from "react";
import Template from "./AddPropsTemplate";
import "./AddMenu.css";

export default function AddMenu({ addMenu }) {
  const [menuItem, setMenuItem] = useState("");
  const [menuPrice, setMenuPrice] = useState("");
  const [menuCategory, setMenuCategory] = useState("Main Dish");
  const [menuImage, setMenuImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMenu = { menuItem, menuPrice, menuCategory, menuImage };
    addMenu(newMenu);
    setMenuItem("");
    setMenuPrice("");
    setMenuCategory("");
    setMenuImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMenuImage(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="addCont">
        <center>
          {/* table cont start here */}
          <div class="contAddMenu ">
            <h2>ADD MENU ITEMS</h2>

            {/* Input groups start here */}
            <form onSubmit={handleSubmit}>
              <Template
                desc="MENU ITEM"
                type="text"
                name="menu_item"
                value={menuItem}
                onChange={(e) => setMenuItem(e.target.value)}
              />
              <Template
                desc="MENU PRICE"
                type="text"
                name="menu_price"
                value={menuPrice}
                onChange={(e) => setMenuPrice(e.target.value)}
              />
              {/* Input groups end here */}

              <h5>MENU CATEGORY</h5>

              <select
                className="form-select mt-4"
                aria-label="Default select example"
                name="status"
                value={menuCategory}
                onChange={(e) => setMenuCategory(e.target.value)}
              >
                <option>Select Menu Category: </option>
                <option value="MainDish">Main Dish</option>
                <option value="SideDish">Side Dish</option>
                <option value="Desserts">Desserts</option>
                <option value="Drinks">Drinks</option>
              </select>

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  <br></br>
                  <h5>UPLOAD MENU ITEM IMAGE</h5>
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  onChange={handleImageChange}
                />
              </div>

              {/* Buttons start here */}
              <div class="btn-container d-flex justify-content-center">
                <button type="submit" class="btn btn-custom">
                  Submit
                </button>
              </div>
            </form>
            {/* Buttons end here */}
          </div>
          {/* table cont end here */}
        </center>
      </div>
    </>
  );
}
