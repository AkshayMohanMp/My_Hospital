import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-[112px]  z-10 rounded-sm ">
      <nav className="h-full w-full  flex space-x-full items-center bg-gradient-to-br from-sky-400 to-sky-100 shadow-lg shadow-white relative z-50 rounded-sm">
        <NavLink className="basis-1/5 flex justify-center hover:bg-sky-100/35  rounded-sm " to="/">Home</NavLink>
        <div className="relative basis-1/5 group ">
          <NavLink className="flex justify-center   hover:bg-sky-100/35 rounded-sm" to="#">Department</NavLink>
          <ul className="absolute left-0 top-full w-full  hidden group-hover:block   list-none p-0 m-0 z-50">
            <li className="rounded-sm px-4 py-2  hover:bg-sky-100 bg-sky-200 "><NavLink to="/Department/Emergency">Emergency Department</NavLink></li>
            <li className="rounded-sm px-4 py-2  hover:bg-sky-100 shadow-lg  bg-sky-200  "><NavLink to="/Department/ENT">ENT Department</NavLink></li>
            <li className="px-4 py-2 rounded-sm  hover:bg-sky-100 shadow-lg  bg-sky-200  "><NavLink to="/Department/Gastro">Gastro Department</NavLink></li>
            <li className="px-4 py-2 rounded-sm  hover:bg-sky-100 shadow-lg  bg-sky-200  "><NavLink to="/Department/Gynec">Gynec Department</NavLink></li>
            <li className="px-4 py-2 rounded-sm  hover:bg-sky-100 shadow-lg bg-sky-200 "><NavLink to="/Department/Ortho">Ortho Department</NavLink></li>
          </ul>
        </div>
        <NavLink className=" flex justify-center basis-1/5 rounded-sm hover:bg-sky-100/35 " to="/Career">Career</NavLink>
        <NavLink className=" flex justify-center basis-1/5 rounded-sm hover:bg-sky-100/35  " to="/Appontment_Booking">Get an Appointment</NavLink>
        <NavLink className=" flex justify-center basis-1/5 rounded-sm hover:bg-sky-100/35  " to="/Aboutpage">About Us</NavLink>
      </nav>
    </div>
  );
}



