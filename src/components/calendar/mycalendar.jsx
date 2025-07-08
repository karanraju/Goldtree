import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { read, utils } from "xlsx";
import axiosInstance from "../../config/axios.config";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [phones, setPhones] = useState([]);
  const [showCalender, setCalender] = useState(false);
  const [currentDate, setCurrenntDate] = useState(new Date());
  const [identity, setIdentity] = useState("");
  const [selectedPhone, setSelectedPhone] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [groups, setGroups] = useState([]);

  const myEvents = [
    {
      title: "Meeting",
      start: new Date(),
      end: new Date(new Date().getTime() + 60 * 60 * 1000),
    },
  ];

  const handleClick = () => {
    setShowModal(true);
    fetchGroups();
  };

  const submitBtn = async (e) => {
    e.preventDefault();

    if (selectedPhone.length === 0 || !inputMsg) {
      alert("Please select at least one phone number and enter a message.");
      return;
    }

    const formattedNumbers = selectedPhone.map((num) =>
      num.startsWith("+") ? num : `+${num}`
    );

    const payload = {
      numbers: formattedNumbers,
      message: inputMsg,
    };

    try {
      const res = await axiosInstance.post("/numbers/message", payload);
      alert("Messages sent successfully!");
      console.log(res);
      console.log(res.groups.length)
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to send messages.");
    }
  };

  const showSmallCalender = () => setCalender(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      if (!fileName.endsWith(".xlsx")) {
        alert("Please upload a .xlsx file");
        e.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = (evt) => {
        const data = new Uint8Array(evt.target.result);
        const workbook = read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = utils.sheet_to_json(worksheet);

        const phones = jsonData.map((row) => row.phone).filter(Boolean);
        setPhones(phones);
        fetchGroups();
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await axiosInstance.get("/groups/getGroups", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("the response is: ", response)
      setGroups(response.groups || []);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  return (
    <>
      <div className="h-[650px]">
        <Calendar
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          onSelectSlot={handleClick}
          views={["month", "week", "day", "work_week"]}
          date={currentDate}
          onNavigate={(date) => setCurrenntDate(date)}
          style={{ height: "100%" }}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-300 h-auto w-[80%] rounded-lg p-4 flex">
            <form className="p-4 w-full flex flex-col justify-between" onSubmit={submitBtn}>
              <div className="flex space-x-2">
                <div className="flex bg-white flex-col p-6 rounded w-full max-w-2xl space-y-4 shadow-md">
                  <div className="flex items-center space-x-4">
                    <label htmlFor="identity" className="w-32 font-medium">
                      Identity
                    </label>
                    <select
                      id="identity"
                      className="border border-black rounded p-2 w-full"
                      value={identity}
                      onChange={(e) => setIdentity(e.target.value)}
                    >
                      <option value="">Select Identity</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label htmlFor="contact" className="w-32 font-medium">
                      Contacts
                    </label>
                    <select
                      id="contact"
                      className="border border-black rounded p-2 w-full"
                      multiple
                      value={selectedPhone}
                      onChange={(e) => {
                        const selectedOptions = Array.from(e.target.selectedOptions).map(
                          (option) => option.value
                        );
                        setSelectedPhone(selectedOptions);
                      }}
                    >
                      {phones.map((num, index) => (
                        <option key={index} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label htmlFor="file" className="w-32 font-medium">
                      Input File
                    </label>
                    <input
                      id="file"
                      className="border border-black rounded p-2 w-full bg-white"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>

                  <button className="text-blue-500 self-start ml-32 hover:underline" type="button">
                    Click here for typing Nepali
                  </button>

                  <div className="flex items-start space-x-4">
                    <label htmlFor="message" className="w-32 pt-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="border border-black rounded p-2 w-full"
                      rows={5}
                      placeholder="Write your message here"
                      value={inputMsg}
                      onChange={(e) => setInputMsg(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="pl-6 w-auto flex flex-wrap gap-2 ml-24">
                    <a className="border border-gray-300 rounded px-2 py-1">Standard</a>
                    <a className="border border-gray-300 rounded px-2 py-1">Length</a>
                    <a className="border border-gray-300 rounded px-2 py-1">Remaining</a>
                    <a className="border border-gray-300 rounded px-2 py-1">Typed</a>
                  </div>

                  <div className="text-blue-600 flex ml-24 px-4 pl-6 hover:underline">
                    <a onClick={showSmallCalender}>Advance Options</a>
                  </div>

                  {showCalender && (
                    <div className="flex flex-wrap gap-2 ml-24 w-auto">
                      <div className="px-2 py-1 space-x-4">
                        <label className="font-medium">From</label>
                        <input
                          className="border border-gray-400 rounded mt-4"
                          type="date"
                          value={fromDate}
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                      </div>
                      <div className="px-2 py-1 space-x-4">
                        <label className="font-medium">To</label>
                        <input
                          className="border border-gray-400 rounded mt-4"
                          type="date"
                          value={toDate}
                          onChange={(e) => setToDate(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white border rounded w-1/3 shadow-md">
                  <div className="w-full bg-gray-600 text-center py-2 rounded-t">
                    <h1 className="text-white text-lg font-semibold">Contact Group</h1>
                  </div>
                  <div className="p-2 max-h-60 overflow-y-auto">
                    {groups.length > 0 ? (
                      groups.map((group, index) => (
                        <div key={index} className="p-2 border-b text-sm">
                          <strong>{group.groupName}</strong><br />
                          {group?.length || 0} contacts
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No groups yet</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  className="h-10 border bg-red-700 text-white rounded hover:bg-blue-800 mt-4 px-4 py-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-green-700 text-white h-10 px-4 py-2 rounded mt-4 hover:bg-red-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCalendar;
