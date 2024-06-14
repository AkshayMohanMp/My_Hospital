import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 shadow-lg  " >
      <nav className=" static bg-gradient-to-br from-sky-400 to-sky-100  flex justify-between items-center  shadow-lg">
        <NavLink to="/">
          <img alt="ABC Hospital" className=" h-28 w-44 items-start rounded-lg" src="https://www.logopeople.in/wp-content/uploads/2023/07/Elegance-4-2.jpg"></img>

        </NavLink>

        <NavLink className=" bg-cyan-500 shadow-lg shadow-white rounded-md inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9  px-5 mr-4" to="/Appontment_Booking">
          Book an Appointment
        </NavLink>
      </nav>
    </div>
  );
}
