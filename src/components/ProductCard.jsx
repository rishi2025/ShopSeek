import React, { useState, useRef, useEffect } from 'react';
import { BASE_URL } from '../Constants';

const ProductCard = ({
  id = "66f65e2969020681ed755dc3",
  title = "NIKE SHOES",
  imageUrl = "https://via.placeholder.com/100", // Default placeholder image
  tags = ["Shoes", "Shoes", "Shoes"],
  requestedOn = "26-07-2024",
  size = "14",
  description = "White and pink color shoes or sneakers",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([null, null, null]);
  const [price, setPrice] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
    };
  }, [isModalOpen]);

  const displayedTags = tags.length > 3 ? tags.slice(0, 3) : tags;
  const showMoreTags = tags.length > 3;

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    const updatedImages = [...images];
    updatedImages[index] = file;
    setImages(updatedImages);
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  const handleSubmit = async () => {
    try {
      // Upload images to the server and get Cloudinary URLs
      const imageUrls = await uploadImagesToServer(images);

      if (imageUrls.length === 0) {
        throw new Error('No images uploaded.');
      }

      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          id,
          seller_email: "66f65e2969020681ed755dc3",
          title,
          price,
          description: additionalDetails,
          seller_product_picture: imageUrls[0],
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${BASE_URL}/seller/accept-product-request`, requestOptions);

      if (!response.ok) {
        throw new Error('Failed to accept request');
      }

      setIsModalOpen(false);
      setImages([null, null, null]);
      setPrice('');
      setAdditionalDetails('');
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const uploadImagesToServer = async (images) => {
    try {
      const uploadPromises = images
        .filter(Boolean)
        .map(async (image) => {
          if (image) {
            const formData = new FormData();
            formData.append('image', image);

            const res = await fetch(`${BASE_URL}/upload`, {
              method: 'POST',
              body: formData,
            });
            const data = await res.json();
            return data.url;
          }
        });

      const uploadedImageUrls = await Promise.all(uploadPromises);
      return uploadedImageUrls.filter(Boolean);
    } catch (err) {
      console.error('Error uploading images:', err);
      return [];
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-violet-300 to-violet-400 rounded-lg p-6 shadow-lg flex flex-col items-center space-y-4 text-center text-white max-h-[30rem] max-w-[18rem] mx-4">
        {/* Title */}
        <h2 className="font-gruppo text-lg font-bold text-black">{title}</h2>

        {/* Product Image */}
        <div className="bg-white rounded-lg p-2">
          <img src={imageUrl} alt={title} className="w-32 h-32 rounded-lg object-cover" />
        </div>

        {/* Accept Request Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="font-gruppo bg-gradient-to-r from-pink-400 to-purple-400 py-2 px-6 rounded-full shadow-md font-semibold text-white hover:scale-105 transition-transform duration-200"
        >
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
          <p>REQUESTED ON : {requestedOn}</p>
          <p>SIZE: {size}</p>
        </div>

        {/* Description */}
        <p className="font-gruppo text-xs text-gray-800 font-bold">
          {description}
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl transform transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-center flex-1">Accept Request</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Image Upload Section */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Upload Product Images</h3>
              <div className="flex gap-3">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <div className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-purple-400 transition-colors duration-200">
                      {image ? (
                        <>
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <button
                            onClick={() => handleImageDelete(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                          >
                            ×
                          </button>
                        </>
                      ) : (
                        <label className="cursor-pointer text-gray-500 hover:text-purple-500 transition-colors duration-200">
                          <span className="text-2xl">+</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, index)}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Input */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Your Price</label>
              <input
                type="number"
                min="0"
                step="1"
                value={price}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || (parseInt(value) >= 0 && Number.isInteger(parseFloat(value)))) {
                    setPrice(value);
                  }
                }}
                className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your price"
              />
            </div>

            {/* Additional Details */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Additional Details</label>
              <textarea
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                className="w-full p-2 border rounded-xl h-24 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter any additional details about the product"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-1.5 border rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-1.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
