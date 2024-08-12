import React from 'react';
import {Stars} from "../Images/MainImage.jsx"
const PurchasedCard = ({
  title = "Shreyash",
  buyerName = "Shreyash",
  buyerImage = Stars,
  sellerName = "Shreyash",
  sellerImage = Stars,
  sellerProductImage = Stars,
  buyerProductImage = Stars,
  price = 1200,
  orderDate = "12-03-24",
  size = "S",
  description = "",
  tags = ["Shoes"],
  rating = 3,
}) => {
  return (
    <div className="max-h-[30rem] max-w-72 mx-4 bg-gradient-to-b from-violet-300 to-violet-400 rounded-xl shadow-lg p-4">
      <h2 className="font-gruppo text-center text-lg font-bold mb-4">{title}</h2>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <img
            src={buyerImage}
            alt="Buyer"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <p className="mr-5 text-sm font-gruppo font-bold">{buyerName}</p>
            <p className=" font-gruppo font-bold mr-5 text-xs text-gray-500">(Buyer)</p>
          </div>
        </div>
        <img
          src={buyerProductImage[0]}
          alt="Shoe 1"
          className="w-20 h-20 rounded"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <img
            src={sellerImage}
            alt="Seller"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <p className="font-gruppo font-bold mr-5 text-sm ">{sellerName}</p>
            <p className="font-gruppo font-bold mr-5 text-xs text-gray-500">(Seller)</p>
          </div>
        </div>
        <img
          src={sellerProductImage[0]}
          alt="Shoe 2"
          className="w-20 h-20 rounded"
        />
      </div>

      <p className="font-gruppo text-center text-xl font-bold mb-4">Rs. {price}</p>
    
      <div className="flex justify-center space-x-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="font-gruppo px-3 py-1 bg-white rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="text-sm text-center mb-4">
        <p className='font-gruppo font-bold'>ORDERED ON: <span className="font-gruppo ">{orderDate}</span></p>
        <p className='font-gruppo font-bold'>SIZE: <span className="font-gruppo">{size}</span></p>
      </div>
      <Stars rating = {rating}/> 
      <p className="font-gruppo font-bold text-xs text-center text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default PurchasedCard;
