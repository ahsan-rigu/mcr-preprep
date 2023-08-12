import React, { useContext } from "react";
import { inventoryData } from "../data";
import { SessionContext } from "../contexts/SessionContext";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

const Products = () => {
  const { filterData, setFilterData } = useContext(SessionContext);
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();

  let showData = inventoryData;

  if (filterData.category) {
    showData = data.filter((item) => item.department === filterData.category);
  }
  if (filterData.lowStockOnly) {
    showData = data.filter((item) => item.stock < 10);
  }
  if (filterData.sort) {
    if (data.every((item) => typeof item[filterData.sort] === "string")) {
      showData = data.sort((a, b) =>
        a[filterData.sort].localeCompare(b[filterData.sort])
      );
    } else {
      showData = data.sort((a, b) => a[filterData.sort] - b[filterData.sort]);
    }
  }

  console.log(filterData, data);

  return (
    <div className="products-page">
      <div className="filter">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={filterData.category}
          onChange={(e) =>
            setFilterData({ ...filterData, category: e.target.value })
          }
        >
          <option value="">All</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
        <label htmlFor="lowStockOnly">Low Stock Only</label>
        <input
          type="checkbox"
          name="lowStockOnly"
          id="lowStockOnly"
          checked={filterData.lowStockOnly}
          onChange={(e) =>
            setFilterData({
              ...filterData,
              lowStockOnly: e.target.checked,
            })
          }
        />
        <label htmlFor="sort">Sort By</label>
        <select
          name="sort"
          id="sort"
          value={filterData.sort}
          onChange={(e) =>
            setFilterData({ ...filterData, sort: e.target.value })
          }
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
        <Link to="/add" className="add-product">
          ADD
        </Link>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </tr>
        {showData.map((item) => (
          <tr onClick={() => navigate("/products/" + item.id)} key={item.id}>
            <td>
              <img src={item.imageUrl} alt={item.name} className="thumbnail" />
            </td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <td>{item.supplier}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Products;
