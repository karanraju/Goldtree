import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import handleClick from "../components/common/alert";
import handleEditClick from "../components/common/alert/edit";

const contactData = [
  {
    name: 'Elijah Lowe',
    phone: '+1 (202) 555-5555',
    email: 'elowe@example.org',
    company: '',
    role: '',
    notes: '',
  },
  {
    name: 'John Smith',
    phone: '+1 (219) 555-5555',
    email: 'Jsmith@example.com',
    company: 'Example',
    role: 'President',
    notes: 'Birthday 6/24',
  },
  {
    name: 'Krista Goodwin',
    phone: '+1 (702) 555-5555',
    email: 'kgoodwin@example.org',
    company: '',
    role: '',
    notes: 'Order# 4422368',
  },
  {
    name: 'Leslie Garrett',
    phone: '+1 (646) 555-5555',
    email: '',
    company: '',
    role: '',
    notes: '',
  },
  {
    name: 'Ronald Wallace',
    phone: '+1 (800) 987-6543',
    email: 'RW@example.com',
    company: 'Example',
    role: 'Tech Support',
    notes: '',
  },
  {
    name: 'Talkroute',
    phone: '+1 (800) 747-2140',
    email: 'Sales@talkroute.com',
    company: 'Talkroute',
    role: '',
    notes: '',
  },
];

const ManageContacts = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Contacts</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded inline-flex items-center text-sm"
        >
          <PlusIcon className="w-5 h-5 mr-1" />
          Add Contact
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1.5 rounded w-full max-w-xs"
        />
        <button className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1.5 rounded text-sm">
          Reset
        </button>
      </div>

      <div className="overflow-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Default Phone Number</th>
              <th className="border px-4 py-2 text-left">Emails</th>
              <th className="border px-4 py-2 text-left">Company</th>
              <th className="border px-4 py-2 text-left">Role</th>
              <th className="border px-4 py-2 text-left">Notes</th>
              <th className="border px-4 py-2 text-center">Edit</th>
              <th className="border px-4 py-2 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.phone}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.company}</td>
                <td className="border px-4 py-2">{item.role}</td>
                <td className="border px-4 py-2">{item.notes}</td>
                <td className="border px-4 py-2 text-center">
                  <button onClick={handleEditClick} className="text-blue-600 hover:text-blue-800">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                </td>
                <td className="border px-4 py-2 text-center">
                  <button onClick={handleClick} className="text-red-600 hover:text-red-800">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>Displaying 1–6 of 6</span>
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 border rounded text-gray-500 bg-gray-100" disabled>
            First
          </button>
          <button className="px-2 py-1 border rounded text-gray-500 bg-gray-100" disabled>
            Previous
          </button>
          <span className="px-2">
            Page <input className="w-10 border rounded text-center" defaultValue="1" /> of 1
          </span>
          <button className="px-2 py-1 border rounded text-gray-500 bg-gray-100" disabled>
            Next
          </button>
          <button className="px-2 py-1 border rounded text-gray-500 bg-gray-100" disabled>
            Last
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded shadow-lg w-full max-w-md p-6 relative">
            <h3 className="text-lg font-semibold mb-4">Create a New Contact</h3>
            <form className="space-y-3">
              <input type="text" placeholder="Contact Name" className="w-full border p-2 rounded" />
              <div className="flex gap-2">
                <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
                <select className="border p-2 rounded">
                  <option>Mobile</option>
                  <option>Work</option>
                  <option>Home</option>
                </select>
              </div>
              <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Company" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Role" className="w-full border p-2 rounded" />
              <input type="url" placeholder="URL" className="w-full border p-2 rounded" />
              <textarea placeholder="Notes" className="w-full border p-2 rounded" rows={3}></textarea>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                >
                  Create Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageContacts;
