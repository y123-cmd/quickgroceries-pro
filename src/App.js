import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-green-100 to-green-50 px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-800 mb-4">QuickGroceries Pro</h1>
        <p className="text-lg text-green-700">Groceries delivered fast, fresh, and at your fingertips!</p>
        <button className="mt-6 px-6 py-2 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition duration-300">
          Shop Now
        </button>
      </header>
    </div>
  );
}

export default App;

