import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: data.length + 1,
      name: e.target.name.value,
      imageUrl: e.target.imageUrl.value,
      description: e.target.description.value,
      category: e.target.category.value,
      price: Number(e.target.price.value),
      stock: Number(e.target.stock.value),
      supplier: e.target.supplier.value,
      delivered: Number(e.target.delivered.value),
      sku: e.target.sku.value,
    };
    console.log(newProduct);
    setData([...data, newProduct]);
    localStorage.setItem("data", JSON.stringify([...data, newProduct]));
    navigate("/products");
  };

  return (
    <div className="flex-container add-product">
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" name="imageUrl" id="imageUrl" required />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" required />
        <label htmlFor="category">Department</label>
        <select name="category" id="category" required>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" required />
        <label htmlFor="stock">Stock</label>
        <input type="number" name="stock" id="stock" required />
        <label htmlFor="supplier">Supplier</label>
        <input type="text" name="supplier" id="supplier" required />
        <label htmlFor="delivered">Delivered</label>
        <input type="number" name="delivered" id="delivered" required />
        <label htmlFor="sku">SKU</label>
        <input type="text" name="sku" id="sku" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
