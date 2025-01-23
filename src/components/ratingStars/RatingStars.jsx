import React from "react";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";

const roundToHalfStar = (rating) => {
  return Math.round(rating * 2) / 2;
};

const RatingStars = ({ rating }) => {
  const roundedRating = roundToHalfStar(rating);
  const fullStars = Math.floor(roundedRating); // Full stars
  const isHalfStar = roundedRating % 1 >= 0.5; // Half star
  return (
    <span className="d-flex align-items-center">
      {/* Full stars */}
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <MdStar key={`full-star-${index}`} color="#FFD700" size={20} />
        ))}
      {/* Half star */}
      {isHalfStar && <MdStarHalf key="half-star" color="#FFD700" size={20} />}
      {/* Empty stars */}
      {Array(5 - fullStars - (isHalfStar ? 1 : 0))
        .fill()
        .map((_, index) => (
          <MdStarBorder key={`empty-star-${index}`} size={20} color="#D6C38A" />
        ))}
    </span>
  );
};

export default RatingStars;
