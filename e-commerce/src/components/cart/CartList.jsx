import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../../redux/actions/cartActions";
import CartItem from "./CartItem";
import Pagination from "../Pagination";

export default function CartList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const page = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length === 0) {
      dispatch(fetchItems(page.currentPage, page.itemPerPage));
    }
  }, [dispatch, cart, page.currentPage, page.itemPerPage]);

  const handlePageChange = (newPage) => {
    dispatch(fetchItems(newPage, page.itemPerPage));
  };
  const startIndex = (page.currentPage - 1) * page.itemPerPage;
  const endIndex = page.currentPage * page.itemPerPage;

  const displayedItems = Array.isArray(cart.items)
    ? cart.items.slice(startIndex, endIndex)
    : [];

  return (
    <div>
      <div style={{ width: "600px", height: "400px", paddingTop: "0px" }}>
        {cart.loading ? (
          <div>... loading</div>
        ) : cart.initialState ? (
          <div>Your Cart is Empty</div>
        ) : (
          <div
            className="cart-list"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {displayedItems &&
              displayedItems.map((item) => (
                <CartItem
                  key={item._id}
                  id={item.productId}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))}
            <Pagination
              currentPage={page.currentPage}
              itemPerPage={page.itemPerPage}
              totalItems={page.totalItems}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
