
const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="text-left border-b border-gray-600 bg-gray-300 text-black">
            <th className="py-4 px-6 font-medium">Name</th>
            <th className="py-4 px-6 font-medium">Position</th>
            <th className="py-4 px-6 font-medium">Office</th>
            <th className="py-4 px-6 font-medium">Age</th>
            <th className="py-4 px-6 font-medium">Start Date</th>
            <th className="py-4 px-6 font-medium">Salary</th>
          </tr>
        </thead>
        <tbody className="text-black">
          <tr className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <td className="py-4 px-6 border-b border-gray-600">John Doe</td>
            <td className="py-4 px-6 border-b border-gray-600">
              Software Engineer
            </td>
            <td className="py-4 px-6 border-b border-gray-600">
              San Francisco
            </td>
            <td className="py-4 px-6 border-b border-gray-600">28</td>
            <td className="py-4 px-6 border-b border-gray-600">2019-04-25</td>
            <td className="py-4 px-6 border-b border-gray-600">$120,000</td>
          </tr>
          <tr className=" bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <td className="py-4 px-6 border-b border-gray-600">Jane Smith</td>
            <td className="py-4 px-6 border-b border-gray-600">
              Product Manager
            </td>
            <td className="py-4 px-6 border-b border-gray-600">New York</td>
            <td className="py-4 px-6 border-b border-gray-600">32</td>
            <td className="py-4 px-6 border-b border-gray-600">2018-05-15</td>
            <td className="py-4 px-6 border-b border-gray-600">$135,000</td>
          </tr>
          <tr className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <td className="py-4 px-6 border-b border-gray-600">
              Alice Johnson
            </td>
            <td className="py-4 px-6 border-b border-gray-600">
              UI/UX Designer
            </td>
            <td className="py-4 px-6 border-b border-gray-600">Los Angeles</td>
            <td className="py-4 px-6 border-b border-gray-600">27</td>
            <td className="py-4 px-6 border-b border-gray-600">2020-02-10</td>
            <td className="py-4 px-6 border-b border-gray-600">$115,000</td>
          </tr>
          <tr className=" bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <td className="py-4 px-6 border-b border-gray-600">
              Michael Brown
            </td>
            <td className="py-4 px-6 border-b border-gray-600">
              DevOps Engineer
            </td>
            <td className="py-4 px-6 border-b border-gray-600">Austin</td>
            <td className="py-4 px-6 border-b border-gray-600">35</td>
            <td className="py-4 px-6 border-b border-gray-600">2017-11-08</td>
            <td className="py-4 px-6 border-b border-gray-600">$125,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
