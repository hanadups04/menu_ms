import React from "react";
import "./MainDishList.css";
import MenuTemplate from "../MenuTemplate";

export default function MainDishList({ products, onAddToCart }) {
  return (
    <>
      <div className="mainDishCont">
        <div className="mainDishHeader">
          <h1>Main Dish</h1>
        </div>

        <div className="mainDishList">
          {products.map((product, key) => (
            <MenuTemplate
              key={key}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              onAddToCart={() => onAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
