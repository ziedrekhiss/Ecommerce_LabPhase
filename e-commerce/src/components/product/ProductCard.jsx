
import {Link} from 'react-router-dom'
import card from '../../assets/card.jpg'
import '../../style/productCard.css'
import { useDispatch , useSelector} from 'react-redux'
import {addItemToCart} from '../../redux/actions/cartActions'

export default function ProductCard({title, description, price, id}) {

  const dispatch = useDispatch();


  const handleAddToCart =()=>{
    // console.log(id);
    dispatch(addItemToCart(id))
  }

  return (
    <div className='item'>
       <Link to={`/ProductDetails/${id}`}>
        <img src={card} alt="img" />
        <div className="itemdescription">
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{price}</span>
        </div>
       </Link> 
        <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}
