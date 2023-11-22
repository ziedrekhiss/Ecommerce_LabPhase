import { useDispatch, useSelector } from "react-redux";
import productImg from "../../assets/Product_icon.jpg";
import { FiMinusCircle, FiPlusCircle, FiDelete } from "react-icons/fi";
import "../../style/cartItem.css";
import { deleteItem } from "../../redux/actions/cartActions";

export default function CartItem({ id, title, quantity, price }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.cart);
  const currentPage = page.currentPage;
  const itemPerPage = page.itemPerPage;
  const handleDelete = () => {
    console.log(currentPage, itemPerPage);
    dispatch(deleteItem(id, currentPage, itemPerPage));
  };

  return (
    <div className="cart-item">
      <img src={productImg} alt="loading" />
      <p>{title}</p>
      <div className="item-qty">
        <button>
          <FiMinusCircle size={20} />
        </button>
        <input type="text" value={quantity} />
        <button>
          <FiPlusCircle size={20} />
        </button>
      </div>
      <span>{price}TND</span>
      <button onClick={() => handleDelete()}>
        <FiDelete size={20} />
      </button>
    </div>
  );
}
