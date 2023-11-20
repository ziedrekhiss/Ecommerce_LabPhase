import { useEffect } from 'react';
import '../../style/shoppingCart.css'
import { FiArrowLeft } from "react-icons/fi";
import CartList from './CartList';
import {useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { fetchItems, clearCart } from '../../redux/actions/cartActions'
export default function ShoppingCart() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state)=>state.cart);
    const shippingCost = 7;
    const handleNavigate = ()=>{
        navigate("/home")
    }

    const handleClear = ()=>{
        dispatch (clearCart())
    }

    useEffect(() => {
        const fetchData = async () => {
           dispatch(fetchItems(cart.currentPage, cart.itemPerPage));
        };
        if(!cart.items || cart.items.length === 0){
         fetchData();}
      }, [dispatch, cart.currentPage, cart.itemPerPage , cart.items ]);

    return (
    <div className="ShoppingCart">
        <div className="items">
            <div className="item-box">
                <h2>Shopping Cart</h2>
                <span> items: {cart.totalItems}</span>
            </div>
            <div className="cart-item">
                <CartList/>
            </div>
            <button className='close-btn' onClick={handleNavigate}><FiArrowLeft />Back to Shop</button>
            <button style={{paddingTop:"20px"}} onClick={handleClear}>Clear Cart</button>
        </div>
        <div className="summary">
            <h2>Summary</h2>
            <div className="item-box">
                <span>ITEMS: {cart.totalItems} </span>
                <span>Bill: {cart.bill}_TND </span>
            </div>
            <div className="item-box">
                <span>SHIPPING COST: {shippingCost}_TND </span>
            </div>
            <div className="item-box">
                <span>TOTAL PRICE</span>
                <span>{cart.bill + shippingCost}_TND</span>
            </div>
            <button>CHECKOUT</button>
        </div>
    </div>
  )
}
