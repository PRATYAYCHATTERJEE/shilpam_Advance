import kolka from "../../assets/kolka.png";

import product1 from "../../assets/bag1.png";
import product2 from "../../assets/bag2.png";
import product3 from "../../assets/bag3.png";
import product4 from "../../assets/bag4.png";
import product5 from "../../assets/bag5.png";
import product6 from "../../assets/bag6.png";
import product7 from "../../assets/bag7.png";
import product8 from "../../assets/bag8.png";
import product9 from "../../assets/bag9.png";
import product10 from "../../assets/bag10.png";

function DokraMetal() {
  const products = [
    {
      name: "Dokra Metal Figurine",
      price: "₹899",
      image: product1,
    },
    {
      name: "Traditional Dokra Art",
      price: "₹999",
      image: product2,
    },
    {
      name: "Dokra Decorative Piece",
      price: "₹799",
      image: product3,
    },
    {
      name: "Handcrafted Metal Art",
      price: "₹899",
      image: product4,
    },
    {
      name: "Dokra Tribal Figurine",
      price: "₹1,099",
      image: product5,
    },
    {
      name: "Dokra Craft Sculpture",
      price: "₹899",
      image: product6,
    },
    {
      name: "Traditional Metal Figurine",
      price: "₹749",
      image: product7,
    },
    {
      name: "Dokra Home Decor",
      price: "₹999",
      image: product8,
    },
    {
      name: "Bengal Dokra Artwork",
      price: "₹1,199",
      image: product9,
    },
    {
      name: "Handmade Dokra Sculpture",
      price: "₹899",
      image: product10,
    },
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
            h-auto
            w-[200px]
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
            h-auto
            w-[200px]
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
            bottom-[18px]
            left-[-10px]
            z-20
            h-auto
            w-[200px]
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
            bottom-[18px]
            right-[-10px]
            z-20
            h-auto
            w-[200px]
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
            Dokra & Metal
          </h2>

          <span className="text-[18px] text-[#bd431c]">
            ✦
          </span>

        </div>


        {/* =========================
            PRODUCT GRID
        ========================== */}

        <div className="relative z-30 mx-16 grid grid-cols-5 gap-x-7 gap-y-8">

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

              {/* PRODUCT IMAGE */}

              <div className="h-[190px] w-full overflow-hidden bg-[#ead8bb]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />

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

export default DokraMetal;