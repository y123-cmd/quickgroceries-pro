import React, { useState } from "react";

function App() {
  const [selectedFeature, setSelectedFeature] = useState(null); 
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (item) => {
    if (!cart.find((i) => i.name === item.name)) {
      setCart([...cart, item]);
    }
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((i) => i.name !== item.name));
  };

  const products = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-green-100 to-green-50 px-4 sm:px-6 md:px-12 py-10 sm:py-14 relative">

      {/* Cart Sidebar */}
      <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-xl p-6 overflow-y-auto z-50">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-green-600">Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-green-600">{item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-xl hover:bg-green-800 transition">
            Checkout
          </button>
        )}
      </div>

      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4">
          QuickGroceries Pro
        </h1>
        <p className="text-base sm:text-lg text-green-700">
          Groceries delivered fast, fresh, and at your fingertips!
        </p>
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
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition duration-300 transform hover:scale-105 text-center"
              onClick={() => setSelectedItem(item)}
            >
              <div className="text-4xl sm:text-5xl mb-3">{item.image}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-1">{item.name}</h3>
              <p className="text-green-600">{item.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(item);
                }}
                className="mt-3 text-sm bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Product Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-xl w-80 text-center shadow-lg"
          >
            <div className="text-5xl mb-4">{selectedItem.image}</div>
            <h3 className="text-2xl font-bold mb-2 text-green-800">{selectedItem.name}</h3>
            <p className="text-green-600 mb-4">{selectedItem.price}</p>
            <button
              onClick={() => setSelectedItem(null)}
              className="mt-3 px-6 py-2 bg-green-700 text-white rounded-xl hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Features Section */}
<section className="mt-20">
  <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-10 text-center">
    Why Choose Us
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
    {[
      {
        icon: "⚡",
        title: "Lightning Fast Delivery",
        desc: "Get your groceries delivered within an hour in major towns.",
        details: "We have a dedicated team and fast logistics partners ensuring your delivery arrives fresh and on time. This feature is currently available in Nairobi, Mombasa, and Kisumu.",
      },
      {
        icon: "💰",
        title: "Affordable Prices",
        desc: "We offer competitive prices on all items – save while you shop!",
        details: "Our prices are often 10-20% lower than physical supermarkets, and we run weekly discounts across popular products.",
      },
      {
        icon: "🌿",
        title: "Farm Fresh",
        desc: "We source directly from farms for the freshest produce.",
        details: "By cutting out middlemen, we ensure you get the freshest items and also help farmers earn more for their produce.",
      },
      {
        icon: "📱",
        title: "Easy to Order",
        desc: "Order from the comfort of your home using any device.",
        details: "Our website and mobile app are optimized for quick, one-tap grocery ordering — even on slow internet.",
      },
    ].map((feature, idx) => (
      <div
        key={idx}
        className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105 duration-300"
        onClick={() => setSelectedFeature(feature)}
      >
        <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
        <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-1">
          {feature.title}
        </h3>
        <p className="text-green-600">{feature.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Modal for feature details */}
{selectedFeature && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4 relative">
      <button
        onClick={() => setSelectedFeature(null)}
        className="absolute top-2 right-4 text-xl text-green-800 hover:text-red-500"
      >
        &times;
      </button>
      <div className="text-4xl mb-4 text-center">{selectedFeature.icon}</div>
      <h3 className="text-2xl font-bold text-green-800 mb-2 text-center">
        {selectedFeature.title}
      </h3>
      <p className="text-green-700 text-sm sm:text-base text-center">
        {selectedFeature.details}
      </p>
    </div>
  </div>
)}

      {/* CTA Section */}
<section className="mt-20 bg-green-100 py-10 px-6 rounded-xl text-center shadow-sm">
  <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">Get Started Today</h2>
  <p className="text-green-700 mb-6 max-w-xl mx-auto text-sm sm:text-base">
    Join thousands of happy customers enjoying fast grocery delivery. Order now or download our app for the best experience!
  </p>
  <div className="flex justify-center gap-4 flex-wrap">
    <button
      onClick={() => {
        const section = document.getElementById("featured");
        section?.scrollIntoView({ behavior: "smooth" });
      }}
      className="mt-6 px-6 py-2 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 hover:scale-105 transition duration-300"
    >
      Order Now
    </button>

    <button
  onClick={() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.open("https://play.google.com/store/apps/details?id=com.quickgroceries.pro", "_blank");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open("https://apps.apple.com/app/id1234567890", "_blank");
    } else {
      window.open("https://www.google.com", "_blank"); // fallback
    }
  }}
  className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-xl hover:bg-green-100 transition duration-300"
>
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

