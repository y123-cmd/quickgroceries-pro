import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-green-100 to-green-50 px-6 py-12">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-800 mb-4">QuickGroceries Pro</h1>
        <p className="text-lg text-green-700">Groceries delivered fast, fresh, and at your fingertips!</p>
        <button className="mt-6 px-6 py-2 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 hover:scale-105 transition duration-300">
          Shop Now
        </button>
      </header>

      {/* Product Grid */}
      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Featured Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Avocado", price: "KSh 30", image: "🥑" },
            { name: "Mango", price: "KSh 40", image: "🥭" },
            { name: "Milk", price: "KSh 70", image: "🥛" },
            { name: "Bread", price: "KSh 50", image: "🍞" },
            { name: "Banana", price: "KSh 20", image: "🍌" },
            { name: "Watermelon", price: "KSh 100", image: "🍉" },
            { name: "Tomato", price: "KSh 15", image: "🍅" },
            { name: "Lemon", price: "KSh 10", image: "🍋" },
            { name: "Carrot", price: "KSh 12", image: "🥕" },
            { name: "Coconut", price: "KSh 60", image: "🥥" },
            { name: "Grapes", price: "KSh 90", image: "🍇" },
            { name: "Strawberry", price: "KSh 120", image: "🍓" },
            { name: "Corn", price: "KSh 25", image: "🌽" },
            { name: "Peach", price: "KSh 35", image: "🍑" },
            { name: "Eggplant", price: "KSh 45", image: "🍆" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-5xl mb-4">{item.image}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{item.name}</h3>
              <p className="text-green-600">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

