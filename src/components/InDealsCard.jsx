import React from 'react';

const InDealsCard = ({
  title = "NIKE SHOES",
  imageUrl = "https://via.placeholder.com/100", // Default placeholder image
  tags = ["Shoes", "Shoes", "Shoes"],
  priceOffer = "51",
  size = "14",
}) => {

  const displayedTags = tags.length > 3 ? tags.slice(0, 3) : tags; // Show only the first 3 tags
  const showMoreTags = tags.length > 3; // Flag to show "..."

  return (
    <div className="bg-gradient-to-b from-violet-300 to-violet-400 rounded-lg p-6 shadow-lg flex flex-col items-center space-y-4 text-center text-white max-h-[30rem] max-w-[18rem] mx-4">
      {/* Title */}
      <h2 className="font-gruppo text-lg font-bold text-black">{title}</h2>

      {/* Product Image */}
      <div className="bg-white rounded-lg p-2">
        <img src={imageUrl} alt={title} className="w-32 h-32 rounded-lg object-cover" />
      </div>

      {/* Accept Request Button */}
      <button className="font-gruppo bg-gradient-to-r from-pink-400 to-purple-400 py-2 px-6 rounded-full shadow-md font-semibold text-white hover:scale-105 transition-transform duration-200">
        Accept Request
      </button>

      {/* Tags */}
      <div className="flex justify-center space-x-2 mb-4">
        {displayedTags.map((tag, index) => (
          <span key={index} className="font-gruppo px-2 py-1 bg-white rounded-full text-xs text-black">
            {tag}
          </span>
        ))}
        {showMoreTags && (
          <span className="bg-white text-gray-700 py-1 px-3 rounded-full">...</span>
        )}
      </div>

      {/* Additional Details */}
      <div className="text-sm font-gruppo text-black font-bold">
        <p>PRICE OFFERED : Rs. {priceOffer}</p>
        <p>SIZE: {size}</p>
      </div>
      <button className="font-gruppo bg-gradient-to-r from-white to-purple-300 py-2 px-6 rounded-full shadow-md font-semibold text-gray-700 hover:scale-105 transition-transform duration-200">
        Chat with Seller
      </button>
    </div>
  );
};

export default InDealsCard;
