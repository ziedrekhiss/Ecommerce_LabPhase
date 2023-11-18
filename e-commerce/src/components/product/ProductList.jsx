import { useSelector} from 'react-redux'
import ProductCard from './ProductCard'


export default function ProductList() {
  const products = useSelector((state)=>state.product)
  const error = useSelector((state) => state.returnError)
  const loading = useSelector((state)=>state.product.loading)
  const items = products.products
  
  
  return (
    <div>
        <div className="container">
        {loading? <div>... loading</div>:
        error ==null && error ? <div>error</div>:
        
        items.length ? (
        items.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        )) 
      )
      :items.length ==0? <div>No products avilable</div>
      :null}     
        </div>
    </div>
  )
}
