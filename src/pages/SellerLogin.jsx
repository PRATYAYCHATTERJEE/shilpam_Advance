import { useState } from "react";
import logo from "../assets/logo.png";

function SellerLogin({ onBack, onSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Seller login functionality will be connected later
    console.log("Seller login submitted");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8edda] text-[#4a2119]">

      {/* =====================================================
          DECORATIVE BACKGROUND CIRCLES
      ===================================================== */}

      <div className="pointer-events-none absolute -left-[85px] top-[200px] h-[275px] w-[275px] rounded-full border border-[#d9a47d]/50">
        <div className="absolute left-[65px] top-[160px] text-4xl text-[#e4bd9d]/70">
          ✦
        </div>
      </div>

      <div className="pointer-events-none absolute -right-[100px] bottom-[80px] h-[270px] w-[270px] rounded-full border border-[#d9a47d]/50">
        <div className="absolute left-[65px] top-[75px] text-4xl text-[#e4bd9d]/70">
          ✦
        </div>
      </div>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative z-10 mx-auto flex w-full max-w-[1350px] items-center justify-between border-b border-[#c9a98d]/50 px-6 py-5 lg:px-10">

        {/* Logo */}

        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-3"
          aria-label="Back to home"
        >

          <img
            src={logo}
            alt="Silpam"
            className="h-[58px] w-[58px] object-contain"
          />

          <div className="text-left">

            <h1 className="font-serif text-[30px] font-semibold leading-none tracking-[3px] text-[#3c1c14]">
              SILPAM
            </h1>

            <p className="mt-1 text-[9px] tracking-[1.8px] text-[#b44b27]">
              REVIVING BENGAL'S TIMELESS ART
            </p>

          </div>

        </button>


        {/* Become Seller */}

        <div className="text-right text-[14px] text-[#8b6654]">

          <span>
            New to SILPAM?
          </span>

          <button
            type="button"
            onClick={onSignup}
            className="ml-2 font-semibold text-[#b94c25] transition-colors duration-300 hover:text-[#7d2f18]"
          >
            Become a Seller
          </button>

        </div>

      </header>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="relative z-10 flex justify-center px-5 py-14 lg:py-14">

        {/* ===================================================
            SELLER LOGIN CARD
        =================================================== */}

        <div className="w-full max-w-[670px] rounded-[24px] border border-[#dfc3a9] bg-[#fffaf1]/95 p-[10px] shadow-[0_15px_45px_rgba(101,55,29,0.10)]">

          {/* Inner Border */}

          <div className="rounded-[17px] border border-[#ead6c0] px-8 py-9 sm:px-12 sm:py-11">

            {/* =================================================
                TOP LABEL
            ================================================= */}

            <div className="flex items-center justify-center gap-4">

              <div className="h-px w-14 bg-[#bd7b48]" />

              <span className="text-[11px] font-semibold tracking-[5px] text-[#245d55]">
                ROOTED IN BENGAL
              </span>

              <div className="h-px w-14 bg-[#bd7b48]" />

            </div>


            {/* =================================================
                HEADING
            ================================================= */}

            <div className="mt-6 text-center">

              <h2 className="font-serif text-[43px] font-semibold leading-[1.05] text-[#4b2117] sm:text-[50px]">

                Welcome Back,

                <span className="block font-serif font-normal italic text-[#bd4f27]">
                  Artisan.
                </span>

              </h2>

              <p className="mx-auto mt-5 max-w-[540px] text-[16px] leading-6 text-[#806254]">
                Continue your journey with SILPAM and bring Bengal's timeless
                craftsmanship to the world.
              </p>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="mt-10"
            >

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div>

                <label
                  htmlFor="sellerEmail"
                  className="mb-2 block text-[14px] font-semibold text-[#4a2119]"
                >
                  Email Address <span className="text-[#bd4f27]">*</span>
                </label>

                <div className="flex h-[59px] overflow-hidden rounded-[11px] border border-[#ddc8b4] bg-[#fffaf3] transition-all duration-300 focus-within:border-[#bd552c] focus-within:ring-2 focus-within:ring-[#bd552c]/10">

                  {/* Email Icon */}

                  <div className="flex w-[55px] items-center justify-center border-r border-[#e3d2c0] text-[17px] text-[#8e7a6d]">
                    ✉
                  </div>

                  <input
                    id="sellerEmail"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="
                      h-full
                      flex-1
                      border-0
                      bg-[#eef3fb]
                      px-4
                      text-[15px]
                      text-[#32170f]
                      outline-none
                      placeholder:text-[#9b8d81]
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  PASSWORD
              ================================================= */}

              <div className="mt-9">

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="sellerPassword"
                    className="text-[14px] font-semibold text-[#4a2119]"
                  >
                    Password <span className="text-[#bd4f27]">*</span>
                  </label>

                  <button
                    type="button"
                    className="text-[13px] font-semibold text-[#b44b27] transition-colors duration-300 hover:text-[#7d2f18]"
                  >
                    Forgot Password?
                  </button>

                </div>


                <div className="flex h-[59px] overflow-hidden rounded-[11px] border border-[#ddc8b4] bg-[#fffaf3] transition-all duration-300 focus-within:border-[#bd552c] focus-within:ring-2 focus-within:ring-[#bd552c]/10">

                  {/* Lock Icon */}

                  <div className="flex w-[55px] items-center justify-center border-r border-[#e3d2c0] text-[16px] text-[#8e7a6d]">
                    🔒
                  </div>


                  {/* Password */}

                  <input
                    id="sellerPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="
                      h-full
                      flex-1
                      border-0
                      bg-[#eef3fb]
                      px-4
                      text-[15px]
                      text-[#32170f]
                      outline-none
                      placeholder:text-[#9b8d81]
                    "
                  />


                  {/* Show Password */}

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      flex
                      w-[55px]
                      items-center
                      justify-center
                      border-l
                      border-[#e3d2c0]
                      bg-[#fffaf3]
                      text-[16px]
                      text-[#7e7068]
                      transition-colors
                      duration-300
                      hover:text-[#bd4f27]
                    "
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    ◉
                  </button>

                </div>

              </div>


              {/* =================================================
                  REMEMBER ME
              ================================================= */}

              <div className="mt-7 flex items-center gap-2">

                <input
                  id="sellerRemember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-[18px] w-[18px] accent-[#b44b27]"
                />

                <label
                  htmlFor="sellerRemember"
                  className="cursor-pointer text-[14px] text-[#745546]"
                >
                  Remember me
                </label>

              </div>


              {/* =================================================
                  LOGIN BUTTON
              ================================================= */}

              <button
                type="submit"
                className="
                  mt-7
                  flex
                  h-[59px]
                  w-full
                  items-center
                  justify-center
                  gap-4
                  rounded-[11px]
                  bg-[#ae4b27]
                  font-serif
                  text-[18px]
                  font-semibold
                  text-white
                  shadow-[0_6px_15px_rgba(174,75,39,0.20)]
                  transition-all
                  duration-300
                  hover:bg-[#963d1e]
                  hover:shadow-[0_8px_20px_rgba(174,75,39,0.28)]
                  active:scale-[0.99]
                "
              >

                Login to Seller Dashboard

                <span className="text-[22px]">
                  →
                </span>

              </button>


              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div className="my-8 flex items-center gap-4">

                <div className="h-px flex-1 bg-[#e1d2c2]" />

                <span className="font-serif text-[12px] uppercase tracking-[2px] text-[#9a705b]">
                  OR
                </span>

                <div className="h-px flex-1 bg-[#e1d2c2]" />

              </div>


              {/* =================================================
                  SELLER SIGNUP
              ================================================= */}

              <div className="border-b border-[#e4d5c5] pb-8 text-center">

                <p className="text-[14px] text-[#806254]">
                  Don't have a seller account?
                </p>

                <button
                  type="button"
                  onClick={onSignup}
                  className="mt-2 font-semibold text-[#bd4f27] transition-colors duration-300 hover:text-[#7d2f18]"
                >
                  Become a SILPAM Partner →
                </button>

              </div>


              {/* =================================================
                  BENGAL QUOTE
              ================================================= */}

              <div className="mt-8 text-center">

                <div className="mb-3 text-[15px] text-[#bd7b48]">
                  ✦
                </div>

                <p className="font-serif text-[17px] text-[#4a2119]">
                  “হাতের ছোঁয়ায় গড়া শিল্প, বাংলার গর্বের গল্প”
                </p>

                <p className="mt-2 text-[10px] tracking-[2px] text-[#a57b68]">
                  Crafted with Heritage • Made with Heart
                </p>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative z-10 border-t border-[#d9c7b4]/60 px-5 py-6 text-center">

        <p className="text-[12px] text-[#9a705b]">
          © 2026 SILPAM. Preserving Bengal's Craft, One Artisan at a Time.
        </p>

      </footer>

    </main>
  );
}

export default SellerLogin;