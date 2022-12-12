import { fetchItems } from "../utilities/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemGrid = ({ currentCategory }) => {
  const [fetchedItems, setFetchedItems] = useState([]);

  useEffect(() => {
    if (currentCategory !== "All") {
      fetchItems(currentCategory).then((items) => {
        setFetchedItems(items);
      });
    } else {
      fetchItems("").then((items) => {
        setFetchedItems(items);
      });
    }
  }, [currentCategory]);

  return (
    <main className="item-grid">
      {fetchedItems.map((item) => {
        return (
          <article className="item-card" key={item.item_id}>
            <Link to={`api/items/${item.item_id}`}>
              <img
                className="item-card-img"
                src={item.img_url}
                alt={item.item_name}
              />
              <h3 className="item-card-text">{item.item_name}</h3>
            </Link>
          </article>
        );
      })}
    </main>
  );
};

export default ItemGrid;
