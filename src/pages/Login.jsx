import { useState } from "react";

import kolka from "../assets/kolka.png";
import logo from "../assets/logo.png";

function Login({
  onBack,
  onSignup,
  onLoginSuccess,
}) {
  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  // =========================
  // FORM DATA
  // =========================

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // =========================
  // UI STATES
  // =========================

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  // =========================
  // HANDLE LOGIN
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: formData.email.trim(),
            password: formData.password,
            rememberMe,
          }),
        }
      );

      const data = await response.json();

      // =========================
      // API ERROR
      // =========================

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed"
        );
      }

      // =========================
      // VALID RESPONSE CHECK
      // =========================

      if (!data.token || !data.user) {
        throw new Error(
          "Login response is incomplete"
        );
      }

      // =========================
      // SAVE TOKEN
      // =========================

      localStorage.setItem(
        "shilpamToken",
        data.token
      );

      // =========================
      // SAVE USER
      // =========================

      localStorage.setItem(
        "shilpamUser",
        JSON.stringify(data.user)
      );

      console.log(
        "Login successful:",
        data.user
      );

      // =========================
      // INFORM APP.JSX
      // =========================

      if (onLoginSuccess) {
        onLoginSuccess(data.user);
      }

      // =========================
      // CLEAR FORM
      // =========================

      setFormData({
        email: "",
        password: "",
      });

      // Reset checkbox
      setRememberMe(false);

    } catch (error) {
      console.error(
        "Login Error:",
        error
      );

      setError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8edda] px-5 py-8">

      {/* =================================
          DECORATIVE KOLKA
      ================================= */}

      {/* TOP LEFT */}

      <img
        src={kolka}
        alt=""
        className="
          pointer-events-none
          absolute
          left-5
          top-5
          w-[125px]
        "
      />

      {/* TOP RIGHT */}

      <img
        src={kolka}
        alt=""
        className="
          pointer-events-none
          absolute
          right-5
          top-5
          w-[125px]
          -scale-x-100
        "
      />

      {/* BOTTOM LEFT */}

      <img
        src={kolka}
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-5
          left-5
          w-[125px]
          -scale-y-100
        "
      />

      {/* BOTTOM RIGHT */}

      <img
        src={kolka}
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-5
          right-5
          w-[125px]
          scale-[-1]
        "
      />

      {/* =================================
          BACK BUTTON
      ================================= */}

      <button
        type="button"
        onClick={onBack}
        className="
          absolute
          left-8
          top-7
          z-20
          font-serif
          text-[14px]
          text-[#8c4930]
          transition-colors
          duration-300
          hover:text-[#b44b27]
        "
      >
        ← Back
      </button>

      {/* =================================
          BRAND HEADER
      ================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-5xl
          flex-col
          items-center
        "
      >
        <div
          className="
            mb-1
            text-[20px]
            text-[#bd431c]
          "
        >
          ✦
        </div>

        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Silpam"
            className="
              h-[65px]
              w-[65px]
              object-contain
            "
          />
        </div>

        <h1
          className="
            mt-2
            font-serif
            text-[42px]
            font-medium
            tracking-[8px]
            text-[#35170f]
          "
        >
          SILPAM
        </h1>

        <p
          className="
            mt-0
            font-serif
            text-[15px]
            text-[#914326]
          "
        >
          A Piece of Bengal, Made for You.
        </p>
      </div>

      {/* =================================
          LOGIN CARD
      ================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-7
          w-full
          max-w-[530px]
          rounded-[22px]
          border
          border-[#dfc7ad]
          bg-[#fffaf1]
          p-[9px]
          shadow-[0_10px_35px_rgba(101,55,29,0.08)]
        "
      >
        {/* INNER BORDER */}

        <div
          className="
            rounded-[16px]
            border
            border-[#ead9c5]
            px-9
            py-8
            sm:px-10
          "
        >

          {/* =================================
              HEADING
          ================================= */}

          <div className="text-center">

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span
                className="
                  text-[15px]
                  text-[#bd431c]
                "
              >
                ✦
              </span>

              <h2
                className="
                  font-serif
                  text-[32px]
                  font-medium
                  text-[#3d1c14]
                "
              >
                Welcome Back
              </h2>

              <span
                className="
                  text-[15px]
                  text-[#bd431c]
                "
              >
                ✦
              </span>
            </div>

            <p
              className="
                mt-1
                font-serif
                text-[16px]
                text-[#8c4930]
              "
            >
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

            {/* =================================
                EMAIL
            ================================= */}

            <div>

              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  text-[14px]
                  font-semibold
                  text-[#4a2119]
                "
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
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

            {/* =================================
                PASSWORD
            ================================= */}

            <div className="mt-6">

              <div
                className="
                  mb-2
                  flex
                  items-center
                  justify-between
                "
              >

                <label
                  htmlFor="password"
                  className="
                    text-[14px]
                    font-semibold
                    text-[#4a2119]
                  "
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setError(
                      "Password reset will be added soon."
                    );
                  }}
                  className="
                    font-serif
                    text-[13px]
                    text-[#b44b27]
                    transition-colors
                    hover:text-[#7d2f18]
                  "
                >
                  Forgot password?
                </button>

              </div>

              <div className="relative">

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
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
                  onClick={() =>
                    setShowPassword(
                      (previous) =>
                        !previous
                    )
                  }
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
                  ◉
                </button>

              </div>
            </div>

            {/* =================================
                REMEMBER ME
            ================================= */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
              "
            >
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(
                    e.target.checked
                  )
                }
                className="
                  h-4
                  w-4
                  accent-[#bd552c]
                "
              />

              <label
                htmlFor="remember"
                className="
                  cursor-pointer
                  text-[14px]
                  text-[#6d4535]
                "
              >
                Remember me
              </label>
            </div>

            {/* =================================
                ERROR MESSAGE
            ================================= */}

            {error && (
              <div
                className="
                  mt-4
                  rounded-[8px]
                  border
                  border-red-200
                  bg-red-50
                  px-4
                  py-3
                  text-center
                  text-[13px]
                  text-red-700
                "
              >
                {error}
              </div>
            )}

            {/* =================================
                SIGN IN
            ================================= */}

            <button
              type="submit"
              disabled={loading}
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
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading
                ? "Signing In..."
                : "Sign In"}

              {!loading && (
                <span className="text-[20px]">
                  →
                </span>
              )}
            </button>

            {/* =================================
                DIVIDER
            ================================= */}

            <div
              className="
                my-7
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-px
                  flex-1
                  bg-[#e4d3bf]
                "
              />

              <span
                className="
                  font-serif
                  text-[14px]
                  text-[#9a654d]
                "
              >
                or
              </span>

              <div
                className="
                  h-px
                  flex-1
                  bg-[#e4d3bf]
                "
              />
            </div>

            {/* =================================
                CREATE ACCOUNT
            ================================= */}

            <p
              className="
                text-center
                text-[14px]
                text-[#805645]
              "
            >
              Don't have an account?

              <button
                type="button"
                onClick={onSignup}
                className="
                  ml-2
                  font-medium
                  text-[#b44b27]
                  transition-colors
                  hover:text-[#7d2f18]
                "
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