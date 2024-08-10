import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import ShopSeekLogo from "../Images/ShopSeekLogo.png";
import Logo from "./Logo";
import {Container} from "./mainComponent.jsx"

function Header() {
    // const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            ref: '',
        },
        {
            name: "About",
            ref: "About"
        },
        {
            name: "Contact Us",
        },
        {
            name: "Sign Up",
        },
    ];

    return (
        <header className="py-4 shadow bg-inherit backdrop-blur-md text-black font-gruppo fixed z-10 w-full">
            <Container>
                <nav className="flex">
                    <div className="mr-4 text-black">
                        {/* <Link to="/"> */}
                            <Logo src={ShopSeekLogo} width="50px" className="rounded-xl" company="ShopSeek"/>
                        {/* </Link> */}
                    </div>

                    <ul className="flex ml-auto">
                        {navItems.map((item) => 
                        (
                            <li key={item.name}>
                                <a href={`#${item.ref}`}>
                                    <button
                                    // onClick={() => navigate(item.slug)}
                                        className={`inline-bock px-6 py-2 font-gruppo duration-200 ${item.name === "Sign Up" ? "bg-customColors-offWhite" : null} hover:border-b-2 hover:border-purple-950 hover:text-purple-950 hover:transform hover:-translate-y-1`}
                                    >
                                        {item.name}
                                </button>
                                </a>
                            </li>
                        )
                        )}
                    </ul>

                </nav>
            </Container>
        </header>
    )
};

export default Header;