import { fetchItemByID } from "../utilities/api";
import { formatPrice } from "../utilities/utils";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "./contexts";
import { postToBasket } from "../utilities/api";

const Item = () => {
  const { item_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedItem, setFetchedItem] = useState({});
  const [basketState, setBasketState] = useState(false);
  const { user } = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    fetchItemByID(item_id).then((matchedItem) => {
      setFetchedItem(matchedItem);
      setIsLoading(false);
    });
  }, [fetchedItem, item_id]);

  // console.log(basketState);

  const handleClick = (item_id) => {
    if (user) {
      postToBasket(item_id, user).then(() => {
        setBasketState(true);
        setTimeout(() => {
          setBasketState(false);
        }, 2000);
      });
    } else {
      window.alert("To add to your basket, please sign in.");
    }
  };

  if (isLoading) {
    return (
      <main className="loading-wrap">
        <span className="loading">Loading...</span>
      </main>
    );
  }

  return (
    <main className="item-details-page">
      <header className="back-header">
        <button onClick={() => navigate(-1)}>&lt; Back</button>
      </header>
      <article className="item-details">
        <img
          className="item-details-img"
          src={fetchedItem.img_url}
          alt={fetchedItem.item_name}
        />
        <div className="item-details-text">
          <h2>{fetchedItem.item_name}</h2>
          <p>{fetchedItem.description}</p>
        </div>
        <button
          onClick={() => handleClick(item_id)}
          id="item-details-price-btn"
        >
          {basketState ? "Added" : formatPrice(fetchedItem)}
        </button>
      </article>
    </main>
  );
};

export default Item;

// GET /api/items/:item_id - retrieve a specific item's details
// POST /api/users/:username/basket - add item to the current user's basket
