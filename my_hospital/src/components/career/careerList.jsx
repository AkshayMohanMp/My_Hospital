import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/Career') // Make sure your API endpoint is correct and accessible
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
    <>
      <div className="  flex justify-center ">
        <h3 className="text-4xl font-bold font-serif mt-10  underline  flex justify-center">Vacancy Available</h3></div>
      <div className="border rounded-lg mt-5 mb-5 overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((person) => (
                <tr key={person.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.experience}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link to={`https://docs.google.com/forms/d/e/1FAIpQLScPI1OKoiCdV1Gg-6NVPAbjtLPUHtiHt5r6QR4fg1QJ2RRJQQ/viewform?usp=sf_link`} className="text-indigo-600 hover:text-indigo-900">Apply</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
