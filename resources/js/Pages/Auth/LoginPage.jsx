import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Footer from "@/Layouts/footer/Footer";
import Header from "@/Layouts/header/Header";
import loginbg from "../../img/loginbg.png";
import loginimg from "../../img/loginimg.png";
import { Link } from "@inertiajs/inertia-react";
const LoginPage = () => {
    return (
        <>
            <Header />
            <div
                className="my-8 py-20  bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${loginbg})` }}
            >
                <div className="container mx-auto p-20 bg-white rounded-lg">
                    <div className="grid grid-cols-2">
                        <div>
                            <img src={loginimg} alt="" />
                        </div>
                        <div className="drop-shadow-2xl p-20 login-wrapper">
                            <div className="flex">
                                <button className="px-7 py-2 rounded capitalize text-white template-gradient-plain-btn font-bold border-0 tab-btn">
                                    sign in
                                </button>
                                <button className="px-7 tab-btn  py-1 rounded capitalize text-dark   border-r-red-500 font-bold border-r-4 primary-color-bg ">
                                    sign in
                                </button>

                                {/* <div className="grid grid-row">

                                </div> */}
                            </div>
                            <div className="mt-4">
                                <TextField
                                    type="text"
                                    id="outlined-basic"
                                    label="Email or phone"
                                    variant="outlined"
                                    className="w-full mt-4 capitalize"
                                />
                            </div>
                            <div className="mt-4">
                                <TextField
                                    type="password"
                                    id="outlined-basic"
                                    label="password"
                                    variant="outlined"
                                    className="w-full mt-4 capitalize"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <span className="flex items-center">
                                    <Checkbox defaultChecked color="default" />
                                    <span className="text-xs capitalize">
                                        remember me
                                    </span>
                                </span>
                                <button className="text-red-500 capitalize">
                                    forget password
                                </button>
                            </div>
                            <div className="mt-4">
                                <button className="px-7 py-2 rounded capitalize text-white bg-red-500 font-bold border-0 rounded-lg w-full">
                                    sign in
                                </button>
                            </div>
                            <div className="mt-4">
                                <span className="text-xs capitalize">
                                    Login easily with your facebook or google
                                    account
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
