import React from 'react';

const ProductRequest = ({ headings = { product: 'Product', categories: 'Categories', attributes: 'Attributes' },
    products = [
    {
        image : "https://trufflecollection.co.in/cdn/shop/products/TC-CUB3-WHITE-03-White_image_url_1.jpg?v=1624621482",
        name: 'Blue shoes',
        categories: ['Footwear', 'Lifestyle'],
        attributes: [
            { name: 'color', value: 'Blue' },
            { name: 'Size', value: 'S M L' },
        ],
    },
    {
        image : "https://trufflecollection.co.in/cdn/shop/products/TC-CUB3-WHITE-03-White_image_url_1.jpg?v=1624621482",
        name: 'Red shoes',
        categories: ['Footwear', 'Sport'],
        attributes: [
            { name: 'color', value: 'Red' },
            { name: 'Size', value: 'M L XL' },
        ],
    },
    {
        image : "https://trufflecollection.co.in/cdn/shop/products/TC-CUB3-WHITE-03-White_image_url_1.jpg?v=1624621482",
        name: 'Green shoes',
        categories: ['Footwear', 'Casual'],
        attributes: [
            { name: 'color', value: 'Green' },
            { name: 'Size', value: 'L XL XXL' },
        ],
    },
] }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pt-4 border-2">
            <h2 className="text-lg font-semibold mb-4">Product Requests</h2>
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-2 px-4 text-sm font-medium text-gray-700">{headings.product}</th>
                        <th className="py-2 px-4 text-sm font-medium text-gray-700">{headings.categories}</th>
                        <th className="py-2 px-4 text-sm font-medium text-gray-700">{headings.attributes}</th>
                    </tr>
                </thead>
                <tbody>
                    {products ? (
                        products.map((product, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="py-3 pr-4 flex flex-row gap-[0.5rem] justify-around items-center">
                                    <img src={product.image} className="w-12 h-12 rounded-full mb-2 justify-items-center"/>
                                    <div className="text-sm font-medium flex align-middle text-gray-800">{product.name}</div>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="text-xs text-gray-500">{product.categories.join(', ')}</div>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex space-x-2">
                                        {product.attributes.map((attr, i) => (
                                            <div key={i} className="text-xs text-gray-600">
                                                {`${attr.name}: ${attr.value}`}
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    <a href="#" className="text-blue-500 text-sm font-medium">View Details</a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colspan="4" className="py-4 text-center">
                                <h1 className="text-xl font-semibold text-gray-700">No products to view</h1>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductRequest;
