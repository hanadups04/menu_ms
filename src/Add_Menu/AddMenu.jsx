import React from "react";
import Template from "./AddPropsTemplate";
import "./AddMenu.css";

export default function AddMenu() {
  return (
    <>
      <div className="addCont">
        <center>
          {/* table cont start here */}
          <div class="contAddMenu ">
            <h2>ADD MENU ITEMS</h2>

            {/* Input groups start here */}
            <form>
              <Template desc="MENU ITEM" type="text" name="menu_item" />
              <Template desc="MENU PRICE" type="text" name="menu_price" />
              {/* Input groups end here */}

              <h5>MENU CATEGORY</h5>

              <select
                className="form-select mt-4"
                aria-label="Default select example"
                name="status"
              >
                <option>Select Menu Category: </option>
                <option value="Borrowed">Main Dish</option>
                <option value="Returned">Side Dish</option>
                <option value="Returned">Desserts</option>
                <option value="Returned">Drinks</option>
              </select>

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  <br></br>
                  <h5>UPLOAD MENU ITEM IMAGE</h5>
                </label>
                <input class="form-control" type="file" id="formFile" />
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
