import SearchBar from "./SearchBar";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="page-wrapper">
      <main>
        <SearchBar />
        <Categories />
      </main>
    </div>
  );
};

export default Home;

// GET /api/items
