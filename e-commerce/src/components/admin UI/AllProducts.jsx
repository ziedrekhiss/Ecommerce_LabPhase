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
import { useEffect } from "react";
export default function Allproducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/home");
  };

  const products = useSelector((state) => state.product.products);
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
      await dispatch(fetchProducts());
    };
    if (!products.length) {
      fetchData();
    }
  }, [dispatch, products.length]);

  const handleDelete = (productId) => {
    dispatch(removeProduct(productId));
  };
  const handleUpdate = (productId) => {
    navigate(`/updateproduct/${productId}`);
  };

  const handleAddProduct = () => {
    navigate("/addProduct");
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
            {products.length ? (
              products.map((product) => (
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
      </div>
      <button className="close-btn" onClick={handleNavigate}>
        <FiArrowLeft />
        Back to Shop
      </button>
    </div>
  );
}
