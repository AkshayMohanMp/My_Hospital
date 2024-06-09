import React from "react";
import defaultlayout from '../layout/default.layout'

import Lastsection from '../components/Homepage_components/lastsection'
import Lastslide from '../components/Homepage_components/lastslide'
import { IoCall } from "react-icons/io5";
import { NavLink } from 'react-router-dom'



const about = () => {
  return (

    <>
      <div className="grid grid-cols-1 mt-1 mt-4 ml-4 mr-4 md:grid-cols-2 shadow-xl gap-8">
        <div>
          <img src="https://static.wixstatic.com/media/6119e477f9054e2da37c952f0f5f1d58.jpg/v1/fill/w_1185,h_798,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6119e477f9054e2da37c952f0f5f1d58.jpg" alt="Medical Gynecology" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Medical Gynecology Department</h2>
          <p className="text-gray-700 mb-4">
            Obstetricians and gynecologists, often referred to as OB/GYNs, play a crucial role in women's healthcare by providing a wide range of services tailored to the needs of women throughout their lives. These specialists undergo extensive training to diagnose, treat, and manage various conditions related to the female reproductive system, from adolescence through menopause and beyond.One of the primary roles of obstetricians and gynecologists is to provide comprehensive prenatal care to pregnant women, ensuring the health and well-being of both the mother and the developing fetus. They monitor the progress of pregnancy through regular check-ups, perform ultrasounds, and offer guidance on nutrition, exercise, and childbirth preparation. During labor and delivery, obstetricians oversee the process, addressing any complications that may arise and ensuring a safe delivery for both mother and baby.
          </p>
          <div className=" mt-10 justify-center space-x-10 grid grid-flow-col auto-cols-max">
            <NavLink className="flex justify-between flex-wrap font-serif font-bold text-xl pt-2 text-sm hover:text-sky-500 text-black" to="/Appontment_Booking">Get an Appointment</NavLink>
            <NavLink to="https://wa.me/qr/ZBXZN3AJHT2TG1" >
              <IoCall className=" rounded-3xl flex justify-center  hover:bg-white  size-10" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 ml-4 mr-4 mt-4 md:grid-cols-2  shadow-xl gap-8"> 
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Medical Orthopedics Department</h2>
          <p className="text-gray-700 mb-4">

          The orthopedics department is an essential component of any medical institution, specializing in the diagnosis, treatment, and management of musculoskeletal conditions and injuries. Orthopedic specialists, including orthopedic surgeons, physicians, physical therapists, and other healthcare professionals, work collaboratively to provide comprehensive care for patients of all ages, from pediatric to geriatric populations. One of the primary focuses of the orthopedics department is the treatment of musculoskeletal injuries, including fractures, sprains, and strains. Orthopedic surgeons are skilled in performing surgical procedures to repair and stabilize broken bones, restore joint function, and facilitate the healing process. They utilize advanced surgical techniques, such as minimally invasive surgery and arthroscopy, to minimize pain, scarring, and recovery time for patients. In addition to trauma care, the orthopedics department offers specialized services for patients with chronic musculoskeletal conditions, such as arthritis, osteoporosis, and degenerative joint disease. Orthopedic specialists develop personalized treatment plans tailored to each patient's unique needs, incorporating a combination of medication management, physical therapy, and lifestyle modifications to alleviate pain, improve mobility, and enhance quality of life.
          </p>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/532953739/photo/physical-therapist-examining-patient.jpg?s=612x612&w=0&k=20&c=Zsgy-VkGU4vfwbNYZS72TMtWYfjuos6SC1m-bK4Hexs=" alt="Medical Gastroenterology" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className=' container mx-auto px-4 md:px-12 my-8 fles fles-col gap-3'>
            <Lastslide />
          </div>
      <br />
      <Lastsection/>
      </>
    
  );
}

export default defaultlayout(about);
