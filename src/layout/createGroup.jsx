import { useState, useEffect } from "react";
import axiosInstance from "../config/axios.config";

const CreateGroup = () => {
    const [contacts, setContacts] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [groupName, setGroupName] = useState("");

    const handleClick = async () => {
        try {
            const response = await axiosInstance.get("/usersContact/contacts");
            console.log("Response", response.data);
            setContacts(response.data);
            setShowDropdown(true);
        } catch (error) {
            console.log("Data fetching exception:", error.response);
        }
    };

    const handleSelectContact = (contact) => {
        if (!selectedContacts.some((c) => c.id === contact.id)) {
            setSelectedContacts([...selectedContacts, contact]);
        }
        setShowDropdown(false);
    };

    const handleSubmitGroup = () => {
        console.log("Group Name:", groupName);
        console.log("Selected Contacts:", selectedContacts);
        alert("Group Created");
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

            <div className="relative">
                <label className="block font-bold mb-1">Contacts</label>
                <input 
                    onClick={handleClick}
                    className="border border-black w-full p-1 rounded cursor-pointer"
                    type="text"
                    placeholder="Click to select contacts"
                    readOnly
                />

                {showDropdown && (
                    <div className="absolute z-10 bg-white border border-gray-300 w-full max-h-40 overflow-y-auto mt-1 rounded shadow">
                        {contacts.length > 0 ? (
                            contacts.map((contact) => (
                                <div 
                                    key={contact.id} 
                                    onClick={() => handleSelectContact(contact)}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {contact.name} - {contact.phone}
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500">No contacts available</div>
                        )}
                    </div>
                )}
            </div>

            {selectedContacts.length > 0 && (
                <div>
                    <h3 className="font-semibold mb-2">Selected Contacts:</h3>
                    <ul className="list-disc pl-5">
                        {selectedContacts.map((contact) => (
                            <li key={contact.id}>
                                {contact.name} - {contact.phone}
                            </li>
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
