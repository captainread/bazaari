const SearchBar = () => {
  const searchPlaceholders = [
    "button-up shirt",
    "ps4 games",
    "pet food",
    "plush toy",
    "alarm clock",
    "dining table",
    "leather jacket",
    "acoustic guitar",
    "oil paints",
    "warhammer minis",
    "pencil case",
    "succulent",
    "MtG cards",
  ];

  var randomSearchPlaceholder =
    searchPlaceholders[Math.floor(Math.random() * searchPlaceholders.length)];

  return (
    <section>
      <form className="search-bar">
        <label htmlFor="search-text"></label>
        <input
          type="text"
          id="search-text"
          // onChange={(e) => setNewSearchTerm(e.target.value)}
          placeholder={randomSearchPlaceholder}
        ></input>
        <button>Search</button>
      </form>
    </section>
  );
};

export default SearchBar;
