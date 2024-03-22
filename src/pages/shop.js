import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "./products";
import "./shop.css";

export const Shop = () => {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Thermochromic Ink</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="product">
            <img src={product.productImage} alt={product.productName} />
            <div className="description">
              <p>
                <b>{product.productName}</b>
              </p>
              <p> ${product.price}</p>
            </div>
            <button
              className="addToCartBttn"
              onClick={() => addToCart(product.id)}
              style={{ color: "lightblue" }}
            >
              Add To Cart {cartItems[product.id] > 0 && `(${cartItems[product.id]})`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
