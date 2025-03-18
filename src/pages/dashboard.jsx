import React, { useState } from 'react';

const Dashboard = () => {
  const [records, setRecords] = useState([
    { id: 1, course: "Introduction to Programming", type: "Core", price: "₱100", date: "March 1, 2025" },
    { id: 2, course: "Web Development Fundamentals", type: "Elective", price: "₱120", date: "March 8, 2025" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    course: "",
    type: "",
    price: "",
    date: "",
  });

  const filteredRecords = records.filter((record) =>
    Object.values(record).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDelete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleAddCourse = () => {
    if (
      newCourse.course.trim() &&
      newCourse.type.trim() &&
      newCourse.price.trim() &&
      newCourse.date.trim()
    ) {
      setRecords([
        ...records,
        { ...newCourse, id: records.length + 1 }, // Assigning unique ID
      ]);
      setNewCourse({ course: "", type: "", price: "", date: "" }); // Resetting form
      setIsModalOpen(false); // Closing modal
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Dashboard</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Add Course Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Course
        </button>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300">Course</th>
                <th className="px-4 py-2 border border-gray-300">Type</th>
                <th className="px-4 py-2 border border-gray-300">Price</th>
                <th className="px-4 py-2 border border-gray-300">Date</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <tr key={record.id} className="odd:bg-white even:bg-gray-100">
                    <td className="px-4 py-2 border border-gray-300">{record.course}</td>
                    <td className="px-4 py-2 border border-gray-300">{record.type}</td>
                    <td className="px-4 py-2 border border-gray-300">{record.price}</td>
                    <td className="px-4 py-2 border border-gray-300">{record.date}</td>
                    <td className="px-4 py-2 border border-gray-300">
                      <button
                        onClick={() => handleDelete(record.id)}
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center px-4 py-2 text-gray-500 border border-gray-300">
                    No courses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Course Modal */}
      {isModalOpen && (
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Course</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Course Name"
                value={newCourse.course}
                onChange={(e) => setNewCourse({ ...newCourse, course: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Type (e.g., Core/Elective)"
                value={newCourse.type}
                onChange={(e) => setNewCourse({ ...newCourse, type: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Price"
                value={newCourse.price}
                onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={newCourse.date}
                onChange={(e) => setNewCourse({ ...newCourse, date: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCourse}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add Course
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
