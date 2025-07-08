import { useState } from "react";
import * as XLSX from "xlsx";
import * as Yup from "yup";
import axiosInstance from "../config/axios.config"; // Ensure baseURL is set correctly

const CreateGroup = () => {
    const [groupName, setGroupName] = useState("");
    const [phoneNumbers, setPhoneNumbers] = useState([]);
    const [fileName, setFileName] = useState("");

    const validationSchema = Yup.object({
        groupName: Yup.string().min(2).max(20).required("Group name is required"),
        fileName: Yup.string().required("File is required"),
        contactList: Yup.array().min(1, "At least one number required").required(),
    });

    const handleXLSXUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setFileName(file.name);

        const reader = new FileReader();
        reader.onload = (event) => {
            const binaryStr = event.target.result;
            const workbook = XLSX.read(binaryStr, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

            const numbers = data
                .map((row) => row.phoneNumber || row.phone || "")
                .filter((num) => num !== "");

            setPhoneNumbers(numbers);
        };
        reader.readAsBinaryString(file);
    };

    const handleSubmitGroup = async () => {
        const formData = {
            groupName: groupName.trim(),
            fileName,
            contactList: phoneNumbers,
        };

        try {
            await validationSchema.validate(formData, { abortEarly: false });

            const response = await axiosInstance.post("/groups", formData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            alert("Group Created Successfully!");
            console.log(response.data);
            setGroupName("");
            setFileName("");
            setPhoneNumbers([]);
        } catch (err) {
            if (err.name === "ValidationError") {
                alert(err.errors.join("\n"));
            } else if (err.response) {
                alert("Server Error: " + err.response.data.message);
            } else {
                alert("Error: " + err.message);
            }
        }
    };

    return (
        <div className="bg-white w-full rounded p-4 space-y-4">
            <div>
                <label className="block font-bold mb-1">Group Name</label>
                <input
                    className="border border-black w-full p-1 rounded"
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                />
            </div>

            <div>
                <label className="block font-bold mb-1">Upload Contacts (.xlsx)</label>
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleXLSXUpload}
                    className="block w-full border p-1 border-gray-400 rounded"
                />
                {fileName && <p className="text-sm mt-1 text-gray-600">Uploaded: {fileName}</p>}
            </div>

            {phoneNumbers.length > 0 && (
                <div>
                    <h3 className="font-semibold mb-2">Imported Phone Numbers:</h3>
                    <ul className="list-disc pl-5">
                        {phoneNumbers.map((number, idx) => (
                            <li key={idx}>{number}</li>
                        ))}
                    </ul>
                </div>
            )}

            <button
                className="bg-green-600 text-white px-4 py-2 rounded-full mt-4"
                onClick={handleSubmitGroup}
            >
                + Create Group
            </button>
        </div>
    );
};

export default CreateGroup;
