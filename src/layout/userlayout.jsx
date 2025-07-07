import { info } from "autoprefixer";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

const UserLayout = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        Swal.fire({
            title: "Are you sure you want to Log Out ?",
            showDenyButton: true,
            icon: 'warning',
            confirmButtonText: "Yes",
            denyButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                Swal.fire({
                    title: "Log Out",
                    icon: "success"
                });
            } else if (result.isDenied) {
                Swal.fire("Unable to log out", "", "info")
            }
        })
        console.log("this is me show modal")
    }
    return (
        <>
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-50 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 pt-4 overflow-y-auto bg-white">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center relative">

                            <div className="relative mb-2">
                                <img
                                    className="w-20 h-20 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    alt="user photo"
                                />
                                <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                                    <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 14H9v-2.828z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-xs font-medium text-gray-900" role="none">
                                Kamal Basyal
                            </p>
                            <p className="text-xs text-gray-900 truncate mb-2" role="none">
                                kamalbasyal987@gmail.com
                            </p>
                            <a
                                to="/user/compose"
                                className="flex items-center justify-between px-3 py-2 w-full text-xs text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                            >
                                <span className="flex items-center">
                                    Quick Compose
                                </span>
                                <span className="text-lg font-bold">+</span>
                            </a>
                        </div>
                    </div>

                    <ul className="mt-5 space-y-2 font-medium">
                        <span className="ms-3 text-xs font-medium">Menu</span>
                        <li>
                            <NavLink
                                to="/user/profile"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                                    />
                                </svg>
                                <span className="ms-3 text-xs">Report</span>
                            </NavLink>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-xs whitespace-nowrap">Templates</span>
                            </a>
                        </li>
                        <li>
                            <NavLink
                                to="/user/contacts"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-xs whitespace-nowrap">Manage Contact</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user/calendar"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-xs whitespace-nowrap">Calendar</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user/editprofile"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-xs whitespace-nowrap">Edit Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user/bycountry"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <span className="flex-1 ms-3 text-xs whitespace-nowrap">By Number</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user/creategroup"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"

                            >

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>

                                <span className="flex-1 ms-3 text-xs whitespace-nowrap">Create Group</span>

                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clipRule="evenodd" />
                                </svg>




                                <span className="flex-1 ms-3 text-xs whitespace-nowrap">Login</span>


                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="#"
                                onClick={handleClick}
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-xs whitespace-nowrap"
                                >Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-44">
                <div className="border-2 border-gray-200 rounded-lg dark:border-gray-700bra mt-0">
                    <Outlet />
                </div>

            </div>


        </>
    );
};

export default UserLayout;
