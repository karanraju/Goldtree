import {useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-green-400 h-[100vh] w-full justify-center items-center">
                <div className="flex flex-col bg-white w-[44%] h-[550px] rounded-xl items-center">
                    <h1 className="text-center mt-2 font-bold text-2xl">Login</h1>
                    <div className=" flex flex-col w-[90%] px-4 rounded mt-10 space-y-2">
                        <label>User Name</label>
                        <input className="border-b-2 focus:outline-none border-gray-300 h-10 flex items-center px-1" placeholder="Type your Username"></input>

                        <label className="mt-4">Password</label>
                        <input className="border-b-2 border-gray-300 focus:outline-none h-10 flex items-center px-1" placeholder="Type your Password" type="password" ></input>
                        <a className="text-gray-500 self-end hover:text-red-500">Forget Password ?</a>

                    </div>
                    <button className="border-2 mt-4 rounded-full w-[70%] h-10 bg-pink-500 hover:bg-blue-500 text-white flex items-center justify-center">
                        Login
                    </button>
                    <h3 className="mt-6 text-center text-blue-500">Or SignUp using</h3>
                    <div className="flex space-x-4 mt-3 justify-center">
                        <SocialIcon url="https://www.google.com" style={{ height: 30, width: 30 }} />
                        <SocialIcon url="https://www.facebook.com" style={{ height: 30, width: 30 }} />
                        <SocialIcon url="https://www.twitter.com" style={{ height: 30, width: 30 }} />
                    </div>
                    <h3 className="mt-4 text-blue-500">Don't have account ?</h3>
                    <button
                        className="border-2 rounded-full h-10 bg-blue-400 w-[70%] mt-2 text-white hover:bg-blue-500"
                        onClick={() => navigate('/register')}
                    >
                        Sign Up
                    </button>


                </div>


            </div>

        </>
    )
}
export default LoginPage;