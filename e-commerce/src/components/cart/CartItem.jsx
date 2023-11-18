import productImg from '../../assets/Product_icon.jpg'
import { FiMinusCircle, FiPlusCircle, FiDelete } from "react-icons/fi";
import '../../style/cartItem.css'

export default function CartItem() {
  return (
    <div className="cart-item">
        <img src={productImg} alt="loading" />
        <p>product.title</p>
        <div className="item-qty">
          <button><FiMinusCircle size={20}/></button>
          <input type="text" />
          <button><FiPlusCircle size={20}/></button>
        </div>
        <span>100TND</span>
        <button><FiDelete size={20}/></button>
    </div>
  )
}
