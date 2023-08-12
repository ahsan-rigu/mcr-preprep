import React from "react";
import { inventoryData } from "../data";

const Home = () => {
  const data = inventoryData;

  const totalStock = data.reduce((acc, curr) => acc + curr.stock, 0);
  const deliveredStock = data.reduce((acc, curr) => acc + curr.delivered, 0);
  const lowStock = data.reduce(
    (acc, curr) => acc + (curr.stock < 5 ? 1 : 0),
    0
  );

  return (
    <div className="flex-container">
      <article className="card green">
        {totalStock}
        <p>Total Stock</p>
      </article>
      <article className="card orange">
        {deliveredStock}
        <p>Total Delivered</p>
      </article>
      <article className="card red">
        {lowStock}
        <p>Low Stock</p>
      </article>
    </div>
  );
};

export default Home;
