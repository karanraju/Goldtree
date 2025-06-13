import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { read, utils } from 'xlsx'

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [phones, setPhones] = useState([])
  const [showCalender, setCalender] = useState(false);
  const [currentDate, setCurrenntDate]= useState(new Date())

  const handleClick = () => {
    setShowModal(true)
  }
  const submitBtn = () => {
    window.alert("the data has been submitted")
  }

  const myEvents = [
    {
      title: "Meeting",
      start: new Date(),
      end: new Date(new Date().getTime() + 60 * 60 * 1000),
    },
  ];
  const showSmallCalender = (e) => {
    setCalender(true)

  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      if (!fileName.endsWith(".xlsx")) {
        alert("Please upload a .xlsx file");
        e.target.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = (evt) => {
        const data = new Uint8Array(evt.target.result);
        const workbook = read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = utils.sheet_to_json(worksheet);


        const phones = jsonData
          .map(row => row.phone)
          .filter(Boolean);

        setPhones(phones);
      };

      reader.readAsArrayBuffer(file);
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
          // defaultView="month"
          style={{ height: "100%" }}
        />
      </div>


      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-300 h-auto w-[80%] rounded-lg p-4 flex">
            <form className="p-4 w-full flex flex-col justify-between">

              <div className="flex space-x-2">

                <div className="flex bg-white flex-col p-6 rounded w-full max-w-2xl space-y-4 shadow-md">
                  <div className="flex items-center space-x-4">
                    <label htmlFor="identity" className="w-32 font-medium">Identity</label>
                    <select id="identity" className="border border-black rounded p-2 w-full">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label htmlFor="contact" className="w-32 font-medium">Contacts</label>
                    <select
                      id="contact"
                      className="border border-black rounded p-2 w-full"
                    >
                      <option value="">Select a phone number</option>
                      {phones.map((num, index) => (
                        <option key={index} value={num}>{num}</option>
                      ))}
                    </select>

                  </div>

                  <div className="flex items-center space-x-4">
                    <label htmlFor="file" className="w-32 font-medium">Input File</label>
                    <input
                      id="file"
                      className="border border-black rounded p-2 w-full bg-white"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                  <button className="text-blue-500 self-start ml-32 hover:underline">Click here for typing Nepali</button>
                  <div className="flex items-start space-x-4">

                    <label htmlFor="message" className="w-32 pt-2 font-medium">Message</label>
                    <textarea
                      id="message"
                      className="border border-black rounded p-2 w-full"
                      rows={5}
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                  <div className="pl-6 w-auto flex flex-wrap gap-2 ml-24">
                    <a className="border border-gray-300 rounded px-2 py-1">Standard</a>
                    <a className="border border-gray-300 rounded px-2 py-1">Length</a>
                    <a className="border border-gray-300 rounded px-2 py-1">Remaining</a>
                    <a className="border border-gray-300 rounded px-2 py-1">Typed</a>
                  </div>
                  <div className="text-blue-600 flex ml-24 px-4 pl-6 hover:underline">
                    <a
                      onClick={showSmallCalender}
                    >Advance Options</a>
                  </div>
                  {
                    showCalender && (
                      <div className="flex flex-wrap gap-2 ml-24 w-auto">
                        <div className="px-2 py-1 space-x-4">
                          <label className="font-medium">From</label>
                          <input className="border border-gray-400 rounded mt-4" type="date" />
                        </div>
                        <div className="px-2 py-1 space-x-4">
                          <label className="font-medium">To</label>
                          <input className="border border-gray-400 rounded mt-4" type="date" />

                        </div>

                      </div>
                    )
                  }
                </div>

                <div className="bg-white border rounded w-1/3 shadow-md">
                  <div className="w-full bg-gray-600 text-center py-2 rounded-t">
                    <h1 className="text-white text-lg font-semibold">Contact Group</h1>
                  </div>
                </div>
              </div>
              <div className=" flex justify-between">
                <button className="h-10 border bg-red-700 text-white rounded hover:bg-blue-800 mt-4 px-4 py-2"
                  onClick={() => setShowModal(false)}

                >
                  Cancel

                </button>
                <button
                  className="bg-green-700 text-white h-10 px-4 py-2 rounded mt-4 hover:bg-red-800"
                  onClick={() => submitBtn()}
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
