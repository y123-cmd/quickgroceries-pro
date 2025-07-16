import React from "react";
import React, { useState } from "react";

function App() {
const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-green-100 to-green-50 px-4 sm:px-6 md:px-12 py-10 sm:py-14">
      
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4">QuickGroceries Pro</h1>
        <p className="text-base sm:text-lg text-green-700">Groceries delivered fast, fresh, and at your fingertips!</p>
        <button
  onClick={() => {
    const section = document.getElementById("featured");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="mt-6 px-6 py-2 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 hover:scale-105 transition duration-300"
>
  Shop Now
</button>

      </header>

      {/* Product Grid */}
      <section id="featured">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-8 text-center">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl sm:text-5xl mb-3">{item.image}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-1">{item.name}</h3>
              <p className="text-green-600">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-10 text-center">Why Choose Us</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            {
              icon: "⚡",
              title: "Lightning Fast Delivery",
              desc: "Get your groceries delivered within an hour in major towns.",
            },
            {
              icon: "💰",
              title: "Affordable Prices",
              desc: "We offer competitive prices on all items – save while you shop!",
            },
            {
              icon: "🌿",
              title: "Farm Fresh",
              desc: "We source directly from farms for the freshest produce.",
            },
            {
              icon: "📱",
              title: "Easy to Order",
              desc: "Order from the comfort of your home using any device.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105 duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-1">{feature.title}</h3>
              <p className="text-green-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-green-100 py-10 px-6 rounded-xl text-center shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">Get Started Today</h2>
        <p className="text-green-700 mb-6 max-w-xl mx-auto text-sm sm:text-base">
          Join thousands of happy customers enjoying fast grocery delivery. Order now or download our app for the best experience!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="mt-6 px-6 py-2 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 hover:scale-105 transition duration-300">
  Shop Now
</button>
          <button className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-xl hover:bg-green-100 transition duration-300">
            Download App
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-10 border-t border-green-300 text-center text-green-800 px-4">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} QuickGroceries Pro. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
          <a href="/privacy-policy" className="hover:underline hover:text-green-600 transition">Privacy Policy</a>
          <a href="/terms" className="hover:underline hover:text-green-600 transition">Terms of Service</a>
          <a href="/contact" className="hover:underline hover:text-green-600 transition">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

