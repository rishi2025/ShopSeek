import React from 'react';

const Notification = ({
    status='Success',
    subject='Delivered',
    message='Your Order has been Delivered.',
    more_info='More Details'
}) => {
    return (
        <div className="bg-gradient-to-r relative from-customColors-lightGreen to-customColors-darkGreen p-6 rounded-lg shadow-md w-[40%] h-48">
            <h2 className="text-sm font-medium text-green-800">{status}</h2>
            <p className="text-2xl font-bold text-green-900 mt-2">{subject}</p>
            <p className="text-sm text-green-800 mt-2">{message}</p>
            <button className="bg-green-700 text-customColors-lightGreen py-2 px-4 rounded mt-5 absolute bottom-5 right-5 ">
                {more_info}
            </button>
        </div>
    );
};

export default Notification;
