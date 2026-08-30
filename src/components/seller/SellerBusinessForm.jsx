function SellerBusinessForm({ onBack, onSubmit }) {
  return (
    <section className="mx-auto w-full max-w-[1250px] px-5 py-12">

      {/* =========================================
          FORM CARD
      ========================================= */}

      <div className="rounded-[24px] border border-[#dfc8b0] bg-[#fffaf2] p-2 shadow-[0_12px_35px_rgba(80,45,25,0.06)]">

        <div className="rounded-[18px] border border-[#ead9c6] px-7 py-10 sm:px-10 lg:px-14">

          {/* =========================================
              HEADING
          ========================================= */}

          <div className="text-center">

            <p className="text-[10px] font-semibold tracking-[4px] text-[#b64d26]">
              STEP 02
            </p>

            <h2 className="mt-4 font-serif text-[34px] font-semibold text-[#482016] sm:text-[40px]">
              Tell us about your craft
            </h2>

            <p className="mt-2 font-serif text-[15px] text-[#927766]">
              Help us understand the story behind your creations.
            </p>

          </div>


          {/* =========================================
              FORM
          ========================================= */}

          <form className="mx-auto mt-10 max-w-[1100px]">

            {/* =====================================
                FULL NAME + BUSINESS NAME
            ===================================== */}

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

              {/* Full Name */}

              <div>

                <label
                  htmlFor="fullName"
                  className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
                >
                  Full Name
                  <span className="ml-1 text-[#b64d26]">*</span>
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="
                    h-[58px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#dcc5ad]
                    bg-[#fffaf3]
                    px-4
                    text-[15px]
                    text-[#32170f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#a79789]
                    focus:border-[#b64d26]
                    focus:ring-2
                    focus:ring-[#b64d26]/10
                  "
                />

              </div>


              {/* Business Name */}

              <div>

                <label
                  htmlFor="businessName"
                  className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
                >
                  Business / Artisan Group Name
                  <span className="ml-1 text-[#b64d26]">*</span>
                </label>

                <input
                  id="businessName"
                  type="text"
                  placeholder="Enter your business or group name"
                  className="
                    h-[58px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#dcc5ad]
                    bg-[#fffaf3]
                    px-4
                    text-[15px]
                    text-[#32170f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#a79789]
                    focus:border-[#b64d26]
                    focus:ring-2
                    focus:ring-[#b64d26]/10
                  "
                />

              </div>

            </div>


            {/* =====================================
                PHONE + EMAIL
            ===================================== */}

            <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2">

              {/* Phone */}

              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
                >
                  Phone Number
                  <span className="ml-1 text-[#b64d26]">*</span>
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="
                    h-[58px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#dcc5ad]
                    bg-[#fffaf3]
                    px-4
                    text-[15px]
                    text-[#32170f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#a79789]
                    focus:border-[#b64d26]
                    focus:ring-2
                    focus:ring-[#b64d26]/10
                  "
                />

              </div>


              {/* Email */}

              <div>

                <label
                  htmlFor="businessEmail"
                  className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
                >
                  Email Address
                  <span className="ml-1 text-[#b64d26]">*</span>
                </label>

                <input
                  id="businessEmail"
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    h-[58px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#dcc5ad]
                    bg-[#eef3fb]
                    px-4
                    text-[15px]
                    text-[#32170f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#a79789]
                    focus:border-[#b64d26]
                    focus:ring-2
                    focus:ring-[#b64d26]/10
                  "
                />

              </div>

            </div>


            {/* =====================================
                LOCATION + CATEGORY
            ===================================== */}

            <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2">

              {/* Location */}

              <div>

                <label
                  htmlFor="location"
                  className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
                >
                  Location
                  <span className="ml-1 text-[#b64d26]">*</span>
                </label>

                <input
                  id="location"
                  type="text"
                  placeholder="City / District / State"
                  className="
                    h-[58px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#dcc5ad]
                    bg-[#fffaf3]
                    px-4
                    text-[15px]
                    text-[#32170f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#a79789]
                    focus:border-[#b64d26]
                    focus:ring-2
                    focus:ring-[#b64d26]/10
                  "
                />

              </div>


              {/* Craft Category */}

              <div>

                <label
                  htmlFor="craftCategory"
                  className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
                >
                  Craft Category
                  <span className="ml-1 text-[#b64d26]">*</span>
                </label>

                <select
                  id="craftCategory"
                  defaultValue=""
                  className="
                    h-[58px]
                    w-full
                    rounded-[10px]
                    border
                    border-[#dcc5ad]
                    bg-[#fffaf3]
                    px-4
                    text-[15px]
                    text-[#684838]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#b64d26]
                    focus:ring-2
                    focus:ring-[#b64d26]/10
                  "
                >

                  <option value="" disabled>
                    Select your craft category
                  </option>

                  <option>Terracotta</option>
                  <option>Art Works</option>
                  <option>Bamboo & Cane</option>
                  <option>Dokra & Metal</option>
                  <option>Woodcraft</option>
                  <option>Home Décor</option>
                  <option>Jewellery</option>
                  <option>Bags & Accessories</option>
                  <option>Hand Embroidery</option>

                </select>

              </div>

            </div>


            {/* =====================================
                EXPERIENCE
            ===================================== */}

            <div className="mt-7 max-w-[calc(50%-14px)]">

              <label
                htmlFor="experience"
                className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
              >
                Years of Experience
                <span className="ml-1 text-[#b64d26]">*</span>
              </label>

              <select
                id="experience"
                defaultValue=""
                className="
                  h-[58px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#dcc5ad]
                  bg-[#fffaf3]
                  px-4
                  text-[15px]
                  text-[#684838]
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#b64d26]
                  focus:ring-2
                  focus:ring-[#b64d26]/10
                "
              >

                <option value="" disabled>
                  Select years of experience
                </option>

                <option>Less than 1 year</option>
                <option>1–3 years</option>
                <option>3–5 years</option>
                <option>5–10 years</option>
                <option>10–20 years</option>
                <option>20+ years</option>

              </select>

            </div>


            {/* =====================================
                CRAFT STORY
            ===================================== */}

            <div className="mt-7">

              <label
                htmlFor="craftStory"
                className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]"
              >
                Tell us about your craft
                <span className="ml-1 text-[#b64d26]">*</span>
              </label>

              <textarea
                id="craftStory"
                rows="6"
                placeholder="Tell us about your craft, your techniques, traditions, materials, and the story behind your work..."
                className="
                  min-h-[170px]
                  w-full
                  resize-none
                  rounded-[10px]
                  border
                  border-[#dcc5ad]
                  bg-[#fffaf3]
                  px-5
                  py-4
                  text-[15px]
                  leading-6
                  text-[#32170f]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#a79789]
                  focus:border-[#b64d26]
                  focus:ring-2
                  focus:ring-[#b64d26]/10
                "
              />

            </div>


            {/* =====================================
                PRODUCT PHOTOS
            ===================================== */}

            <div className="mt-7">

              <label className="mb-2 block text-[14px] font-semibold text-[#4b2a1e]">
                Product Photos
              </label>

              <div className="flex min-h-[190px] cursor-pointer flex-col items-center justify-center rounded-[12px] border border-dashed border-[#cfb08f] bg-[#fffaf3] px-5 transition-all duration-300 hover:border-[#b64d26] hover:bg-[#fff8ef]">

                {/* Upload icon */}

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3e3cd] text-[22px] text-[#80533d]">
                  ↑
                </div>

                <p className="text-[14px] text-[#80695a]">

                  <span className="font-semibold text-[#4b2a1e]">
                    Click to upload
                  </span>

                  {" "}or drag and drop

                </p>

                <p className="mt-2 text-[11px] text-[#a38d7d]">
                  JPG, PNG · Max 10MB per image
                </p>

              </div>

            </div>


            {/* =====================================
                BUTTONS
            ===================================== */}

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

              {/* Back */}

             <button
  type="button"
  onClick={onBack}
  className="
    rounded-[10px]
    border
    border-[#d5bda5]
    bg-[#fffaf3]
    px-8
    py-4
    font-serif
    text-[16px]
    font-semibold
    text-[#704b39]
    transition-all
    duration-300
    hover:border-[#b64d26]
    hover:text-[#b64d26]
  "
>
  ← Back
</button>


              {/* Submit */}

              <button
  type="button"
  onClick={onSubmit}
  className="
    flex
    items-center
    justify-center
    gap-3
    rounded-[10px]
    bg-[#b64d26]
    px-9
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
  Submit Partnership Request

  <span className="text-[20px]">
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

export default SellerBusinessForm;