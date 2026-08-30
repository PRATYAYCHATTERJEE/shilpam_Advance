import { useState } from "react";

function SellerAccountForm({ onNext }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please agree to the Terms of Use and Privacy Policy.");
      return;
    }

    onNext();
  };

  return (
    <section className="mx-auto w-full max-w-[1250px] px-5 py-12">

      {/* FORM CARD */}
      <div className="rounded-[24px] border border-[#dfc8b0] bg-[#fffaf2] p-2 shadow-[0_12px_35px_rgba(80,45,25,0.06)]">

        <div className="rounded-[18px] border border-[#ead9c6] px-7 py-10 sm:px-10 lg:px-14">

          {/* TITLE */}
          <div className="text-center">

            <p className="text-[10px] font-semibold tracking-[4px] text-[#b64d26]">
              STEP 01
            </p>

            <h2 className="mt-4 font-serif text-[34px] font-semibold text-[#482016] sm:text-[40px]">
              Create your seller account
            </h2>

            <p className="mt-2 font-serif text-[15px] text-[#927766]">
              Start your journey with SILPAM.
            </p>

          </div>


          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-[1100px]"
          >

            {/* EMAIL */}
            <div>

              <label
                htmlFor="sellerEmail"
                className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
              >
                Email Address
                <span className="ml-1 text-[#b64d26]">
                  *
                </span>
              </label>

              <div className="flex h-[58px] overflow-hidden rounded-[10px] border border-[#dcc5ad] bg-[#eef3fb] transition-all duration-300 focus-within:border-[#b64d26] focus-within:ring-2 focus-within:ring-[#b64d26]/10">

                <div className="flex w-[56px] shrink-0 items-center justify-center border-r border-[#ddd0c2] bg-[#fffaf3] text-[17px] text-[#88776c]">
                  ✉
                </div>

                <input
                  id="sellerEmail"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="h-full w-full bg-transparent px-4 text-[15px] text-[#32170f] outline-none placeholder:text-[#a79789]"
                />

              </div>

            </div>


            {/* PASSWORD ROW */}
            <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2">

              {/* CREATE PASSWORD */}

              <div>

                <label
                  htmlFor="sellerPassword"
                  className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
                >
                  Create Password
                  <span className="ml-1 text-[#b64d26]">
                    *
                  </span>
                </label>

                <div className="relative">

                  <input
                    id="sellerPassword"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    required
                    className="h-[58px] w-full rounded-[10px] border border-[#dcc5ad] bg-[#eef3fb] px-4 pr-12 text-[15px] text-[#32170f] outline-none transition-all duration-300 placeholder:text-[#a79789] focus:border-[#b64d26] focus:ring-2 focus:ring-[#b64d26]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[16px] text-[#88776c] transition-colors hover:text-[#b64d26]"
                  >
                    ◉
                  </button>

                </div>

              </div>


              {/* CONFIRM PASSWORD */}

              <div>

                <label
                  htmlFor="sellerConfirmPassword"
                  className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
                >
                  Confirm Password
                  <span className="ml-1 text-[#b64d26]">
                    *
                  </span>
                </label>

                <div className="relative">

                  <input
                    id="sellerConfirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    required
                    className="h-[58px] w-full rounded-[10px] border border-[#dcc5ad] bg-[#fffaf3] px-4 pr-12 text-[15px] text-[#32170f] outline-none transition-all duration-300 placeholder:text-[#a79789] focus:border-[#b64d26] focus:ring-2 focus:ring-[#b64d26]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[16px] text-[#88776c] transition-colors hover:text-[#b64d26]"
                  >
                    ◉
                  </button>

                </div>

              </div>

            </div>


            {/* TERMS */}

            <div className="mt-7 flex items-start gap-3">

              <input
                id="sellerTerms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) =>
                  setAgreeTerms(e.target.checked)
                }
                className="mt-[2px] h-4 w-4 shrink-0 cursor-pointer accent-[#b64d26]"
              />

              <label
                htmlFor="sellerTerms"
                className="cursor-pointer text-[13px] leading-5 text-[#80695a]"
              >
                I agree to SILPAM's{" "}
                <span className="font-semibold text-[#b64d26]">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#b64d26]">
                  Privacy Policy
                </span>
              </label>

            </div>


            {/* CONTINUE */}

            <div className="mt-9 flex justify-center">

              <button
                type="submit"
                className="
                  flex
                  min-w-[340px]
                  items-center
                  justify-center
                  gap-4
                  rounded-[10px]
                  bg-[#b64d26]
                  px-8
                  py-4
                  font-serif
                  text-[17px]
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(182,77,38,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-[#9f3f1f]
                  hover:shadow-[0_12px_25px_rgba(182,77,38,0.25)]
                  active:translate-y-0
                "
              >
                Continue to Business Details

                <span className="text-[21px]">
                  →
                </span>

              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}

export default SellerAccountForm;