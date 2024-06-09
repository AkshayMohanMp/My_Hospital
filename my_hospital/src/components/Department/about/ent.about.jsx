import React from 'react'

const entabout = () => {
  return (
    <div className="grid mt-3 grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <img src="https://a4hospital.com/images/department/ent/ent_1024x678.jpg" alt="ENT Department" className="w-full size-full h-auto rounded-lg shadow-lg" />
    </div>
    <div className="flex flex-col justify-center">
    <div className=" underline flex justify-center flex-wrap text-2xl font-sheriff font-bold mb-2"> About </div>
      <p className="text-gray-700 mb-4">
       The ENT department specializes in the diagnosis and treatment of conditions affecting the ear, nose, and throat. It addresses issues such as hearing loss, sinusitis, and throat infections. ENT specialists perform surgeries like tonsillectomies, septoplasties, and cochlear implants. 
      </p>
      <p className="text-gray-700 mb-4">
      The department also manages allergies, voice disorders, and sleep apnea. Advanced diagnostic tools and minimally invasive techniques are commonly used. Additionally, ENT care often involves a multidisciplinary approach, integrating audiologists, speech therapists, and allergists to provide comprehensive treatment for patients.
      </p>
      <p className="text-gray-700">
        <strong>Specialized Clinics:</strong> The ENT department includes specialized clinics such as the Hearing and Balance Clinic, Sinus and Allergy Clinic, Voice and Swallowing Clinic, Sleep Apnea Clinic, and Pediatric ENT Clinic, each focusing on specific conditions to provide targeted and expert care.
      </p>
    </div>
  </div>
  )
}

export default entabout 
