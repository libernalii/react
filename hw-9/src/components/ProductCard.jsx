import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

const ProductCard = ({ product }) => {
  // Розрахунок старої ціни при знижці
  const originalPrice =
    product.discountPercentage > 0
      ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
      : null;

  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #eee",
        borderRadius: "10px",
        padding: "10px",
        width: "220px",
        textAlign: "center",
        position: "relative",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
    >
      {/* Бейдж зі знижкою */}
      {product.discountPercentage > 0 && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "red",
            color: "white",
            padding: "4px 6px",
            borderRadius: "5px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          -{Math.round(product.discountPercentage)}%
        </div>
      )}

      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
      />
      <h3 style={{ fontSize: "16px", margin: "5px 0" }}>{product.title}</h3>

      <div style={{ margin: "5px 0" }}>
        {originalPrice && (
          <span
            style={{
              textDecoration: "line-through",
              color: "#888",
              marginRight: "5px",
            }}
          >
            ${originalPrice}
          </span>
        )}
        <span style={{ fontWeight: "bold", color: "#333" }}>${product.price}</span>
      </div>

      <RatingStars rating={product.rating} />

      <Link
        to={`/product/${product.id}`}
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "6px 12px",
          background: "#3b82f6",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#2563eb")}
        onMouseOut={(e) => (e.target.style.background = "#3b82f6")}
      >
        Details
      </Link>
    </div>
  );
};

export default ProductCard;
