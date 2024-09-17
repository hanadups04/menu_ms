import React from "react";
import "./MenuTemplate.css";

export default function MenuTemplate({ name, price, imageUrl, onAddToCart }) {
  return (
    <>
      <div>
        <div class="card">
          {imageUrl && <img src={imageUrl} class="card-img-top" alt="nigger" />}
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Price: P {price}</p>
            <button className="btn btn-primary" onClick={onAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
