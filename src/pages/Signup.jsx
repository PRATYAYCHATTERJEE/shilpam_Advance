import { useState } from "react";
import kolka from "../assets/kolka.png";

function Signup({ onBack, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    console.log("Signup submitted");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8edda] px-5 py-8">

      {/* =========================================
          TOP LEFT KOLKA
      ========================================== */}

      <img
        src={kolka}
        alt=""
        className="pointer-events-none absolute left-5 top-5 w-[125px]"
      />

      {/* =========================================
          TOP RIGHT KOLKA
      ========================================== */}

      <img
        src={kolka}
        alt=""
        className="pointer-events-none absolute right-5 top-5 w-[125px] -scale-x-100"
      />

      {/* =========================================
          BOTTOM LEFT KOLKA
      ========================================== */}

      <img
        src={kolka}
        alt=""
        className="pointer-events-none absolute bottom-5 left-5 w-[125px] -scale-y-100"
      />

      {/* =========================================
          BOTTOM RIGHT KOLKA
      ========================================== */}

      <img
        src={kolka}
        alt=""
        className="pointer-events-none absolute bottom-5 right-5 w-[125px] scale-[-1]"
      />

      {/* =========================================
          BRAND
      ========================================== */}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">

        <div className="mb-1 text-[20px] text-[#bd431c]">
          ✦
        </div>

        <h1 className="font-serif text-[42px] font-medium tracking-[8px] text-[#35170f]">
          SILPAM
        </h1>

        <p className="font-serif text-[15px] text-[#914326]">
          A Piece of Bengal, Made for You.
        </p>

      </div>

      {/* =========================================
          SIGNUP CARD
      ========================================== */}

      <div className="relative z-10 mx-auto mt-7 w-full max-w-[565px] rounded-[22px] border border-[#dfc7ad] bg-[#fffaf1] p-[9px] shadow-[0_10px_35px_rgba(101,55,29,0.08)]">

        {/* INNER BORDER */}

        <div className="rounded-[16px] border border-[#ead9c5] px-9 py-8 sm:px-10">

          {/* =====================================
              HEADER
          ====================================== */}

          <div className="text-center">

            <div className="flex items-center justify-center gap-3">

              <span className="text-[15px] text-[#bd431c]">
                ✦
              </span>

              <h2 className="font-serif text-[30px] font-medium text-[#3d1c14]">
                Create Your Account
              </h2>

              <span className="text-[15px] text-[#bd431c]">
                ✦
              </span>

            </div>

            <p className="mt-1 font-serif text-[16px] text-[#8c4930]">
              Join the Silpam community
            </p>

          </div>

          {/* =====================================
              FORM
          ====================================== */}

          <form
            onSubmit={handleSubmit}
            className="mt-8"
          >

            {/* FULL NAME */}

            <div>

              <label
                htmlFor="fullName"
                className="mb-2 block text-[14px] font-semibold text-[#4a2119]"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                required
                className="
                  h-[54px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#e2cdb8]
                  bg-[#fffaf3]
                  px-4
                  text-[15px]
                  text-[#32170f]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#b69782]
                  focus:border-[#bd552c]
                  focus:ring-2
                  focus:ring-[#bd552c]/10
                "
              />

            </div>

            {/* EMAIL */}

            <div className="mt-5">

              <label
                htmlFor="signupEmail"
                className="mb-2 block text-[14px] font-semibold text-[#4a2119]"
              >
                Email Address
              </label>

              <input
                id="signupEmail"
                type="email"
                placeholder="Enter your email"
                required
                className="
                  h-[54px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#e2cdb8]
                  bg-[#fffaf3]
                  px-4
                  text-[15px]
                  text-[#32170f]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#b69782]
                  focus:border-[#bd552c]
                  focus:ring-2
                  focus:ring-[#bd552c]/10
                "
              />

            </div>

            {/* PHONE */}

            <div className="mt-5">

              <label
                htmlFor="phone"
                className="mb-2 block text-[14px] font-semibold text-[#4a2119]"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
                className="
                  h-[54px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#e2cdb8]
                  bg-[#fffaf3]
                  px-4
                  text-[15px]
                  text-[#32170f]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#b69782]
                  focus:border-[#bd552c]
                  focus:ring-2
                  focus:ring-[#bd552c]/10
                "
              />

            </div>

            {/* PASSWORD */}

            <div className="mt-5">

              <label
                htmlFor="signupPassword"
                className="mb-2 block text-[14px] font-semibold text-[#4a2119]"
              >
                Password
              </label>

              <div className="relative">

                <input
                  id="signupPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  required
                  className="
                    h-[54px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#e2cdb8]
                    bg-[#fffaf3]
                    px-4
                    pr-12
                    text-[15px]
                    text-[#32170f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#b69782]
                    focus:border-[#bd552c]
                    focus:ring-2
                    focus:ring-[#bd552c]/10
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[14px]
                    text-[#8b5c47]
                    hover:text-[#bd431c]
                  "
                  aria-label="Toggle password visibility"
                >
                  ◉
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div className="mt-5">

              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-[14px] font-semibold text-[#4a2119]"
              >
                Confirm Password
              </label>

              <div className="relative">

                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  required
                  className="
                    h-[54px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#e2cdb8]
                    bg-[#fffaf3]
                    px-4
                    pr-12
                    text-[15px]
                    text-[#32170f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#b69782]
                    focus:border-[#bd552c]
                    focus:ring-2
                    focus:ring-[#bd552c]/10
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[14px]
                    text-[#8b5c47]
                    hover:text-[#bd431c]
                  "
                  aria-label="Toggle confirm password visibility"
                >
                  ◉
                </button>

              </div>

            </div>

            {/* TERMS */}

            <div className="mt-5 flex items-center gap-2">

              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 accent-[#ae4b27]"
              />

              <label
                htmlFor="terms"
                className="cursor-pointer text-[13px] text-[#744b3a]"
              >
                I agree to the{" "}
                <button
                  type="button"
                  className="text-[#b44b27] hover:underline"
                >
                  Terms & Conditions
                </button>
              </label>

            </div>

            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="
                mt-6
                flex
                h-[57px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-[10px]
                bg-[#ae4b27]
                font-serif
                text-[18px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#963d1e]
                hover:shadow-md
                active:scale-[0.99]
              "
            >
              Create Account
              <span className="text-[20px]">
                →
              </span>
            </button>

            {/* DIVIDER */}

            <div className="my-7 flex items-center gap-3">

              <div className="h-px flex-1 bg-[#e4d3bf]" />

              <span className="font-serif text-[14px] text-[#9a654d]">
                or
              </span>

              <div className="h-px flex-1 bg-[#e4d3bf]" />

            </div>

            {/* LOGIN */}

            <p className="text-center text-[14px] text-[#805645]">

              Already have an account?

              <button
                type="button"
                onClick={onLogin}
                className="ml-2 font-medium text-[#b44b27] transition-colors hover:text-[#7d2f18]"
              >
                Sign in
              </button>

            </p>

          </form>

        </div>

      </div>

      {/* =========================================
          FOOTER
      ========================================== */}

      <div className="relative z-10 mt-6 flex items-center justify-center gap-3 font-serif text-[13px] text-[#9a6048]">

        <span className="text-[#bd431c]">
          ❖
        </span>

        <span>
          Handcrafted with the spirit of Bengal
        </span>

        <span className="text-[#bd431c]">
          ❖
        </span>

      </div>

    </main>
  );
}

export default Signup;