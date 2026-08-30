import { useState } from "react";
import kolka from "../assets/kolka.png";
import logo from "../assets/logo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login functionality will be connected later
    console.log("Login submitted");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8edda] px-5 py-8">

      {/* =================================
          DECORATIVE KOLKA
      ================================= */}

      {/* Top Left */}
      <img
        src={kolka}
        alt=""
        className="pointer-events-none absolute left-5 top-5 w-[125px]"
      />

      {/* Top Right */}
      <img
        src={kolka}
        alt=""
        className="pointer-events-none absolute right-5 top-5 w-[125px] -scale-x-100"
      />

      {/* Bottom Left */}
      <img
        src={kolka}
        alt=""
        className="pointer-events-none absolute bottom-5 left-5 w-[125px] -scale-y-100"
      />

      {/* Bottom Right */}
      <img
        src={kolka}
        alt=""
        className="pointer-events-none absolute bottom-5 right-5 w-[125px] scale-[-1]"
      />

      {/* =================================
          BRAND HEADER
      ================================= */}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">

        <div className="mb-1 text-[20px] text-[#bd431c]">
          ✦
        </div>

        <div className="flex items-center justify-center">

          <img
            src={logo}
            alt="Silpam"
            className="h-[65px] w-[65px] object-contain"
          />

        </div>

        <h1 className="mt-2 font-serif text-[42px] font-medium tracking-[8px] text-[#35170f]">
          SILPAM
        </h1>

        <p className="mt-0 font-serif text-[15px] text-[#914326]">
          A Piece of Bengal, Made for You.
        </p>

      </div>

      {/* =================================
          LOGIN CARD
      ================================= */}

      <div className="relative z-10 mx-auto mt-7 w-full max-w-[530px] rounded-[22px] border border-[#dfc7ad] bg-[#fffaf1] p-[9px] shadow-[0_10px_35px_rgba(101,55,29,0.08)]">

        {/* Inner Border */}
        <div className="rounded-[16px] border border-[#ead9c5] px-9 py-8 sm:px-10">

          {/* Heading */}
          <div className="text-center">

            <div className="flex items-center justify-center gap-3">

              <span className="text-[15px] text-[#bd431c]">
                ✦
              </span>

              <h2 className="font-serif text-[32px] font-medium text-[#3d1c14]">
                Welcome Back
              </h2>

              <span className="text-[15px] text-[#bd431c]">
                ✦
              </span>

            </div>

            <p className="mt-1 font-serif text-[16px] text-[#8c4930]">
              Continue your journey with Silpam
            </p>

          </div>

          {/* =================================
              FORM
          ================================= */}

          <form
            onSubmit={handleSubmit}
            className="mt-8"
          >

            {/* Email */}
            <div>

              <label
                htmlFor="email"
                className="mb-2 block text-[14px] font-semibold text-[#4a2119]"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                required
                className="
                  h-[54px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#d9c4ad]
                  bg-[#eef3fb]
                  px-4
                  text-[15px]
                  text-[#32170f]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#9b8d81]
                  focus:border-[#bd552c]
                  focus:ring-2
                  focus:ring-[#bd552c]/10
                "
              />

            </div>

            {/* Password */}
            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between">

                <label
                  htmlFor="password"
                  className="text-[14px] font-semibold text-[#4a2119]"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="font-serif text-[13px] text-[#b44b27] transition-colors hover:text-[#7d2f18]"
                >
                  Forgot password?
                </button>

              </div>

              <div className="relative">

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="
                    h-[54px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#d9c4ad]
                    bg-[#eef3fb]
                    px-4
                    pr-12
                    text-[15px]
                    text-[#32170f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#9b8d81]
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
                    text-[16px]
                    text-[#8b5c47]
                    transition-colors
                    hover:text-[#bd431c]
                  "
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "◉" : "◉"}
                </button>

              </div>

            </div>

            {/* Remember Me */}
            <div className="mt-5 flex items-center gap-2">

              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 accent-[#bd552c]"
              />

              <label
                htmlFor="remember"
                className="cursor-pointer text-[14px] text-[#6d4535]"
              >
                Remember me
              </label>

            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="
                mt-6
                flex
                h-[56px]
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
              Sign In
              <span className="text-[20px]">
                →
              </span>
            </button>

            {/* Divider */}
            <div className="my-7 flex items-center gap-3">

              <div className="h-px flex-1 bg-[#e4d3bf]" />

              <span className="font-serif text-[14px] text-[#9a654d]">
                or
              </span>

              <div className="h-px flex-1 bg-[#e4d3bf]" />

            </div>

            {/* Create Account */}
            <p className="text-center text-[14px] text-[#805645]">

              Don't have an account?

              <button
                type="button"
                className="ml-2 font-medium text-[#b44b27] transition-colors hover:text-[#7d2f18]"
              >
                Create an account
              </button>

            </p>

          </form>

        </div>

      </div>

    </main>
  );
}

export default Login;