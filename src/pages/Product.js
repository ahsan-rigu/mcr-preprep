import React from "react";
import Products from "./Products";
import { inventoryData } from "../data";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productID } = useParams();
  const product = inventoryData.find((product) => product.id == productID);

  return (
    <div className="flex-container product">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Supplier: {product.supplier}</p>
      <p>Delivered: {product.delivered}</p>
      <p>SKU: {product.sku}</p>
    </div>
  );
};

export default Product;
