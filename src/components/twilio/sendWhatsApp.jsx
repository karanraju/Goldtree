import { useState } from "react";
import * as XLSX from "xlsx";
import axiosInstance from "../../config/axios.config";

const SendWhatsAppMsg = () => {
    const [numberInput, setNumberInput] = useState("");
    const [numbers, setNumbers] = useState([]);
    const [message, setMessage] = useState("");

    const handleNumberInputChange = (e) => {
        setNumberInput(e.target.value);
    };

    const handleNumberInputKeyPress = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const enteredNumbers = numberInput
                .split(/[,\s]+/)
                .map((num) => num.trim())
                .filter((num) => num && !numbers.includes(num));
            setNumbers((prev) => [...prev, ...enteredNumbers]);
            setNumberInput("");
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            const data = evt.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            const extractedNumbers = jsonData
                .flat()
                .map((item) => String(item).trim())
                .filter((num) => num.match(/^\+?\d{6,}$/));

            setNumbers((prev) => [...new Set([...prev, ...extractedNumbers])]);
        };
        reader.readAsBinaryString(file);
    };

    const handleSubmit = async () => {
        if (!numbers.length || !message.trim()) {
            alert("Please enter at least one number and a message.");
            return;
        }

        try {
            await axiosInstance.post("/numbers/whatsAppMessage", {
                numbers,
                message,
            });

            alert("WhatsApp messages sent successfully!");
            setNumbers([]);
            setMessage("");
            setNumberInput("");
        } catch (err) {
            console.error("Error sending messages:", err);
            alert("Failed to send WhatsApp messages.");
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Send Bulk WhatsApp Message</h2>

            <input
                type="number"
                value={numberInput}
                onChange={handleNumberInputChange}
                onKeyDown={handleNumberInputKeyPress}
                placeholder="Enter WhatsApp numbers (comma or Enter)"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
            />

            <label className="block mb-2 font-bold">Upload .xlsx file</label>
            <input
                type="file"
                accept=".xlsx"
                onChange={handleFileUpload}
                className="w-full mb-4 border border-gray-300 rounded"
            />

            <label className="font-bold mb-1">Numbers</label>
            <textarea
                className="border border-gray-300 w-full rounded mb-4"
                rows={4}
                value={numbers.length ? numbers.join("\n") : ""}
                readOnly
            />

            <label className="font-bold">Message</label>
            <textarea
                rows={5}
                className="border border-gray-300 w-full rounded mb-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
            />

            <button
                onClick={handleSubmit}
                className="font-bold border border-gray-300 p-3 rounded bg-green-400 hover:bg-green-500 w-full"
            >
                Send Message
            </button>
        </div>
    );
};

export default SendWhatsAppMsg;
