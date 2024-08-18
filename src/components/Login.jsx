import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Button, Input } from './mainComponent.jsx';
import { ShopSeekLogo } from "../Images/MainImage.jsx";
import { useForm } from "react-hook-form";

function Login() {

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const [role, setRole] = useState("seller");

    const login = async (data) => {
        setError("");
        // try {

        //     const session = await authService.login(data);

        //     if (session) {
        //         const userData = await authService.getCurrentUser();
        //         if (userData)
        //             dispatch(authLogin(userData));

        //         navigate("/");
        //     }


        // } catch(error) {
        //     setError(error.message);
        // }

        navigate(`/${role}`);
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto my-32 w-full max-w-lg backdrop-blur-lg shadow-md shadow-[#333] bg-gradient-to-r from-[#C48CFF] to-[#FFECA8] rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo src={ShopSeekLogo} width="40px" className="rounded-xl" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">    
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form className="mt-8" onSubmit={handleSubmit(login)}>
                    <div className="space-y-5">
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

export default Login;