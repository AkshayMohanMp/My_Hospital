import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" sticky top-24 z-10 rounded-sm  ">
      <nav className="h-full w-full bg-gradient-to-r from-green-400 to-blue-500 flex space-x-full items-center shadow-lg mt-1 relative z-50 rounded-sm">
        <NavLink className="basis-1/5 flex justify-center hover:bg-sky-100/35 shadow-lg rounded-sm " to="/">Home</NavLink>
        <div className="relative basis-1/5 group ">
          <NavLink className="flex justify-center shadow-lg  hover:bg-sky-100/35 rounded-sm" to="#">Department</NavLink>
          <ul className="absolute left-0 top-full w-full bg-gradient-to-r from-green-400 to-blue-500 hidden group-hover:block  shadow-lg list-none p-0 m-0 z-50">
            <li className="rounded-sm px-4 py-2  hover:bg-sky-100/35 shadow-lg "><NavLink to="/Department/Emergency">Emergency Department</NavLink></li>
            <li className="rounded-sm px-4 py-2  hover:bg-sky-100/35 shadow-lg "><NavLink to="/Department/ENT">ENT Department</NavLink></li>
            <li className="px-4 py-2 rounded-sm  hover:bg-sky-100/35 shadow-lg "><NavLink to="/Department/Gastro">Gastro Department</NavLink></li>
            <li className="px-4 py-2 rounded-sm  hover:bg-sky-100/35 shadow-lg "><NavLink to="/Department/Gynec">Gynec Department</NavLink></li>
            <li className="px-4 py-2 rounded-sm  hover:bg-sky-100/35 shadow-lg "><NavLink to="/Department/Ortho">Ortho Department</NavLink></li>
          </ul>
        </div>
        <NavLink className=" flex justify-center basis-1/5 rounded-sm hover:bg-sky-100/35 shadow-lg" to="/Career">Career</NavLink>
        <NavLink className=" flex justify-center basis-1/5 rounded-sm hover:bg-sky-100/35 shadow-lg " to="/Appontment_Booking">Get an Appointment</NavLink>
        <NavLink className=" flex justify-center basis-1/5 rounded-sm hover:bg-sky-100/35 shadow-lg " to="/Aboutpage">About Us</NavLink>
      </nav>
    </div>
  );
}



