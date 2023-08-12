import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Departments from "./pages/Departments";
import Products from "./pages/Products";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<Product />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
