import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../style/allProducts.css";
import { FiDelete, FiArrowLeft } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineLibraryAdd } from "react-icons/md";
import {
  removeProduct,
  fetchProducts,
} from "../../redux/actions/productActions";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";
export default function Allproducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  const products = useSelector((state) => state.product.products);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const currentItems =
    products && products.length ? products.slice(startIndex, endIndex) : [];

  const tableHeader = [
    "Title",
    "Category",
    "Owner",
    "Qty",
    "Price",
    "update",
    "delete",
  ];

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProducts(currentPage, itemsPerPage));
    };
    if (!products.length) {
      fetchData();
    }
  }, [dispatch, products.length, currentPage, itemsPerPage]);

  const handleDelete = (productId) => {
    dispatch(removeProduct(productId));
  };
  const handleUpdate = (productId) => {
    navigate(`/updateproduct/${productId}`);
  };

  const handleAddProduct = () => {
    navigate("/addProduct");
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    dispatch(fetchProducts(newPage, itemsPerPage));
  };
  return (
    <div className="all-product">
      <div className="product-Table">
        <div className="flex-box">
          <h2>MANAGE PRODUCTS</h2>
          <button onClick={handleAddProduct}>
            <MdOutlineLibraryAdd /> Add Product
          </button>
        </div>
        <table className="product-table">
          <thead>
            <tr>
              {tableHeader.map((category) => (
                <th key={category}>{category}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.length ? (
              currentItems.map((product) => (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.ownerName}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}TND</td>
                  <td>
                    <button onClick={() => handleUpdate(product._id)}>
                      <RxUpdate size={20} />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(product._id)}>
                      <FiDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Products Available</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          itemPerPage={itemsPerPage}
          totalItems={products.length}
          onPageChange={handlePageChange}
        />
      </div>
      <button className="close-btn" onClick={handleNavigate}>
        <FiArrowLeft />
        Back to Shop
      </button>
    </div>
  );
}
