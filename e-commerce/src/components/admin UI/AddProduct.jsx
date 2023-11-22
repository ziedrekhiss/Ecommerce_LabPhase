import { useState } from "react";
import "../../style/addProduct.css";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newProduct } from "../../redux/actions/productActions";
export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/home");
  };
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
  });
  const categoryDropDown = [
    "Laptop",
    "Desktop Computer",
    "Server",
    "Printers and Scanners",
    "Storage",
    "Accessories",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newProduct(product));
    setProduct({
      title: "",
      description: "",
      category: "",
      price: 0,
      quantity: 0,
    });
  };

  return (
    <div className="add-product-container">
      <div className="add-product">
        <h2>ADD PRODUCT</h2>
        <form onSubmit={handleSubmit}>
          <div className="product-label">
            <label> Product title</label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="product-label">
            <label>Description</label>
            <textarea
              name="description"
              maxLength="200"
              value={product.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="product-label">
            <label>Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select a Category
              </option>
              {categoryDropDown.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="product-label">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="product-label">
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
      <button className="close-btn" onClick={handleNavigate}>
        <FiArrowLeft />
        Back to Shop
      </button>
    </div>
  );
}
