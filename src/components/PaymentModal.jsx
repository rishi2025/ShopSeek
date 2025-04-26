import React, { useState, useEffect } from 'react';

const PaymentModal = ({ 
    isOpen, 
    onClose, 
    price, 
    title,
    onConfirm,
    buyerName = "",
    buyerPhone = "",
    buyerAddress = ""
}) => {
    const [formData, setFormData] = useState({
        name: buyerName,
        phone: buyerPhone,
        address: buyerAddress,
        paymentMethod: 'cod' // Default to Cash on Delivery
    });

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto">
        <div className="bg-white rounded-2xl p-4 max-w-2xl w-full mx-4 shadow-2xl my-4">
            <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-center flex-1">Complete Your Purchase</h2>
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>

            <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-xl font-bold text-purple-600">Rs. {price}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Enter your full name"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Enter your phone number"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent h-20"
                placeholder="Enter your delivery address"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <div className="space-y-1">
                <label className="flex items-center space-x-2">
                    <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="text-purple-600 focus:ring-purple-400"
                    />
                    <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={handleChange}
                    className="text-purple-600 focus:ring-purple-400"
                    />
                    <span>Online Payment</span>
                </label>
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-4">
                <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 border rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                Cancel
                </button>
                <button
                type="submit"
                className="px-4 py-1.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors duration-200"
                >
                Confirm Purchase
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default PaymentModal; 