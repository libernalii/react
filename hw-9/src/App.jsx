import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ProductDetails from "./pages/ProductDetails";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<div>Сторінка не знайдена</div>} />
      </Routes>
    </Router>
  );
}

export default App;
