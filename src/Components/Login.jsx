import React from 'react';
import { Link } from 'react-router-dom';
// import { FaFacebook, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa6';


const Login = () => {
    return (
        <div className='pt-32 mx-auto flex justify-center'>
            <div className="card  w-full max-w-sm shrink-0 ">

                <form className="card-body border border-[#ABABAB] rounded">
                    <h1 className='text-center text-3xl font-semibold'>Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username or Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Passowrd</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <div className="form-control flex-row justify-between mt-3">
                            <label className="label justify-start cursor-pointer gap-3">
                                <input type="checkbox"  className="checkbox" />
                                <span className="label-text">Remember me</span>
                            </label>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover text-[#F9A51A] underline">Forgot password?</Link>
                            </label>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#F9A51A] font-semibold">Login</button>
                    </div>
                    <p className='flex justify-center gap-3 mt-3 font-semibold'>Don’t have an account? <Link to="/register" className='text-[#F9A51A] underline'>Create an account</Link> </p>
                </form>
                <div className="divider">OR</div>

                <Link className='border border-[#C7C7C7] rounded-full p-3 flex items-center gap-5 mb-2 font-semibold justify-center'><span className='text-blue-700 '><FaFacebook></FaFacebook></span> Continue with Facebook</Link>
                <Link className='border border-[#C7C7C7] rounded-full p-3 flex items-center gap-5 mb-5 font-semibold justify-center'><FcGoogle /> Continue with Google</Link>
            </div>
        </div>
    );
};

export default Login;