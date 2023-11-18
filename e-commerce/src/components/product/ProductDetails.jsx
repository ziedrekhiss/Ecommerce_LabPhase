import productImg from '../../assets/Product_icon.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import '../../style/productDetails.css'
import { fetchProduct } from '../../redux/actions/productActions'

export default function ProductDetails() {
  
  const dispatch = useDispatch();
  const product = useSelector ((state) => state.product.products)
  const error = useSelector((state) => state.returnError)
  const loading = useSelector((state)=>state.product.loading)
  const { id } = useParams();

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
                <span>{product.price}T.N.D</span>
                <span>Quantity: {product.quantity}</span>
                <span>{product.rate}</span>
                <button>Add to cart</button>
            </div>
        </div>}
    </div>
  )
}
