import React, { useState } from "react";
import { Dialog } from '@headlessui/react';

const Form = () => {
  // State variables to store form data
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, number, location, department, doctor, date, time });
    setIsOpen(true); // Set isOpen to true when the form is submitted
  };

  return (
    <div className="flex justify-center">
      <div className="w-max h-70">
        <div className="grid grid-cols-2 p-8 gap-8  justify-items-center">
          <div className=" shadow-lg shadow-sky-400  w-2/3">
            <h2 className="text-center text-2xl p-6 underline text-shadow-xl shadow-outer font-bold mb-4" >Appointment Form </h2>
            <form className=" w-full rounded-md  justify-items-center p-7 " onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-2/3 p-2 px-4 border border-gray-300 rounded"
                  placeholder="Please Enter Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block mb-2">Number:</label>
                <input
                  type="text"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-2/3 p-2 px-4 border border-gray-300 rounded"
                  placeholder="Please Provide your Mobile Number"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block mb-2">Location:</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-2/3 p-2 px-4 border border-gray-300 rounded"
                  placeholder="Please Enter your Location"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="department" className="block mb-2">Department:</label>
                <select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-2/3 p-2 px-4 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Ortho">Ortho</option>
                  <option value="Gastro">Gastro</option>
                  <option value="ENT">ENT</option>
                  <option value="Gynec">Gynec</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="doctor" className="block mb-2">Doctor:</label>
                <select
                  id="doctor"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-2/3 p-2 px-3 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Doctor</option>
                  <option value="Dr.Akshya">Dr. Akshya</option>
                  <option value="Dr.Arun">Dr.Arun</option>
                  <option value="Dr.Abiram">Dr.Abiram</option>
                  <option value="Dr.Abhishek">Dr.Abhishek</option>
                  <option value="Dr.Shankar">Dr.Shankar</option>
                  <option value="Dr.Roshith">Dr.Roshith</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block mb-2">Date:</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-2/3 p-2 px-4 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block mb-2">Time:</label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-2/3 p-2 px-4 border border-gray-300 rounded"
                  required
                />
              </div>
              <button type="submit" className=" shadow-xl shadow-indigo-500 flex justify-center self-center w-2/3   rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
            </form>
          </div>
          <div className="flex justify-items-center size-full">
            <img src="https://static.wixstatic.com/media/7f4daf_a98704e91d8e4900800d6eacde9da908~mv2.jpg/v1/fill/w_1075,h_733,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7f4daf_a98704e91d8e4900800d6eacde9da908~mv2.jpg" alt="Hospital" className="max-w-full h-auto rounded" />
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-lg space-y-4 border bg-white p-12">
            <Dialog.Title className="font-bold">Form Submitted</Dialog.Title>
            <p>Your Appointment has been submitted successfully!</p>
            <div className=" flex flex w-2/3 gap-4">
              <button  onClick={() => setIsOpen(false)} className="flex w-2/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Close</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Form;
