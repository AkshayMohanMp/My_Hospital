import React from 'react'

const gynecabout = () => {
  return (
    <div className="grid mt-3 grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <img src="https://stmaryshospital.in/images/department/GYNAECOLOGY.jpg" alt="Gynecology" className="w-full size-full h-auto rounded-lg shadow-lg" />
    </div>
    <div className="flex flex-col justify-center">
    <div className=" underline flex justify-center flex-wrap text-2xl font-sheriff font-bold mb-2"> About </div>
      <p className="text-gray-700 mb-4">
      The gynecology department specializes in women's reproductive health, offering services such as routine exams, Pap smears, and contraceptive counseling. It addresses conditions like menstrual disorders, menopause symptoms, and pelvic pain.
      </p>
      <p className="text-gray-700 mb-4">
      Gynecologists also manage pregnancy care, including prenatal visits, ultrasounds, and delivery. The department provides treatment for reproductive system cancers, including ovarian, cervical, and uterine cancers. Minimally invasive surgeries, such as laparoscopies and hysterectomies, are commonly performed. Additionally, the department offers fertility treatments and support for women facing infertility. Comprehensive care is provided through a multidisciplinary approach, involving specialists in obstetrics, oncology, and reproductive endocrinology.
      </p>
      <p className="text-gray-700">
        <strong>Specialized Clinics:</strong> The gynecology department includes specialized clinics such as the Menopause Clinic, Fertility Clinic, Gynecologic Oncology Clinic, Reproductive Endocrinology Clinic, Prenatal Care Clinic, and Pelvic Pain Clinic, each focusing on specific aspects of women's reproductive health to provide targeted care and expertise.
      </p>
    </div>
  </div>
  )
}

export default gynecabout
