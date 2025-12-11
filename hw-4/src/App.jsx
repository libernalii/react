import "./App.css"
import { useState } from "react";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductFilter from "./components/ProductFilter";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { initialProducts } from "./mocks/products";

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filterCategory, setFilterCategory] = useState("all");

  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(prev => !prev);
  };

  const handleAddProduct = (newProduct) => {
    console.log("Додано товар:", newProduct);
    setProducts(prev => [...prev, newProduct]);
    setShowForm(false);
  };

  const handleChangeCategory = (category) => {
    console.log("Вибрана категорія:", category);
    setFilterCategory(category);
  };

  const filteredProducts =
    filterCategory === "all"
      ? products
      : products.filter(p => p.category === filterCategory);

  return (
    <div className="app-wrapper">
      <Header onToggleForm={handleToggleForm} showForm={showForm} />

      <div className="content">
        {showForm && (
          <ProductForm onAddProduct={handleAddProduct} />
        )}

        <ProductFilter onChangeCategory={handleChangeCategory} />

        <ProductList
          products={filteredProducts}
          onAddToCart={(product) =>
            console.log(`Продукт з id: ${product.id} додано в кошик`)
          }
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
