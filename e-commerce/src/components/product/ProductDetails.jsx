import productImg from '../../assets/Product_icon.jpg'
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import '../../style/productDetails.css'
import { fetchProduct } from '../../redux/actions/productActions'
import {addItemToCart} from '../../redux/actions/cartActions'

export default function ProductDetails({setIsShown}) {
  
  const dispatch = useDispatch();
  const product = useSelector ((state) => state.product.products)
  const error = useSelector((state) => state.returnError)
  const loading = useSelector((state)=>state.product.loading)
  const { id } = useParams();
  const handleAddToCart =()=>{
    dispatch(addItemToCart(id))
  }
  
  useEffect(()=>{
    dispatch(fetchProduct(id)) 
  },[dispatch, id]);

  if (!id) {
    return null
  } 
  
  return (
    <div className='product-section'>
      {loading? <div>... loading</div>:
        error ==null && error ? <div>error</div>:
        <div className="product-container">
            <img src={productImg} alt="product img" />
            <div className="details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span>{product.price} TND</span>
                <span>Quantity: {product.quantity}</span>
                <span>{product.rate}</span>
                <button className='cart-btn' onClick={handleAddToCart}>Add to cart</button>
                <button className='close-btn' onClick={()=>setIsShown(false)}>
                  <FiArrowLeft/> Back to Shop
                </button>
            </div>
        </div>}
    </div>
  )
}
