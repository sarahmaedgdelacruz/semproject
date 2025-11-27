import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

// Components
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/Homepage.jsx";
import About from "./components/About.jsx";
import Faqs from "./components/Faqs.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Products from "./components/Products.jsx";
import Carts from "./components/Carts.jsx";

function App() {
  const [session, setSession] = useState(null);
  return (
    <Router>
      <Navbar session={session} setSession={setSession} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/login"
          element={<Login session={session} setSession={setSession} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
