import { useState, useEffect } from "react";
import { productService } from "../api/services/productService";
import SearchInput from "../components/SearchInput";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import NotFoundResults from "../components/NotFoundResults";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      return;
    }

    setLoading(true);
    const timeoutId = setTimeout(async () => {
      try {
        const data = await productService.search(query);
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div>
      <h1>Product Search</h1>
      <SearchInput query={query} setQuery={setQuery} />

      {loading && <Loader />}
      {!loading && query && products.length === 0 && <NotFoundResults />}
      {!loading && products.length > 0 && <ProductList products={products} />}
    </div>
  );
};

export default SearchPage;
