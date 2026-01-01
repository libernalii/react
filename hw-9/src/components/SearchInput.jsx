const SearchInput = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      placeholder="Search products..."
      onChange={(e) => setQuery(e.target.value)}
      style={{ padding: "10px", width: "300px" }}
    />
  );
};

export default SearchInput;
