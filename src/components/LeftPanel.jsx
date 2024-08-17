import React, { useState } from "react";
import LeftPanelBullet from '../Images/LeftPanelBullet.png';

const LeftPanel = ({
    username,
    role = "Buyer",
    menuItems = ["Home"],
    userImgUrl = "https://via.placeholder.com/100",
    isActive,
    setCurrentPage,
}) => {

    const [isActiveMenuOption, setisActiveMenuOption] = useState(isActive);

    const handleClick = (menuOption) => {
        setisActiveMenuOption(menuOption);
        setCurrentPage(menuOption);
        isActive = isActiveMenuOption;
    }

    return (
        <div className="w-[13rem] h-[45.5rem] p-5 left-0 bg-gray-100">
            <div className="text-center mb-5 relative">
                <img
                    src={userImgUrl}
                    alt="Profile"
                    className="rounded-full mb-2 ml-8"
                />

                <button className="text-blue-800 font-bold mb-2 border-none bg-none cursor-pointer font-fira">
                    Change image
                </button>
                <h3 className="font-fira">{username}</h3>
                <p className="font-fira">({role})</p>

            </div>

            <ul className="list-none p-0">
                {menuItems.map((item, index) => (
                    <li key={index} className="my-2.5">
                        <a className="no-underline text-black flex items-center">
                            <span className="mr-2.5 flex items-end">
                                <img 
                                    src={LeftPanelBullet} 
                                    alt=""
                                    className="w-3 h-3 relative top-[2px]" 
                                />
                            </span>
                            <span
                                className={`relative top-[-2px] font-gruppo ${isActiveMenuOption == index ? "bg-violet-300" : null}`}
                                onClick={() => handleClick(index)}
                            >
                                {item}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftPanel;
