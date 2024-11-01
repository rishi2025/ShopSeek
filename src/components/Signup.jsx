import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Button, Input } from './mainComponent';
import { ShopSeekLogo } from "../Images/MainImage";
import { useForm } from "react-hook-form";

function Signup() {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const [role, setRole] = useState("seller");

    const create = async (data) => {
        setError("");
        try {
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
    
            const response = await fetch(`http://localhost:8000/api/v1/${role}/register`, requestOptions);
    
            if (!response.ok)
                throw new Error(response.statusText || "Failed to register, Try again");
    
            const user = await response.json();
    
            if (user) {
                navigate(`/login`);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto my-32 w-full max-w-lg backdrop-blur-lg shadow-md shadow-[#333] bg-gradient-to-r from-[#C48CFF] to-[#FFECA8] rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo src={ShopSeekLogo} width="40px" className="rounded-xl" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <Input
                            label="Full Name: "
                            placeholder="Enter your name"
                            type="text"
                            {...register("name", {
                                required: true,
                            })}
                        />

                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                }
                            })}
                        />

                        <Input
                            label="Password: "
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true
                                }
                            )}
                        />

                        <Button
                            type="submit"
                            bgColor="bg-[#ffde67]"
                            textColor="text-black"
                            className="w-full items-center rounded-full hover:bg-[#ffd84c] font-fira shadow-md shadow-[#333]"
                            text={"I am a Customer"}
                            round={false}
                            onClick={() => {setRole("buyer")}}
                        />
                        <Button
                            type="submit"
                            bgColor="bg-[#9967D9]"
                            textColor="text-white"
                            className="w-full items-center rounded-full hover:bg-[#8b50d8] font-fira shadow-md shadow-[#333]"
                            text={"I am a Seller"}
                            round={false}
                            onClick={() => {setRole("seller")}}
                        />
                    </div>
                </form>
            </div>

        </div>
    )
};

export default Signup;