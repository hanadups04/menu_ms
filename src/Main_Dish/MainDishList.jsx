import React from "react";
import "./MainDishList.css";
import MenuTemplate from "../MenuTemplate";

export default function MainDishList({ products, onAddToCart }) {
  console.log(products);
  const filteredMain = products.filter(
    (item) => item.menuCategory === "MainDish"
  );
  console.log(filteredMain);
  return (
    <>
      <div className="mainDishCont">
        <div className="mainDishHeader">
          <h1>Main Dish</h1>
        </div>

        <div className="mainDishList">
          {filteredMain.map((product, key) => (
            <MenuTemplate
              key={key}
              name={product.menuItem}
              price={product.menuPrice}
              imageUrl={product.menuImage}
              onAddToCart={() => onAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
