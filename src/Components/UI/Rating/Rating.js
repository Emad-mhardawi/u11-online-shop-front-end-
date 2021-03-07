import React, { useState } from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div className="Rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star-rating"
              color={ratingValue <= rating ? "gold" : "black"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
