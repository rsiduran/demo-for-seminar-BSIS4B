<div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
  {/* Form Section */}
  <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 border border-gray-200">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
      Add a New Movie
    </h2>
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Movie Title"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Release Year"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Genre"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-medium">
        Submit
      </button>
    </div>
  </div>

  {/* Movie List Section */}
  <div className="w-full max-w-4xl mt-10 bg-white shadow-md rounded-lg p-6 border border-gray-200">
    <table className="table-auto w-full text-left text-sm text-gray-800">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b font-medium bg-gray-50">Title</th>
          <th className="py-2 px-4 border-b font-medium bg-gray-50">Genre</th>
          <th className="py-2 px-4 border-b font-medium bg-gray-50">
            Release Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr key={movie.id}>
          <td className="py-2 px-4 border-b"></td>
          <td className="py-2 px-4 border-b"></td>
          <td className="py-2 px-4 border-b"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>;
