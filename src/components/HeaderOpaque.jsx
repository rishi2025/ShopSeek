import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ShopSeekLogo, User } from "../Images/MainImage.jsx";
import { Container, Logo } from "./mainComponent.jsx";

function HeaderOpaque({setCurrentPage, role = "seller"}) {
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            path: `/${role}`,
            menuOption: 0,
        },
        {
            name: "Chats",
            path: `/${role}`,
            menuOption: 2,
        },
        {
            name: "Cart",
            path: `/${role}`,
            menuOption: 3,
        },
        {
            name: "Logout",
            path: '/',
        },
    ];

    const userImage = null;

    const handleClick = (item) => {
        navigate(item.path);
        setCurrentPage(item.menuOption);
    }

    return (
        <header className="py-4 shadow bg-[#874CCC] text-white font-gruppo absolute left-0 top-0 z-10 w-full">
            <Container>
                <nav className="flex">
                    <div className="mr-4 text-white">
                        <Link to="/">
                            <Logo src={ShopSeekLogo} width="50px" className="rounded-xl" company="ShopSeek"/>
                        </Link>
                    </div>

                    <ul className="flex ml-auto">
                        {navItems.map((item) => 
                        (
                            <li key={item.name}>
                                <button
                                onClick={() => handleClick(item)}
                                    className={`inline-bock px-6 py-2 font-gruppo font-bold duration-200 ${item.name === "Sign Up" ? "bg-customColors-offWhite text-black" : null} hover:border-b-2 hover:border-purple-950 hover:text-purple-950 hover:transform hover:-translate-y-1`}
                                >
                                    {item.name}
                                </button>
                            </li>
                        )
                        )}
                    </ul>
                    <img src={ userImage ? userImage : User} className="h-10 mx-4 cursor-pointer rounded-lg"/>
                </nav>
            </Container>
        </header>
    )
};

export default HeaderOpaque;