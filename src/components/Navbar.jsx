import logo from "../assets/logo.png";

function Navbar({
  onLoginClick,
  onSellerClick,
  onArtisansClick,
}) {
  return (
    <nav className="flex w-full items-center justify-between border-b border-[#4a2119]/10 bg-[#f8edda] px-8 py-3">

      {/* =========================
          LOGO
      ========================== */}
      <div className="flex items-center gap-2">

        <img
          src={logo}
          alt="Silpam"
          className="h-14 w-14 object-contain"
        />

        <div className="text-left">
          <h1 className="font-serif text-3xl leading-none tracking-wide text-[#4a2119]">
            SILPAM
          </h1>

          <p className="mt-1 text-[8px] tracking-[2px] text-[#b8522c]">
            REVIVING BENGAL'S TIMELESS ART
          </p>
        </div>

      </div>


      {/* =========================
          NAVIGATION
      ========================== */}
      <div className="hidden items-center gap-7 font-serif text-[16px] font-semibold text-[#49372c] lg:flex">

        {/* HOME */}
        <a
          href="#home"
          className="border-b-2 border-[#b8522c] pb-1 text-[#b8522c]"
        >
          Home
        </a>


        {/* SHOP */}
        <a
          href="#shop"
          className="transition-colors hover:text-[#b8522c]"
        >
          Shop
        </a>


        {/* ARTISANS */}
        <button
          type="button"
          onClick={onArtisansClick}
          className="cursor-pointer transition-colors hover:text-[#b8522c]"
        >
          Artisans
        </button>


        {/* BECOME A SELLER */}
        <button
          type="button"
          onClick={onSellerClick}
          className="cursor-pointer transition-colors hover:text-[#b8522c]"
        >
          Become a Seller
        </button>


        {/* ABOUT */}
        <a
          href="#about"
          className="transition-colors hover:text-[#b8522c]"
        >
          About Us
        </a>


        {/* BLOG */}
        <a
          href="#blog"
          className="transition-colors hover:text-[#b8522c]"
        >
          Blog
        </a>


        {/* CONTACT */}
        <a
          href="#contact"
          className="transition-colors hover:text-[#b8522c]"
        >
          Contact
        </a>

      </div>


      {/* =========================
          ACTIONS
      ========================== */}
      <div className="flex items-center gap-4 text-[#4a2119]">

        {/* SEARCH */}
        <button
          type="button"
          aria-label="Search"
          className="text-xl transition-transform hover:-translate-y-0.5"
        >
          ⌕
        </button>


        {/* PROFILE / LOGIN */}
        <button
          type="button"
          aria-label="Profile"
          onClick={onLoginClick}
          className="text-xl transition-transform hover:-translate-y-0.5"
        >
          ♙
        </button>


        {/* WISHLIST */}
        <button
          type="button"
          aria-label="Wishlist"
          className="text-2xl transition-transform hover:-translate-y-0.5"
        >
          ♡
        </button>


        {/* CART */}
        <button
          type="button"
          aria-label="Cart"
          className="relative text-xl transition-transform hover:-translate-y-0.5"
        >
          🛒

          <span className="absolute -right-2 -top-2 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#b8522c] text-[9px] text-white">
            2
          </span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;