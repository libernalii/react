import { Star } from "lucide-react";

const RatingStars = ({ rating, max = 5, size = 20 }) => {
  const roundedRating = Math.round(rating || 0);

  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < roundedRating ? "#facc15" : "none"}
          stroke="#facc15"
        />
      ))}
    </div>
  );
};

export default RatingStars;
