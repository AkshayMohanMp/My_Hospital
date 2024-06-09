import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/ortho') // Make sure your API endpoint is correct and accessible
      .then(response => {
        console.log('Response data:', response.data); // For debugging
        if (response.data && Array.isArray(response.data.data)) {
          setUsers(response.data.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-indigo-100 py-24 sm:py-32 shadow-md">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Teams</h2>
          <p className="mt-6 text-lg leading-8 text-sky-900">
          Orthopedic doctors, also known as medical orthopedists, are physicians who specialize in treating muscles, joints and bones. They often focus on a particular area of orthopedic medicine or part of the body. Orthopedic doctors frequently work with patients who experience chronic pain or are recovering from an injury. They can perform operations to re-set bones and repair soft tissue or use non-invasive methods to improve range of motion and decrease pain for patients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {users.map((person) => (
            <li key={person._id}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.image} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.designation}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
