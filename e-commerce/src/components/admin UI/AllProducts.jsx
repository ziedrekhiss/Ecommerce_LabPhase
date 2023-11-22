import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../style/allProducts.css";
import { FiDelete, FiArrowLeft } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { removeProduct } from "../../redux/actions/productActions";
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
  const handleDelete = (productId) => {
    dispatch(removeProduct(productId));
  };
  const handleUpdate = (productId) => {
    navigate(`/updateproduct/${productId}`);
  };
  return (
    <div className="all-product">
      <div className="product-Table">
        <h2>MANAGE PRODUCTS</h2>
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
                <td colSpan="5">No Products Available</td>
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
