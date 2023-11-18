import '../../style/shoppingCart.css'
import { FiArrowLeft } from "react-icons/fi";
import CartItem from './CartItem'

export default function ShoppingCart() {
  return (
    <div className="ShoppingCart">
        <div className="items">
            <div className="item-box">
                <h2>Shopping Cart</h2>
                <span>3 items</span>
            </div>
            <div className="cart-item">
                <CartItem/>
            </div>
            <button className='close-btn'><FiArrowLeft />Back to Shop</button>
        </div>
        <div className="summary">
            <h2>Summary</h2>
            <div className="item-box">
                <span>ITEMS </span>
                <span>Bill</span>
            </div>
            <div className="item-box">
                <span>TOTAL PRICE</span>
                <span>100TND</span>
            </div>
            <button>CHECKOUT</button>
        </div>
    </div>
  )
}
