import { useState } from "react";

import logo from "../assets/logo.png";
import SellerAccountForm from "../components/seller/SellerAccountForm";
import SellerBusinessForm from "../components/seller/SellerBusinessForm";

function SellerRegister() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="min-h-screen bg-[#f8edda] text-[#4a2119]">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="mx-auto flex w-full max-w-[1350px] items-center justify-between border-b border-[#dcc5ad] px-6 py-5 lg:px-10">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="Silpam"
            className="h-[58px] w-[58px] object-contain"
          />

          <div>

            <h1 className="font-serif text-[29px] font-semibold tracking-[4px] text-[#35170f]">
              SILPAM
            </h1>

            <p className="mt-1 text-[9px] tracking-[1.7px] text-[#b8522c]">
              REVIVING BENGAL'S TIMELESS ART
            </p>

          </div>

        </div>


        {/* Login */}

        <div className="text-[14px] text-[#80695a]">

          <span>
            Already a partner?
          </span>

          <button
            type="button"
            className="ml-2 font-semibold text-[#b64d26] transition-colors duration-300 hover:text-[#7d2f18]"
          >
            Login
          </button>

        </div>

      </header>


      {/* =========================================
          HERO
      ========================================= */}

      <section className="mx-auto max-w-[1000px] px-5 pb-3 pt-14 text-center">

        {/* Small heading */}

        <div className="flex items-center justify-center gap-4">

          <span className="h-px w-14 bg-[#b97b49]" />

          <span className="text-[10px] font-semibold tracking-[4px] text-[#76503c]">
            ROOTED IN BENGAL
          </span>

          <span className="h-px w-14 bg-[#b97b49]" />

        </div>


        {/* Main heading */}

        <h2 className="mt-6 font-serif text-[52px] font-semibold leading-[1.03] text-[#482016] sm:text-[62px]">

          Bring Your Craft

          <br />

          <span className="font-normal italic text-[#b84f28]">
            To The World
          </span>

        </h2>


        {/* Description */}

        <p className="mx-auto mt-6 max-w-[720px] text-[16px] leading-7 text-[#7d6253]">

          Join SILPAM and give your handmade creations a place where
          tradition meets the modern world.

        </p>

      </section>


      {/* =========================================
          STEP INDICATOR
      ========================================= */}

      <section className="mx-auto mt-10 w-full max-w-[850px] px-5">

        <div className="flex items-center">

          {/* STEP 1 */}

          <div className="flex items-center gap-4">

            <div
              className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border font-serif text-[16px] font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? "border-[#b64d26] bg-[#b64d26] text-white shadow-[0_5px_15px_rgba(182,77,38,0.18)]"
                  : "border-[#d7c0a8] bg-[#fffaf2] text-[#917b6d]"
              }`}
            >
              1
            </div>

            <div>

              <h3
                className={`font-semibold ${
                  currentStep === 1
                    ? "text-[#492316]"
                    : "text-[#917b6d]"
                }`}
              >
                Email & Password
              </h3>

              <p className="mt-1 text-[12px] text-[#9d8778]">
                Create your seller account
              </p>

            </div>

          </div>


          {/* CONNECTING LINE */}

          <div
            className={`mx-6 h-px flex-1 transition-colors duration-500 ${
              currentStep === 2
                ? "bg-[#b64d26]"
                : "bg-[#d8c1a9]"
            }`}
          />


          {/* STEP 2 */}

          <div className="flex items-center gap-4">

            <div
              className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border font-serif text-[16px] font-semibold transition-all duration-300 ${
                currentStep === 2
                  ? "border-[#b64d26] bg-[#b64d26] text-white shadow-[0_5px_15px_rgba(182,77,38,0.18)]"
                  : "border-[#d7c0a8] bg-[#fffaf2] text-[#917b6d]"
              }`}
            >
              2
            </div>

            <div>

              <h3
                className={`font-semibold ${
                  currentStep === 2
                    ? "text-[#492316]"
                    : "text-[#917b6d]"
                }`}
              >
                Business Details
              </h3>

              <p className="mt-1 text-[12px] text-[#9d8778]">
                Tell us about your craft
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          FORM AREA
      ========================================= */}

      <div className="pb-10">

        {currentStep === 1 && (
          <SellerAccountForm
            onNext={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <SellerBusinessForm
            onBack={() => setCurrentStep(1)}
          />
        )}

      </div>


      {/* =========================================
          HERITAGE MESSAGE
      ========================================= */}

      <section className="mx-auto max-w-[800px] px-5 pb-16 pt-12 text-center">

        <div className="flex items-center justify-center gap-5">

          <span className="h-px w-16 bg-[#c9a16f]" />

          <span className="text-[#b64d26]">
            ✦
          </span>

          <span className="h-px w-16 bg-[#c9a16f]" />

        </div>


        <h3 className="mt-7 font-serif text-[25px] leading-[1.7] text-[#4b2418]">

          বাংলার হাতের ছোঁয়ায়,
          <br />
          ঘরে ঘরে ছড়িয়ে পড়ুক ভালোবাসার ছোঁয়া।

        </h3>


        <p className="mt-5 font-serif text-[17px] italic leading-7 text-[#b8522c]">

          Every craft carries a story.
          <br />
          Let your story travel beyond Bengal.

        </p>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="border-t border-[#dcc9b5] px-5 py-7 text-center">

        <p className="text-[12px] text-[#967d6d]">
          © 2026 SILPAM. Preserving Bengal's Craft,
          One Artisan at a Time.
        </p>

      </footer>

    </main>
  );
}

export default SellerRegister;