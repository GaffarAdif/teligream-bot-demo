import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function Home() {
  // State to manage the visibility of the demo content
  const [showDemo, setShowDemo] = useState(false);
  const [userData, setUserData] = useState(null); // State to store user data

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe.user; // Get user data from Telegram Web App
    setUserData(user); // Store user data in state
  }, []);

  const handleShowDemo = () => {
    setShowDemo(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to My Simple App</h1>
      <p className="text-lg text-gray-700 text-center mb-4">
        This is a simple page styled with Tailwind CSS!
      </p>

      {/* Display user data if available */}
      {userData && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold">User Data:</h2>
          <p className="text-lg text-gray-800">First Name: {userData.first_name}</p>
          <p className="text-lg text-gray-800">Last Name: {userData.last_name}</p>
          <p className="text-lg text-gray-800">Username: {userData.username}</p>
          <p className="text-lg text-gray-800">ID: {userData.id}</p>
        </div>
      )}

      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleShowDemo}
      >
        Show Demo
      </button>

      {/* Conditional rendering of demo content */}
      {showDemo && (
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-800">Here is the demo content!</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Another Demo Button
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* You can add more routes here as needed */}
    </Routes>
  );
}

export default App;
