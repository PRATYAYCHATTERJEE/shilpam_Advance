import { useEffect, useState } from "react";

import OpeningScreen from "./components/OpeningScreen";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryBar from "./components/CategoryBar";
import ProductSection from "./components/ProductSection";

import Terracotta from "./components/categories/Terracotta";
import ArtWorks from "./components/categories/ArtWorks";
import BambooCane from "./components/categories/BambooCane";
import DokraMetal from "./components/categories/DokraMetal";
import Woodcraft from "./components/categories/Woodcraft";
import HomeDecor from "./components/categories/HomeDecor";
import Jewellery from "./components/categories/Jewellery";
import BagsAccessories from "./components/categories/BagsAccessories";
import HandEmbroidery from "./components/categories/HandEmbroidery";

import Login from "./pages/Login";

function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [showHome, setShowHome] = useState(false);

  const [activeCategory, setActiveCategory] = useState("All Crafts");

  // Login page state
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const openingTimer = setTimeout(() => {
      setShowOpening(false);

      setTimeout(() => {
        setShowHome(true);
      }, 100);
    }, 6500);

    return () => clearTimeout(openingTimer);
  }, []);

  if (showOpening) {
    return <OpeningScreen />;
  }

  // =========================
  // LOGIN PAGE
  // =========================

  if (showLogin) {
    return (
      <Login
        onBack={() => setShowLogin(false)}
      />
    );
  }

  return (
    <div
      className={`transition-opacity duration-[1800ms] ease-out ${
        showHome ? "opacity-100" : "opacity-0"
      }`}
    >
      <AnnouncementBar />

      <Navbar
        onLoginClick={() => setShowLogin(true)}
      />

      <Hero />

      <CategoryBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {activeCategory === "All Crafts" && <ProductSection />}

      {activeCategory === "Terracotta" && <Terracotta />}

      {activeCategory === "Art works" && <ArtWorks />}

      {activeCategory === "Bamboo & Cane" && <BambooCane />}

      {activeCategory === "Dokra & Metal" && <DokraMetal />}

      {activeCategory === "Woodcraft" && <Woodcraft />}

      {activeCategory === "Home Décor" && <HomeDecor />}

      {activeCategory === "Jewellery" && <Jewellery />}

      {activeCategory === "Bags & Accessories" && (
        <BagsAccessories />
      )}

      {activeCategory === "হাতের ও সৃজনকর্ম" && (
        <HandEmbroidery />
      )}
    </div>
  );
}

export default App;