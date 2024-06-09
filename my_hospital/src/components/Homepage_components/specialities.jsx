import { NavLink } from "react-router-dom";

const productsColumn1 = [
  {
    name: 'Ortho-Department',
    imageSrc: 'https://avdaddenavarhospital.com/wp-content/uploads/2021/04/6crop.jpg',
    link: '/Department/ortho',
  },
  {
    name: 'Gynec-Department',
    imageSrc: 'https://avantihospitalujjain.com/wp-content/uploads/2022/05/gynecology_avhospital.jpg',
    link: '/Department/gynec',
  },

];

const productsColumn2 = [
  {
    name: 'Emergency-Department',
    imageSrc: 'https://spfort.com/wp-content/uploads/2022/09/emergency-medicine.jpg',
    link: '/Department/emergency',
  },
  {
    name: 'ENT-Department',
    imageSrc: 'https://www.kpims.in/wp-content/uploads/2022/06/service/ent-img.jpg',
    link: '/Department/ent',
  },
];

const productsColumn3=[
  {
    name: 'Gastro-Department',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPQ-9RO3IPWpMAJ__BhsX6BZSgAgFNQgLwmGRW1ZcseGYSePy0-Us6hxU52rb-T9c1L0&usqp=CAU',
    link: '/Department/gastro',
  },
]

export default function Speciality() {
  return (
    <div className="shadow-xl  rounded-lg border-none">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl  flex justify-center font-bold tracking-tight text-gray-700 underline font-serif">Speciality and Departments</h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 xl:gap-x-8">
          <div>
            {productsColumn1.map((product) => (
              <div key={product.name} className="group relative mb-6">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 relative">
                  <NavLink to={product.link}>
                    <img 
                      src={product.imageSrc} 
                      alt={product.name} 
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 ease-in-out transform group-hover:scale-150"
                    />
                  </NavLink>
                  <h1 className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50 px-2 py-1">{product.name}</h1>
                </div>
              </div>
            ))}
          </div>
          <div>
            {productsColumn2.map((product) => (
              <div key={product.name} className="group relative mb-6">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 relative">
                  <NavLink to={product.link}>
                    <img 
                      src={product.imageSrc} 
                      alt={product.name} 
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 ease-in-out transform group-hover:scale-150"
                    />
                  </NavLink>
                  <h1 className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50 px-2 py-1">{product.name}</h1>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className=" col-span-1 mt-6 gap-x-6 gap-y-10 xl:gap-x-8 flex justify-center">
            {productsColumn3.map((product) => (
              <div key={product.name} className="group relative mb-6">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 relative">
                  <NavLink to={product.link}>
                    <img 
                      src={product.imageSrc} 
                      alt={product.name} 
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 ease-in-out transform group-hover:scale-150"
                    />
                  </NavLink>
                  <h1 className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50 px-2 py-1">{product.name}</h1>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
}
