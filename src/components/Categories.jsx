import { fetchCategories } from "../utilities/api";
import { useState, useEffect } from "react";
import ItemGrid from "./ItemGrid";

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedCategories, setFetchedCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    fetchCategories().then((categories) => {
      setFetchedCategories(categories);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (category_name) => {
    setCurrentCategory((currentCategory) => {
      if (currentCategory === category_name) {
        return;
      } else {
        return category_name;
      }
    });
  };

  if (isLoading) {
    return (
      <main className="loading-wrap">
        <span className="loading">Loading...</span>
      </main>
    );
  }

  return (
    <main>
      <section className="categories-bar">
        <button onClick={() => handleClick("All")} className="all-items-btn">
          All
        </button>

        {fetchedCategories.map(({ category_name }) => {
          return (
            <button
              key={category_name}
              onClick={() => handleClick(category_name)}
            >
              {category_name}
            </button>
          );
        })}
      </section>
      <ItemGrid currentCategory={currentCategory} />
    </main>
  );
};

export default Categories;

// GET /api/categories
