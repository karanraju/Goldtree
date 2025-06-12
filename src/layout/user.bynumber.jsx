import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const FilterByCountry = () => {
    const [filterCountry, setFilterCountry] = useState("")
    const [filteredData, setFilteredData] = useState(tableData)
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
            <div className=" border border-black rounded w-full h-[100vh] bg-gray-100">
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
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Roll No</th>
                            <th className="px-4 py-2 text-left">Country</th>
                            <th className="px-4 py-2 text-left">Phone</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {filteredData.map((data, index) => (
                            <tr
                                key={index}
                                className={`h-14 hover:bg-blue-50 transition duration-200 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    }`}
                            >
                                <td className="px-4 py-2">{data.name}</td>
                                <td className="px-4 py-2">{data.rollno}</td>
                                <td className="px-4 py-2">{data.country}</td>
                                <td className="px-4 py-2">{data.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default FilterByCountry;