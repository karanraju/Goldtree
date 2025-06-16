import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Pagination from "../components/pagination";

const FilterByCountry = () => {
    const tableData = [
        {
            name: "kamal",
            rollno: "12",
            country: "Nepal",
            phone: "9090909090"
        },
        {
            name: "prem",
            rollno: "12",
            country: "USA",
            phone: "9090909090"
        },
        {
            name: "padam",
            rollno: "12",
            country: "USA",
            phone: "9090909090"
        },
        {
            name: "manoj",
            rollno: "12",
            country: "USA",
            phone: "9090909090"
        },
        {
            name: "sita",
            rollno: "15",
            country: "India",
            phone: "8080808080"
        },
        {
            name: "ram",
            rollno: "18",
            country: "Nepal",
            phone: "7070707070"
        },
        {
            name: "john",
            rollno: "20",
            country: "UK",
            phone: "6060606060"
        },
        {
            name: "emma",
            rollno: "25",
            country: "Canada",
            phone: "5050505050"
        },
        {
            name: "alex",
            rollno: "30",
            country: "Australia",
            phone: "4040404040"
        }
    ];

    const [filterCountry, setFilterCountry] = useState("")
    const [filteredData, setFilteredData] = useState(tableData)
    const handleBuy = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: "You are about to buy this number!",
            icon: "warnning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, buy it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Bought!',
                    "You are about to take this number.",
                    'success'

                )
            }
        })
    }


    const filterPhone = (e) => {
        const newData = filterCountry.trim().toLowerCase()
        if (newData) {
            const filtered = tableData.filter((data) =>
                data.country.toLowerCase().includes(newData)
            );
            setFilteredData(filtered)
        } else {
            setFilteredData(tableData);
        }
    }
    useEffect(() => {
        filterPhone();
    }, [filterCountry]);


    return (
        <>
            <div className=" border border-black rounded w-full h-auto bg-gray-100">
                <div className="space-x-2 mt-2 mb-2 pl-1">
                    <label className="font-semibold">Choose the country</label>
                    <select className="border border-gray-500 rounded" name="Select Country" id=""
                        onChange={(e) => setFilterCountry(e.target.value)}


                    >Select Country
                        <option value="" disabled>Select Country Name</option>
                        {
                            [...new Set(tableData.map((data) => data.country))].map((country, index) => (
                                <option key={index} value={country}> {country}</option>

                            ))

                        }

                    </select>

                </div>
                <table className="table-auto w-[98%] mt-4 ml-1 bg-white shadow-lg rounded-md overflow-hidden">
                    <thead className="bg-blue-600 text-white text-md">
                        <tr className="h-14">
                            <th className="px-4 py-2 text-center">Name</th>
                            <th className="px-4 py-2 text-center">Roll No</th>
                            <th className="px-4 py-2 text-center">Country</th>
                            <th className="px-4 py-2 text-center">Phone</th>
                            <th className="px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {filteredData.map((data, index) => (
                            <tr
                                key={index}
                                className={`h-14 hover:bg-blue-50 transition duration-200 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    }`}
                            >
                                <td className="px-4 py-2 text-center">{data.name}</td>
                                <td className="px-4 py-2 text-center">{data.rollno}</td>
                                <td className="px-4 py-2 text-center">{data.country}</td>
                                <td className="px-4 py-2 text-center">{data.phone}</td>
                                <td className="text-center"><button className="border-2 rounded-full bg-green-600 text-white w-28 h-8 hover:bg-red-600"
                                    onClick={handleBuy}
                                >Buy Number</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex justify-end text-sm text-gray-600 mb-2 px-2">
                    <div className="flex items-center gap-1">
                        <Pagination />

                    </div>
                </div>


            </div>
        </>
    )
}

export default FilterByCountry;