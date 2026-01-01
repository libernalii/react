import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productService } from "../api/services/productService";
import Loader from "../components/Loader";
import RatingStars from "../components/RatingStars";

const ProductDetails = () => {
  const { id } = useParams(); // отримуємо id з URL
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProduct = async () => {
      try {
        const data = await productService.getById(id, controller.signal);
        setProduct(data);
      } catch (error) {
        if (error.name === "CanceledError") return;
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => controller.abort(); // скасування запиту при виході
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <div>Товар не знайдено</div>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        ← Назад
      </button>

      <h2>{product.title}</h2>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
      <RatingStars rating={product.rating} />

      {/* Головне зображення */}
      <img
        src={product.images[selectedImageIndex]}
        alt={product.title}
        style={{ width: "400px", borderRadius: "8px", marginBottom: "10px" }}
      />

      {/* Мініатюри */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            style={{
              width: "60px",
              cursor: "pointer",
              border: selectedImageIndex === index ? "2px solid blue" : "1px solid #ccc",
              borderRadius: "4px",
            }}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>

      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetails;
