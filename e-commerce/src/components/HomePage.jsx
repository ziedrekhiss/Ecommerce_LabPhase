import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import ProductDetails from "../components/product/ProductDetails";
import { fetchProducts } from "../redux/actions/productActions";
import ProductList from "./product/ProductList";

export default function HomePage() {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProducts());
    };
    if (isShown === false) {
      fetchData();
    }
  }, [dispatch, isShown]);

  return (
    <div className="homepage">
      {isShown ? (
        <ProductDetails setIsShown={setIsShown} />
      ) : (
        <ProductList setIsShown={setIsShown} />
      )}
    </div>
  );
}
