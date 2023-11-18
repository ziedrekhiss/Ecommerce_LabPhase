import { useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import ProductDetails from '../components/product/ProductDetails'
import ShoppingCart from './cart/ShoppingCart';
import {fetchProducts} from '../redux/actions/productActions'
import '../style/homePage.css'
import '../style/login.css'
import ProductList from './product/ProductList'

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData =  () => {
        dispatch(fetchProducts());
     };
    // fetchData();
    const unlisten = () => {
      fetchData();
    };
    return unlisten;
  }, [dispatch, navigate]);
  
  return (
    <div>
        <Navbar/>
        <ProductList/>
        <ProductDetails/>
        <ShoppingCart/>
    </div>
  )
}
