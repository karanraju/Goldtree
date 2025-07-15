
import { useState } from "react";
import * as XLSX from "xlsx";
import axiosInstance from "../../config/axios.config";

const SendEmail = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emails, setEmails] = useState([]);
  const [message, setMessage] = useState("");

  const handleEmailInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleEmailInputKeyPress = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const enteredEmails = emailInput
        .split(/[,\s]+/)
        .map((email) => email.trim())
        .filter((email) => email && !emails.includes(email));
      setEmails((prev) => [...prev, ...enteredEmails]);
      setEmailInput("");
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

      const extractedEmails = jsonData
        .flat()
        .map((item) => String(item).trim())
        .filter((email) => email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));

      setEmails((prev) => [...new Set([...prev, ...extractedEmails])]);
    };
    reader.readAsBinaryString(file);
  };

  const handleSubmit = async () => {
    if (!emails.length || !message.trim()) {
      alert("Please enter at least one email and a message.");
      return;
    }

    try {
      await axiosInstance.post("/numbers/email", {
        emails,
        message,
      });

      alert("Emails sent successfully!");
      setEmails([]);
      setMessage("");
      setEmailInput("");
    } catch (err) {
      console.error("Error sending emails:", err);
      alert("Failed to send emails.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Send Bulk Email</h2>

      <input
        type="text"
        value={emailInput}
        onChange={handleEmailInputChange}
        onKeyDown={handleEmailInputKeyPress}
        placeholder="Enter email addresses (comma or Enter)"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />

      <label className="block mb-2 font-bold">Upload .xlsx file</label>
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        className="w-full mb-4 border border-gray-300 rounded"
      />

      <label className="font-bold mb-1">Emails</label>
      <textarea
        className="border border-gray-300 w-full rounded mb-4"
        rows={4}
        value={emails.length ? emails.join("\n") : ""}
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
        className="font-bold border border-gray-300 p-3 rounded bg-blue-500 hover:bg-blue-600 text-white w-full"
      >
        Send Email
      </button>
    </div>
  );
};

export default SendEmail;
