import Categories from "./Categories";
import SearchBar from "./SearchBar";

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

