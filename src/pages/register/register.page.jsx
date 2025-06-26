
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../../config/axios.config";

const RegisterPage = () => {
    const rules = Yup.object({
        f_name: Yup.string().min(2).max(20).required(),
        l_name: Yup.string().min(2).max(20).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/).required(),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Confirm password and password does not match"),
    })
    const { register, handleSubmit, formState: { errors, } } = useForm({
        resolver: yupResolver(rules)
    })
    // const submitEvent = async(data) => {
    //     try {
    //         const response = await axiosInstance.post("/users/register", {
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //     }catch(exception){
    //         console.log("Register Exception :", exception)

    //     }

    //     console.log(data)
    //     window.alert("yout code has been submitted")

    // }
    const submitEvent = async (data) => {
        try {
            const response = await axiosInstance.post("/users/register", data);
            console.log("Response:", response.data);
        } catch (exception) {
            console.log("Register Exception:", exception.response?.data || exception.message);
        }
    };


    const navigate = useNavigate()

    return (
        <>
            <div className="bg-gradient-to-r from-indigo-400 via-blue-400 to-green-400 h-[100vh] flex items-center justify-center">
                <div className="bg-white h-auto w-[50%] rounded-xl">
                    <h1 className=" text-blue-500 text-center text-2xl font-bold">Register Page</h1>
                    <form onSubmit={handleSubmit(submitEvent)}>
                        <div className="flex w-full items-center justify-center mt-2 mb-6">
                            <div className="flex w-[80%] flex-col space-y-4">

                                <label>First Name</label>
                                <input {...register("f_name")} type="text" className="border-b-2 focus:outline-none" placeholder="Enter your name here" />
                                <p className="text-red-500">{errors?.f_name?.message}</p>

                                <label>Last Name</label>
                                <input {...register("l_name")} type="text" className="border-b-2 focus:outline-none" placeholder="Enter your username" />
                                <p className="text-red-500">{errors?.l_name?.message}</p>

                                <label>Email</label>
                                <input {...register("email")} type="text" className="border-b-2 focus:outline-none" placeholder="Enter your @email" />
                                <p className="text-red-500">{errors?.email?.message}</p>


                                <label>Password</label>
                                <input {...register("password")} type="password" className="border-b-2 focus:outline-none" placeholder="Enter your password" />
                                <p className="text-red-500">{errors?.password?.message}</p>

                                <label>Confirm Password</label>
                                <input {...register("confirmPassword")} type="password" className="border-b-2 focus:outline-none" placeholder="Re-enter your password" />
                                <p className="text-red-500">{errors?.confirmPassword?.message}</p>

                                <button type="button" className="text-blue-500" onClick={() => { navigate("/login") }}>
                                    You already have an Account ?
                                </button>

                                <button type="submit" className="border-2 rounded-full bg-green-500 hover:bg-blue-500 h-10 text-white transition-colors duration-300">
                                    Sign Up
                                </button>

                            </div>
                        </div>
                    </form>


                </div>

            </div>
        </>
    )
}
export default RegisterPage;