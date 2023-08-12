import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

const Departments = () => {
  const navigate = useNavigate();
  const { filterData, setFilterData } = useContext(SessionContext);

  return (
    <div className="flex-container">
      <article
        className="card"
        onClick={() =>
          navigate("/products") ||
          setFilterData({ ...filterData, category: "Kitchen" })
        }
      >
        Kitchen
      </article>
      <article
        className="card"
        onClick={() =>
          navigate("/products") ||
          setFilterData({ ...filterData, category: "Clothing" })
        }
      >
        Clothing
      </article>
      <article
        className="card"
        onClick={() =>
          navigate("/products") ||
          setFilterData({ ...filterData, category: "Toys" })
        }
      >
        Toys
      </article>
    </div>
  );
};

export default Departments;
