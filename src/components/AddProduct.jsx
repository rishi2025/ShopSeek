import React, { useState } from 'react';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    size: '',
    tags: [], 
  });

  const Tag = ({ tag, onDelete }) => (
    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
      {tag}
      <button
        onClick={() => onDelete(tag)}
        className="ml-2 text-white focus:outline-none"
      >
        &times;
      </button>
    </span>
  );

  const [newTag, setNewTag] = useState('');

  const handleDeleteTag = (tagToDelete) => {
    const updatedTags = productData.tags.filter((tag) => tag !== tagToDelete);
    setProductData({
      ...productData,
      tags: updatedTags,
    });
  };

  const handleAddTag = () => {
    const trimmedTag = newTag.trim();
    if (trimmedTag && !productData.tags.includes(trimmedTag)) {
      setProductData({
        ...productData,
        tags: [...productData.tags, trimmedTag],
      });
      setNewTag('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const [images, setImages] = useState([null, null, null]); // Initialize with three null values for the three image slots

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    const updatedImages = [...images];
    updatedImages[index] = file;
    setImages(updatedImages);
  };

  // Handle image deletion
  const handleImageDelete = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Product Data:', productData);
    console.log('Uploaded Images:', images.filter(Boolean)); // Filter out null values
    // You can add further logic to save the data to your backend or state management system
  };

  return (
    <div className="min-h-screen bg-customColors-fadedPurple p-8">
      <h2 className="py-2 pl-3 rounded-lg max-w-52 shadow-md shadow-purple-400 text-white text-3xl font-gruppo font-bold mb-8 text-left bg-purple-600">
        Add Product
      </h2>

      <div className="flex gap-14 m-16">
        {/* Upload Image Section */}
        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Main Image Upload */}
          <div className="w-72 h-48 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-center rounded relative">
            {images[0] ? (
              <>
                <img
                  src={URL.createObjectURL(images[0])}
                  alt="Main Upload"
                  className="w-full h-full object-cover rounded"
                />
                <button
                  onClick={() => handleImageDelete(0)}
                  className="absolute bottom-2 bg-red-400 text-white px-2 py-1 rounded"
                >
                  delete
                </button>
              </>
            ) : (
              <label className="text-gray-500 cursor-pointer">
                UPLOAD THE IMAGE OF THE PRODUCT
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, 0)}
                />
              </label>
            )}
          </div>

          {/* Additional Images */}
          <div className="flex gap-4">
            {images.slice(1).map((image, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-[8.5rem] h-24 border-2 border-dashed border-gray-400 flex items-center justify-center text-center rounded">
                  {image ? (
                    <>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Additional Upload ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleImageDelete(index + 1)}
                        className="absolute bottom-[-20px] bg-red-400 text-white px-2 py-1 rounded mt-2"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <label className="text-gray-500 cursor-pointer">
                      +
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, index + 1)}
                      />
                    </label>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1">
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={productData.title}
              onChange={handleChange}
              className="w-2/3 p-2 border bg-customColors-fadedPurple border-gray-400 rounded"
              placeholder="Enter product title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="w-2/3 p-2 border bg-customColors-fadedPurple border-gray-400 rounded h-32"
              placeholder="Enter product description"
            ></textarea>
          </div>
            <div className="mb-4">
              <label htmlFor="tags" className="block text-gray-700">
                Tags
              </label>
            <div className="flex items-center space-x-2 w-2/3">
              <input
                type="text"
                id="tags"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 p-2 border bg-customColors-fadedPurple border-gray-400 rounded"
                placeholder="Type a tag and press Enter"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="bg-purple-400 hover:bg-purple-500 text-white font-gruppo font-bold py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
            <div className="mt-4 flex gap-2 flex-wrap">
              {productData.tags.map((tag) => (
                <Tag key={tag} tag={tag} onDelete={handleDeleteTag} />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Size (Option)</label>
            <input
              type="text"
              name="size"
              value={productData.size}
              onChange={handleChange}
              className="w-2/3 p-2 border bg-customColors-fadedPurple border-gray-400 rounded"
              placeholder="Enter size"
            />
          </div>
          <div className="flex gap-4">
            <button
              className="bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-customColors-fadedPurple hover:shadow-md hover:shadow-purple-400 px-4 py-2 rounded border-2 border-purple-600 duration-300"
              onClick={handleSubmit}
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
