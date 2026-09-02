import {
  useEffect,
  useRef,
  useState,
} from "react";

import logo from "../assets/logo.png";

function Navbar({
  onLoginClick,
  onSellerClick,
  onArtisansClick,

  // Authentication
  user,

  // Account menu
  onProfileClick,
  onOrdersClick,
  onAddressesClick,
  onWishlistClick,
  onLogout,
}) {
  const [showAccountMenu, setShowAccountMenu] =
    useState(false);

  const accountRef = useRef(null);

  // =========================
  // CLOSE DROPDOWN
  // WHEN CLICKING OUTSIDE
  // =========================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setShowAccountMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // =========================
  // PROFILE BUTTON
  // =========================

  const handleProfileButton = () => {
    // User is NOT logged in
    if (!user) {
      setShowAccountMenu(false);

      onLoginClick();

      return;
    }

    // User IS logged in
    setShowAccountMenu(
      (previousState) => !previousState
    );
  };

  // =========================
  // ACCOUNT MENU CLICK
  // =========================

  const handleMenuClick = (callback) => {
    setShowAccountMenu(false);

    if (callback) {
      callback();
    }
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    setShowAccountMenu(false);

    if (onLogout) {
      onLogout();
    }
  };

  return (
    <nav
      className="
        flex
        w-full
        items-center
        justify-between
        border-b
        border-[#4a2119]/10
        bg-[#f8edda]
        px-8
        py-3
      "
    >
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
          <h1
            className="
              font-serif
              text-3xl
              leading-none
              tracking-wide
              text-[#4a2119]
            "
          >
            SILPAM
          </h1>

          <p
            className="
              mt-1
              text-[8px]
              tracking-[2px]
              text-[#b8522c]
            "
          >
            REVIVING BENGAL'S TIMELESS ART
          </p>
        </div>
      </div>

      {/* =========================
          NAVIGATION
      ========================== */}

      <div
        className="
          hidden
          items-center
          gap-7
          font-serif
          text-[16px]
          font-semibold
          text-[#49372c]
          lg:flex
        "
      >
        {/* HOME */}

        <a
          href="#home"
          className="
            border-b-2
            border-[#b8522c]
            pb-1
            text-[#b8522c]
          "
        >
          Home
        </a>

        {/* SHOP */}

        <a
          href="#shop"
          className="
            transition-colors
            hover:text-[#b8522c]
          "
        >
          Shop
        </a>

        {/* ARTISANS */}

        <button
          type="button"
          onClick={onArtisansClick}
          className="
            cursor-pointer
            transition-colors
            hover:text-[#b8522c]
          "
        >
          Artisans
        </button>

        {/* BECOME A SELLER */}

        <button
          type="button"
          onClick={onSellerClick}
          className="
            cursor-pointer
            transition-colors
            hover:text-[#b8522c]
          "
        >
          Become a Seller
        </button>

        {/* ABOUT */}

        <a
          href="#about"
          className="
            transition-colors
            hover:text-[#b8522c]
          "
        >
          About Us
        </a>

        {/* BLOG */}

        <a
          href="#blog"
          className="
            transition-colors
            hover:text-[#b8522c]
          "
        >
          Blog
        </a>

        {/* CONTACT */}

        <a
          href="#contact"
          className="
            transition-colors
            hover:text-[#b8522c]
          "
        >
          Contact
        </a>
      </div>

      {/* =========================
          ACTIONS
      ========================== */}

      <div
        className="
          flex
          items-center
          gap-4
          text-[#4a2119]
        "
      >
        {/* =========================
            SEARCH
        ========================== */}

        <button
          type="button"
          aria-label="Search"
          className="
            text-xl
            transition-transform
            hover:-translate-y-0.5
          "
        >
          ⌕
        </button>

        {/* =========================
            PROFILE / ACCOUNT
        ========================== */}

        <div
          ref={accountRef}
          className="relative"
        >
          <button
            type="button"
            aria-label={
              user
                ? "Open account menu"
                : "Login"
            }
            onClick={handleProfileButton}
            className="
              flex
              items-center
              gap-2
              transition-colors
              hover:text-[#b8522c]
            "
          >
            {/* Profile icon */}

            <span className="text-xl">
              ♙
            </span>

            {/* User name */}

            {user && (
              <span
                className="
                  hidden
                  max-w-[150px]
                  truncate
                  text-[15px]
                  font-medium
                  lg:block
                "
              >
                {user.fullName}
              </span>
            )}

            {/* Arrow */}

            {user && (
              <span
                className={`
                  hidden
                  text-[13px]
                  transition-transform
                  lg:block
                  ${
                    showAccountMenu
                      ? "rotate-180"
                      : ""
                  }
                `}
              >
                ▾
              </span>
            )}
          </button>

          {/* =========================
              ACCOUNT DROPDOWN
          ========================== */}

          {user && showAccountMenu && (
            <div
              className="
                absolute
                right-0
                top-[48px]
                z-[100]
                w-[285px]
                overflow-hidden
                rounded-[18px]
                border
                border-[#dfd0c1]
                bg-white
                shadow-[0_10px_35px_rgba(60,35,20,0.18)]
              "
            >
              {/* HEADER */}

              <div
                className="
                  border-b
                  border-[#eee3d8]
                  px-5
                  py-4
                "
              >
                <p
                  className="
                    text-[13px]
                    text-[#8b6b5b]
                  "
                >
                  Your Account
                </p>

                <p
                  className="
                    mt-1
                    truncate
                    text-[16px]
                    font-semibold
                    text-[#3f2118]
                  "
                >
                  {user.fullName}
                </p>
              </div>

              {/* MY PROFILE */}

              <button
                type="button"
                onClick={() =>
                  handleMenuClick(
                    onProfileClick
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  px-5
                  py-4
                  text-left
                  text-[15px]
                  text-[#4a3b34]
                  transition-colors
                  hover:bg-[#fff6eb]
                  hover:text-[#b44b27]
                "
              >
                <span className="text-[21px]">
                  ♙
                </span>

                <span>
                  My Profile
                </span>
              </button>

              {/* ORDERS */}

              <button
                type="button"
                onClick={() =>
                  handleMenuClick(
                    onOrdersClick
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  px-5
                  py-4
                  text-left
                  text-[15px]
                  text-[#4a3b34]
                  transition-colors
                  hover:bg-[#fff6eb]
                  hover:text-[#b44b27]
                "
              >
                <span className="text-[20px]">
                  ◈
                </span>

                <span>
                  Orders
                </span>
              </button>

              {/* SAVED ADDRESSES */}

              <button
                type="button"
                onClick={() =>
                  handleMenuClick(
                    onAddressesClick
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  px-5
                  py-4
                  text-left
                  text-[15px]
                  text-[#4a3b34]
                  transition-colors
                  hover:bg-[#fff6eb]
                  hover:text-[#b44b27]
                "
              >
                <span className="text-[20px]">
                  ⌖
                </span>

                <span>
                  Saved Addresses
                </span>
              </button>

              {/* WISHLIST */}

              <button
                type="button"
                onClick={() =>
                  handleMenuClick(
                    onWishlistClick
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  px-5
                  py-4
                  text-left
                  text-[15px]
                  text-[#4a3b34]
                  transition-colors
                  hover:bg-[#fff6eb]
                  hover:text-[#b44b27]
                "
              >
                <span className="text-[21px]">
                  ♡
                </span>

                <span>
                  Wishlist
                </span>
              </button>

              {/* DIVIDER */}

              <div
                className="
                  mx-5
                  border-t
                  border-[#eee3d8]
                "
              />

              {/* LOGOUT */}

              <button
                type="button"
                onClick={handleLogout}
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  px-5
                  py-4
                  text-left
                  text-[15px]
                  text-[#9b3d23]
                  transition-colors
                  hover:bg-[#fff0e8]
                "
              >
                <span className="text-[20px]">
                  ↪
                </span>

                <span>
                  Logout
                </span>
              </button>
            </div>
          )}
        </div>

        {/* =========================
            WISHLIST ICON
        ========================== */}

        <button
          type="button"
          aria-label="Wishlist"
          onClick={() => {
            if (user) {
              handleMenuClick(
                onWishlistClick
              );
            } else {
              onLoginClick();
            }
          }}
          className="
            text-2xl
            transition-transform
            hover:-translate-y-0.5
          "
        >
          ♡
        </button>

        {/* =========================
            CART
        ========================== */}

        <button
          type="button"
          aria-label="Cart"
          className="
            relative
            text-xl
            transition-transform
            hover:-translate-y-0.5
          "
        >
          🛒

          <span
            className="
              absolute
              -right-2
              -top-2
              flex
              h-[17px]
              w-[17px]
              items-center
              justify-center
              rounded-full
              bg-[#b8522c]
              text-[9px]
              text-white
            "
          >
            2
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;