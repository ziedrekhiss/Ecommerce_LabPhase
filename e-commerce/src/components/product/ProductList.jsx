import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Pagination from "../Pagination";
import SideBar from "../SideBar";
import "../../style/homePage.css";
export default function ProductList({ setIsShown }) {
  const products = useSelector((state) => state.product);
  const error = useSelector((state) => state.returnError);
  const loading = useSelector((state) => state.product.loading);
  const items = products.products;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [selectCategory, setSelectCategory] = useState(null);
  let filteredItems = items;
  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  if (!Array.isArray(items)) {
    return <div>Error loading products</div>;
  }

  if (selectCategory) {
    filteredItems = items.filter(
      (product) => product.category === selectCategory
    );
  }

  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <SideBar
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectCategory}
      />
      {loading ? (
        <div>... loading</div>
      ) : error == null && error ? (
        <div>error</div>
      ) : items.length ? (
        <div className="product-map">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {currentItems.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                title={product.title}
                description={product.description}
                price={product.price}
                setIsShown={setIsShown}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            itemPerPage={itemsPerPage}
            totalItems={filteredItems.length}
            onPageChange={handlePageChange}
          />
        </div>
      ) : items.length == 0 ? (
        <div>No products avilable</div>
      ) : null}
    </div>
  );
}
