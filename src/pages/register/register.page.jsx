
import {useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-400 via-blue-400 to-green-400 h-[100vh] flex items-center justify-center">
                <div className="bg-white h-auto w-[50%] rounded-xl">
                    <h1 className=" text-blue-500 text-center text-2xl font-bold">Register Page</h1>

                    <div className="flex w-full items-center justify-center mt-2 mb-6">
                        <div className="flex w-[80%] flex-col space-y-4">
                            <label htmlFor="" className="">Name</label>
                            <input type="text" className="border-b-2 focus:outline-none" placeholder="Enter your name here" />
                            <label htmlFor="">User Name</label>
                            <input type="text" className="border-b-2 focus:outline-none" placeholder="Enter your username" />
                            <label htmlFor="">Email</label>
                            <input type="text" className="border-b-2 focus:outline-none" placeholder="Enter your @email" />
                            <label htmlFor="">Phone</label>
                            <input type="password" className="border-b-2 focus:outline-none" placeholder="Enter your phone number" />
                            <label htmlFor="">Password</label>
                            <input type="password" className="border-b-2 focus:outline-none" placeholder="Enter your password" />
                            <label htmlFor="">Confirm Password</label>
                            <input type="text" className="border-b-2 focus:outline-none" placeholder="Re-enter your password" />
                            <button className="text-blue-500"
                            onClick={()=>{navigate("/login")}}
                            
                            >You already have an Account ?</button>
                            <button className="border-2 rounded-full bg-green-500 hover:bg-blue-500 h-10 text-white transition-colors duration-300">
                                Sign Up
                            </button>




                        </div>



                    </div>

                </div>

            </div>
        </>
    )
}
export default RegisterPage;