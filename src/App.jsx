import { useEffect, useState } from "react";

import OpeningScreen from "./components/OpeningScreen";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryBar from "./components/CategoryBar";
import ProductSection from "./components/ProductSection";
import Terracotta from "./components/categories/Terracotta";
import ArtWorks from "./components/categories/ArtWorks";

function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [showHome, setShowHome] = useState(false);

  const [activeCategory, setActiveCategory] = useState("All Crafts");

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

  return (
    <div
      className={`transition-opacity duration-[1800ms] ease-out ${
        showHome ? "opacity-100" : "opacity-0"
      }`}
    >
      <AnnouncementBar />

      <Navbar />

      <Hero />

      <CategoryBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {activeCategory === "All Crafts" && <ProductSection />}

{activeCategory === "Terracotta" && <Terracotta />}
{activeCategory === "Art works" && <ArtWorks />}
    </div>
  );
}

export default App;