import React, { useState, useEffect } from "react";
import LeftPanelBullet from '../Images/LeftPanelBullet.png';
import { useNavigate } from "react-router-dom";

const LeftPanel = ({
    username,
    role = "seller",
    menuItems = [{option: "Home", url: "/"}],
    userImgUrl = "https://via.placeholder.com/100",
}) => {

    const navigate = useNavigate();
    const currentUrl = window.location.pathname;
    const [isActiveMenuOption, setisActiveMenuOption] = useState(0);

    useEffect(() => {
        menuItems.forEach((option, index) => {
            if (`/${role}${option.url}` === currentUrl)
                setisActiveMenuOption(index);
        })
    }, [window.location.pathname]);

    const handleClick = (menuOption) => {
        setisActiveMenuOption(menuOption);
        navigate(`/${role}${menuItems[menuOption].url}`);
        // console.log(currentUrl);
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
                    <li key={index} className="my-2.5 align-middle">
                        <div className="no-underline text-black flex align-middle items-center">
                            <div className="mr-2.5 flex align-middle">
                                <img 
                                    src={LeftPanelBullet} 
                                    alt=""
                                    className="w-3 h-3 relative top-[2px] align-middle" 
                                />
                            </div>
                            <div
                                className={`cursor-pointer flex align-middle relative top-[-2px] w-11/12 pl-2 font-gruppo ${isActiveMenuOption == index ? "bg-violet-300 font-semibold" : null}`}
                                onClick={() => handleClick(index)}
                            >
                                {item.option}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftPanel;
