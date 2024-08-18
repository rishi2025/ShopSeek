import React from 'react';

function SmallBox({
    title,
    totalNumber, //this is for total orders and new customers
    imagesrc,
    bg = "bg-gradient-to-r from-purple-200 to-pink-300",
}) {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md h-48 w-[25%]`}>
            <div className="flex justify-between items-start mt-2.5">
                <div className="flex flex-col">
                    <h2 className="text-sm font-medium text-gray-700">{title}</h2>
                    <p className="text-4xl text-gray-700 mt-2">{totalNumber}</p>
                </div>
                <img src={imagesrc} alt="Icon" className="h-10 w-10 text-gray-500" />
            </div>
        </div>
    );
}

export default SmallBox;

