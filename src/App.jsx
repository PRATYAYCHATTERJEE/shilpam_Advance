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
import Signup from "./pages/Signup"; 
import SellerLogin from "./pages/SellerLogin"; 
import SellerRegister from "./pages/SellerRegister"; 
import Artisans from "./pages/Artisans"; 
 
 
 
 
function App() { 
  // ========================= 
  // OPENING SCREEN STATE 
  // ========================= 
 
  const [showOpening, setShowOpening] = useState(true); 
  const [showHome, setShowHome] = useState(false); 
 
  // ========================= 
  // CATEGORY STATE 
  // ========================= 
 
  const [activeCategory, setActiveCategory] = 
    useState("All Crafts"); 
 
  // ========================= 
  // PAGE NAVIGATION STATE 
  // ========================= 
 
  const [showLogin, setShowLogin] = 
    useState(false); 
 
  const [showSignup, setShowSignup] = 
    useState(false); 
 
  const [showSellerLogin, setShowSellerLogin] = 
    useState(false); 
 
  const [showSellerRegister, setShowSellerRegister] = 
    useState(false); 
 
  const [showArtisans, setShowArtisans] = 
    useState(false); 
 
  // ========================= 
  // OPENING SCREEN TIMER 
  // ========================= 
 
  useEffect(() => { 
    const openingTimer = setTimeout(() => { 
      setShowOpening(false); 
 
      setTimeout(() => { 
        setShowHome(true); 
      }, 100); 
    }, 6500); 
 
    return () => clearTimeout(openingTimer); 
  }, []); 
 
  // ========================= 
  // OPENING SCREEN 
  // ========================= 
 
  if (showOpening) { 
    return <OpeningScreen />; 
  } 
 
  // ========================= 
  // SIGNUP PAGE 
  // ========================= 
 
  if (showSignup) { 
    return ( 
      <Signup 
        onLogin={() => { 
          setShowSignup(false); 
          setShowLogin(true); 
        }} 
        onBack={() => { 
          setShowSignup(false); 
        }} 
      /> 
    ); 
  } 
 
  // ========================= 
  // LOGIN PAGE 
  // ========================= 
 
  if (showLogin) { 
    return ( 
      <Login 
        onSignup={() => { 
          setShowLogin(false); 
          setShowSignup(true); 
        }} 
        onBack={() => { 
          setShowLogin(false); 
        }} 
      /> 
    ); 
  } 
 
  // ========================= 
  // SELLER REGISTER PAGE 
  // ========================= 
 
  if (showSellerRegister) { 
    return ( 
      <SellerRegister 
        onBack={() => { 
          setShowSellerRegister(false); 
        }} 
        onSubmit={() => { 
          console.log("Seller partnership request submitted"); 
 
          setShowSellerRegister(false); 
          setShowSellerLogin(true); 
        }} 
      /> 
    ); 
  } 
 
  // ========================= 
  // SELLER LOGIN PAGE 
  // ========================= 
 
  if (showSellerLogin) { 
    return ( 
      <SellerLogin 
        onBack={() => { 
          setShowSellerLogin(false); 
        }} 
        onSignup={() => { 
          setShowSellerLogin(false); 
          setShowSellerRegister(true); 
        }} 
      /> 
    ); 
  } 
 
  // ========================= 
  // ARTISANS PAGE 
  // ========================= 
 
  if (showArtisans) { 
    return ( 
      <Artisans 
        onBack={() => { 
          setShowArtisans(false); 
        }} 
      /> 
    ); 
  } 
 
  // ========================= 
  // MAIN HOME PAGE 
  // ========================= 
 
  return ( 
    <div 
      className={`transition-opacity duration-[1800ms] ease-out ${ 
        showHome ? "opacity-100" : "opacity-0" 
      }`} 
    > 
      <AnnouncementBar /> 
 
     <Navbar 
  onLoginClick={() => { 
    setShowLogin(true); 
  }} 
  onSellerClick={() => { 
    setShowSellerLogin(true); 
  }} 
  onArtisansClick={() => { 
    setShowArtisans(true); 
  }} 
/> 
 
      <Hero /> 
 
      <CategoryBar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      /> 
 
      {/* ========================= 
          CATEGORY PAGES 
      ========================== */} 
 
      {activeCategory === "All Crafts" && ( 
        <ProductSection /> 
      )} 
 
      {activeCategory === "Terracotta" && ( 
        <Terracotta /> 
      )} 
 
      {activeCategory === "Art works" && ( 
        <ArtWorks /> 
      )} 
 
      {activeCategory === "Bamboo & Cane" && ( 
        <BambooCane /> 
      )} 
 
      {activeCategory === "Dokra & Metal" && ( 
        <DokraMetal /> 
      )} 
 
      {activeCategory === "Woodcraft" && ( 
        <Woodcraft /> 
      )} 
 
      {activeCategory === "Home Décor" && ( 
        <HomeDecor /> 
      )} 
 
      {activeCategory === "Jewellery" && ( 
        <Jewellery /> 
      )} 
 
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