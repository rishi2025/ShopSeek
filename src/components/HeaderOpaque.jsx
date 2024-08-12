import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { ShopSeekLogo, User } from "../Images/MainImage.jsx";
import { Container, Logo } from "./mainComponent.jsx";

function HeaderOpaque() {
    // const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
        },
        {
            name: "Chats",
        },
        {
            name: "Cart",
        },
        {
            name: "Logout",
        },
    ];

    const userImage = null;

    return (
        <header className="py-4 shadow bg-[#874CCC] text-white font-gruppo absolute left-0 top-0 z-10 w-full">
            <Container>
                <nav className="flex">
                    <div className="mr-4 text-white">
                        {/* <Link to="/"> */}
                            <Logo src={ShopSeekLogo} width="50px" className="rounded-xl" company="ShopSeek"/>
                        {/* </Link> */}
                    </div>

                    <ul className="flex ml-auto">
                        {navItems.map((item) => 
                        (
                            <li key={item.name}>
                                <button
                                // onClick={() => navigate(item.slug)}
                                    className={`inline-bock px-6 py-2 font-gruppo duration-200 hover:bg-white hover:text-black`}
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