import React from 'react'

const emrabout = () => {
  return (
    <div className="grid mt-3 grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <img src="https://static.vecteezy.com/system/resources/previews/029/841/004/large_2x/blurred-hospital-emergency-room-abstract-medical-background-ai-generative-free-photo.jpg" alt="Emergency department" className="w-full size-full h-auto rounded-lg shadow-lg" />
    </div>
    <div className="flex flex-col justify-center">
    <div className=" underline flex justify-center flex-wrap text-2xl  font-sheriff font-bold mb-2"> About </div>
      <p className="text-gray-700 mb-4">
        The Medical Gastroenterology Department of The Centre of Excellence of Gastrosciences at Meitra Hospital focuses on the disorders that are related to the digestive system, liver, and pancreato-biliary tract. The department is well supported by technologically advanced tools to offer the best possible treatment to all our patients.
      </p>
      <p className="text-gray-700 mb-4">
        We provide round-the-clock emergency consultation and endoscopy services apart from the regular outpatient services. With four advanced endoscopy suites with mechanized and automated cleaning & recycling machinery, safety and disinfection are ensured.
      </p>
      <p className="text-gray-700">
        <strong>Specialized Clinics:</strong> Gastrointestinal Clinic: This is a specialized clinic that focuses on the medical management of GI disorders and laparoscopic surgeries for cancers.
      </p>
    </div>
  </div>
  )
}

export default emrabout
