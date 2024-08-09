import React from "react";

const Stars = ({rating}) => {
    const totalStars = 5; // Total number of stars
    const filledStars = Math.round(rating); // Round to nearest whole number

    return (
      <div className="flex justify-center mb-2">
        {[...Array(totalStars)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={index < filledStars ? "gold" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-5 h-5 ${index < filledStars ? "text-yellow-500" : "text-gray-300"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27l-6.18 3.73 1.64-7.03-5.46-4.73 7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z" />
          </svg>
        ))}
      </div>
    );
  };

  export default Stars; 