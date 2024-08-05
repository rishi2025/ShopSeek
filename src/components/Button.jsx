import React from "react";

function Button({
    text,
    subText,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-customColors-offWhite',
    subTextColor = 'text-customColors-lightPurple',
    className = '',
    round = true,
    ...props
}) {
    return (
        <button
            className={`font-gruppo px-4 py-2 ${round ? "rounded-lg" : ''} ${bgColor} ${textColor} ${className}`} {...props}
        >
            {text}
            <span className={`${subTextColor} ml-4`}>
                {subText}
            </span>
        </button>
    )
};

export default Button;