import kolka from "../assets/kolka.png";

function ProductSection() {
  const products = [
    { name: "Terracotta Vase", price: "₹899" },
    { name: "Terracotta Vase", price: "₹899" },
    { name: "Kantha & Textiles", price: "₹899" },
    { name: "Kantha & Textiles", price: "₹55" },
    { name: "Terracotta Vase", price: "₹899" },

    { name: "Kantha & Textiles", price: "₹55" },
    { name: "Terracotta Vase", price: "₹899" },
    { name: "Terracotta Vase", price: "₹899" },
    { name: "Woodcraft", price: "₹55" },
    { name: "Home Décor", price: "₹55" },
  ];

  return (
    <section className="bg-[#f8edda] px-12 py-7">

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto overflow-hidden rounded-xl border border-[#d8b99c] bg-[#fffaf0] px-10 pb-14 pt-9">

        {/* INNER THIN BORDER */}
        <div className="pointer-events-none absolute inset-[10px] rounded-lg border border-[#e7cdb4]" />


        {/* =========================
            TOP LEFT KOLKA
        ========================== */}
        <img
          src={kolka}
          alt=""
          className="
            pointer-events-none
            absolute
            left-[-10px]
            top-[18px]
            z-20
            w-[200px]
            h-auto
          "
        />


        {/* =========================
            TOP RIGHT KOLKA
        ========================== */}
        <img
          src={kolka}
          alt=""
          className="
            pointer-events-none
            absolute
            right-[-10px]
            top-[18px]
            z-20
            w-[200px]
            h-auto
            -scale-x-100
          "
        />


        {/* =========================
            BOTTOM LEFT KOLKA
        ========================== */}
        <img
          src={kolka}
          alt=""
          className="
            pointer-events-none
            absolute
            left-[-10px]
            bottom-[18px]
            z-20
            w-[200px]
            h-auto
            -scale-y-100
          "
        />


        {/* =========================
            BOTTOM RIGHT KOLKA
        ========================== */}
        <img
          src={kolka}
          alt=""
          className="
            pointer-events-none
            absolute
            right-[-10px]
            bottom-[18px]
            z-20
            w-[200px]
            h-auto
            scale-[-1]
          "
        />


        {/* =========================
            SECTION TITLE
        ========================== */}
        <div className="relative z-30 mb-4 flex items-center justify-center gap-4">

          <span className="text-[18px] text-[#bd431c]">
            ✦
          </span>

          <h2 className="m-0 font-serif text-[32px] font-medium text-[#4a2119]">
            Popular Products
          </h2>

          <span className="text-[18px] text-[#bd431c]">
            ✦
          </span>

        </div>


        {/* =========================
            PRODUCT GRID
        ========================== */}
        <div className="relative z-30 mx-20 grid grid-cols-5 gap-x-7 gap-y-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#dfc5a9]
                bg-[#fff7e9]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              {/* IMAGE PLACEHOLDER */}
              <div className="flex h-[245px] w-full items-center justify-center bg-[#ead8bb]">
                <span className="font-serif text-[18px] text-[#b69a7b]">
                  Image Here
                </span>
              </div>


              {/* PRODUCT DETAILS */}
              <div className="px-5 py-5">

                <h3 className="text-center font-serif text-[21px] leading-tight text-[#4a2119]">
                  {product.name}
                </h3>


                <div className="mt-5 flex items-center justify-between">

                  <span className="font-serif text-[19px] text-[#a84b27]">
                    {product.price}
                  </span>

                  <button
                    type="button"
                    className="
                      font-serif
                      text-[16px]
                      text-[#b8522c]
                      transition-transform
                      duration-300
                      hover:translate-x-1
                    "
                  >
                    Explore →
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductSection;