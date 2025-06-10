import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true)
  }

  const myEvents = [
    {
      title: "Meeting",
      start: new Date(),
      end: new Date(new Date().getTime() + 60 * 60 * 1000),
    },
  ];

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
          defaultView="month"
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
                    <input
                      id="contact"
                      className="border border-black rounded p-2 w-full"
                      type="text"
                      placeholder="Type @number or contact name"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label htmlFor="file" className="w-32 font-medium">Input File</label>
                    <input
                      id="file"
                      className="border border-black rounded p-2 w-full bg-white"
                      type="file"
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
                  <div>
                    <button className="border border-black rounded m-2">standard</button>
                    <button className="border border-black rounded m-2">standard</button>
                    <button className="border border-black rounded m-2">standard</button>
                    <button className="border border-black rounded m-2">standard</button>
                  </div>

                </div>


                <div className="bg-white border rounded w-1/3 shadow-md">
                  <div className="w-full bg-gray-600 text-center py-2 rounded-t">
                    <h1 className="text-white text-lg font-semibold">Contact Group</h1>
                  </div>
                </div>
              </div>

              <button
                className="bg-green-700 text-white h-10 px-4 py-2 rounded mt-4 self-end hover:bg-red-800"
                onClick={() => setShowModal(false)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>


      )}
    </>
  );
};

export default MyCalendar;
