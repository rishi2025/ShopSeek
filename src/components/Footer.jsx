import React from "react";
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import {ShopSeekLogo} from "../Images/MainImage.jsx";

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-gradient-to-r from-customColors-radialPurpleL to-customColors-radialPurpleD border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                            <Logo src={ShopSeekLogo} width="40px" className="rounded-xl" company="ShopSeek"/>
                            </div>
                            <div>
                                <p className="text-sm text-white">
                                    &copy; Copyright 2023. All Rights Reserved by ShopSeek.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Features
                                    {/* </Link> */}
                                </li>
                                <li className="mb-4">
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Pricing
                                    {/* </Link> */}
                                </li>
                                <li className="mb-4">
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Affiliate Program
                                    {/* </Link> */}
                                </li>
                                <li>
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Press Kit
                                    {/* </Link> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Account
                                    {/* </Link> */}
                                </li>
                                <li className="mb-4">
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Help
                                    {/* </Link> */}
                                </li>
                                <li className="mb-4">
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Contact Us
                                    {/* </Link> */}
                                </li>
                                <li>
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Customer Support
                                    {/* </Link> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Terms &amp; Conditions
                                    {/* </Link> */}
                                </li>
                                <li className="mb-4">
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Privacy Policy
                                    {/* </Link> */}
                                </li>
                                <li>
                                    {/* <Link
                                        className=" text-base font-medium text-white hover:text-black"
                                        to="/"
                                    > */}
                                        Licensing
                                    {/* </Link> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Footer;