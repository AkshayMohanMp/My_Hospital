import React from 'react'

const orthoabout = () => {
  return (
    
    <div className="grid mt-3 grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <img className='w-full size-full h-auto rounded-lg shadow-xl' src="https://img.freepik.com/premium-photo/medical-poster-image-bones-knee-joint-knee-arthritis-inflammation-fracture-cartilage-copy-space_99433-7801.jpg" />
    </div>
    <div className="flex flex-col justify-center">
    <div className=" underline flex justify-center flex-wrap text-2xl font-sheriff font-bold mb-2"> About </div>
      <p className="text-gray-700 mb-4">
        The orthopedic department specializes in the diagnosis, treatment, and prevention of musculoskeletal disorders. It focuses on conditions affecting bones, joints, ligaments, tendons, and muscles. Orthopedic surgeons often perform procedures such as joint replacements, fracture repairs, and arthroscopic surgeries. The department also addresses sports injuries, spinal disorders, and pediatric orthopedic conditions. Non-surgical treatments include physical therapy, bracing, and medications. 
      </p>
      <p className="text-gray-700 mb-4">
        A multidisciplinary team approach ensures comprehensive patient care, integrating the expertise of surgeons, physiotherapists, and other healthcare professionals. Advanced techniques like robotic surgery and biologics are continually enhancing treatment outcomes.
      </p>
      <p className="text-gray-700">
        <strong>Specialized Clinics:</strong> 
        The orthopedic department often includes specialized clinics such as the Trauma and Fracture Clinic, Joint Replacement Clinic, Sports Medicine Clinic, Spine Clinic, Pediatric Orthopedic Clinic, Hand and Upper Extremity Clinic, and Foot and Ankle Clinic, each focusing on targeted care and expertise for specific musculoskeletal conditions..
      </p>
    </div>
  </div>
  )
}

export default orthoabout