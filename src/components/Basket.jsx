import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./contexts";
import { fetchBasket, fetchOrders, postToOrders } from "../utilities/api";

const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [orderedItems, setOrderHistory] = useState([]);
  const user = useContext(UserContext);
  // const [isLoading, setIsLoading] = useState(true);
  // if (isLoading) {
  //   return (
  //     <main className="loading-wrap">
  //       <span className="loading">Loading...</span>
  //     </main>
  //   );
  // }
  // setIsLoading(false);

  let navigate = useNavigate();

  useEffect(() => {
    fetchBasket(user).then((items) => {
      setBasketItems(items);
    });
  }, [user]);

  useEffect(() => {
    fetchOrders(user).then((items) => {
      setOrderHistory(items);
    });
  }, [user]);

  const checkBasket = () => {
    if (user.user) {
      return <h2>{user.user}'s Basket</h2>;
    } else {
      return (
        <p>
          To view your basket and orders, please{" "}
          <Link to="/api/users">sign in</Link>.
        </p>
      );
    }
  };

  const checkOrders = () => {
    if (user.user) {
      if (orderedItems) {
        return <h2>{user.user}'s Orders</h2>;
      }
    }
  };

  const handleClick = (item_id, user) => {
    postToOrders(item_id, user);
  };

  return (
    <main id="basket-orders">
      <header className="back-header">
        <button onClick={() => navigate(-1)}>&lt; Back</button>
      </header>
      <section id="basket">
        {checkBasket()}
        {basketItems.map((basketItem) => {
          return (
            <ul>
              <li className="basket-order-card" key={basketItem.item_id}>
                {basketItem.item_name}
                <button
                  onClick={() => handleClick(basketItem.item_id, user.user)}
                  className="buy-btn"
                >
                  Buy
                </button>
              </li>
            </ul>
          );
        })}
      </section>
      <section id="orders">
        {checkOrders()}
        {orderedItems.map((order) => {
          return (
            <ul>
              <li className="basket-order-card" key={order.item_id}>
                {order.item_name}
              </li>
            </ul>
          );
        })}
      </section>
    </main>
  );
};

export default Basket;
