import { useMemo, useState } from "react";

const artisans = [
  {
    id: 1,
    name: "Maya Das",
    category: "Bamboo & Cane",
    badge: "Bamboo Artisan",
    district: "Birbhum",
    location: "Shantiniketan, Birbhum",
    experience: 18,
    rating: 4.9,
    reviews: 9,
    description:
      "Crafting beautiful bamboo products with skill and patience.",
    image: "",
  },

  {
    id: 2,
    name: "Haripada Saha",
    category: "Dokra & Metal",
    badge: "Dokra Artisan",
    district: "Purulia",
    location: "Diarapur, Purulia",
    experience: 30,
    rating: 4.9,
    reviews: 150,
    description:
      "Preserving the ancient art of dokra craft with passion.",
    image: "",
  },

  {
    id: 3,
    name: "Sabita Roy",
    category: "Textile",
    badge: "Kantha",
    district: "Murshidabad",
    location: "Murshidabad, West Bengal",
    experience: 1,
    rating: 4.8,
    reviews: 102,
    description:
      "Stitching stories with threads in every Kantha piece.",
    image: "",
  },

  {
    id: 4,
    name: "Gopal Pal",
    category: "Terracotta",
    badge: "Terracotta Artisan",
    district: "Bankura",
    location: "Bishnupur, Bankura",
    experience: 5,
    rating: 4.7,
    reviews: 120,
    description:
      "Keeping the rich tradition of terracotta art alive for generations.",
    image: "",
  },

  {
    id: 5,
    name: "Purnima Karmakar",
    category: "Jewellery",
    badge: "Jewellery Artisan",
    district: "Kolkata",
    location: "West Bengal",
    experience: 12,
    rating: 4.7,
    reviews: 95,
    description:
      "Designing handcrafted jewellery inspired by tradition.",
    image: "",
  },

  {
    id: 6,
    name: "Mondal",
    category: "Woodcraft",
    badge: "Woodcraft Artisan",
    district: "Nadia",
    location: "Nadia, West Bengal",
    experience: 0,
    rating: 4.6,
    reviews: 80,
    description:
      "Turning wood into timeless handcrafted masterpieces.",
    image: "",
  },

  {
    id: 7,
    name: "Lata Halder",
    category: "Others",
    badge: "Jute Artisan",
    district: "Hooghly",
    location: "Hooghly, West Bengal",
    experience: 1,
    rating: 4.6,
    reviews: 7,
    description:
      "Eco-friendly jute creations for a better tomorrow.",
    image: "",
  },

  {
    id: 8,
    name: "Anjali Chitrakar",
    category: "Others",
    badge: "Folk Art Artisan",
    district: "Paschim Medinipur",
    location: "Pingla, Paschim Medinipur",
    experience: 1,
    rating: 4.0,
    reviews: 110,
    description:
      "Bringing Bengali folk art to life with vibrant colors.",
    image: "",
  },
];


const categories = [
  "All Artisans",
  "Terracotta",
  "Bamboo & Cane",
  "Dokra & Metal",
  "Woodcraft",
  "Textile",
  "Jewellery",
  "Others",
];


const districts = [
  "All Districts",
  "Bankura",
  "Birbhum",
  "Purulia",
  "Murshidabad",
  "Nadia",
  "Kolkata",
  "Hooghly",
  "Paschim Medinipur",
];


function Artisans() {
  const [activeCategory, setActiveCategory] =
    useState("All Artisans");

  const [selectedDistrict, setSelectedDistrict] =
    useState("All Districts");

  const [sortBy, setSortBy] =
    useState("Popular");

  const [favorites, setFavorites] =
    useState([]);


  // =============================
  // FILTER + SORT
  // =============================

  const filteredArtisans = useMemo(() => {
    let result = [...artisans];


    // CATEGORY FILTER

    if (activeCategory !== "All Artisans") {
      result = result.filter(
        (artisan) =>
          artisan.category === activeCategory
      );
    }


    // DISTRICT FILTER

    if (selectedDistrict !== "All Districts") {
      result = result.filter(
        (artisan) =>
          artisan.district === selectedDistrict
      );
    }


    // SORTING

    if (sortBy === "Popular") {
      result.sort(
        (a, b) =>
          b.reviews - a.reviews
      );
    }


    if (sortBy === "Most Experienced") {
      result.sort(
        (a, b) =>
          b.experience - a.experience
      );
    }


    if (sortBy === "Highest Rated") {
      result.sort(
        (a, b) =>
          b.rating - a.rating
      );
    }


    if (sortBy === "Newest") {
      result.sort(
        (a, b) =>
          b.id - a.id
      );
    }


    return result;

  }, [
    activeCategory,
    selectedDistrict,
    sortBy,
  ]);


  // =============================
  // FAVORITE
  // =============================

  const toggleFavorite = (id) => {

    setFavorites((currentFavorites) => {

      if (currentFavorites.includes(id)) {
        return currentFavorites.filter(
          (favoriteId) =>
            favoriteId !== id
        );
      }

      return [
        ...currentFavorites,
        id,
      ];

    });

  };


  return (
    <div
      id="artisans"
      className="
        min-h-screen
        bg-[#f8f2e8]
        px-6
        py-12
        lg:px-14
      "
    >

      {/* =========================
          HERO
      ========================== */}

      <section
        className="
          relative
          mb-10
          overflow-hidden
          border-b
          border-[#8a5a3b]/20
          pb-10
          text-center
        "
      >

        <div className="mb-5 flex items-center justify-center gap-6">

          <span className="text-xl text-[#a94818]">
            ❧
          </span>

          <div className="h-px w-16 bg-[#b76539]" />

          <span className="text-xl text-[#a94818]">
            ❧
          </span>

        </div>


        <h1
          className="
            font-serif
            text-5xl
            text-[#35251d]
            sm:text-6xl
            lg:text-7xl
          "
        >
          Meet the Artisans
        </h1>


        <div className="mt-5 flex items-center justify-center gap-4">

          <div className="h-px w-14 bg-[#b76539]" />

          <span className="text-[#a94818]">
            ✦
          </span>

          <div className="h-px w-14 bg-[#b76539]" />

        </div>


        <p
          className="
            mx-auto
            mt-5
            max-w-3xl
            font-serif
            text-lg
            text-[#5d4b40]
          "
        >
          The talented hands and creative hearts behind every
          Silpam creation.
        </p>


        <p
          className="
            mt-2
            font-serif
            text-base
            text-[#a94818]
          "
        >
          কারিগরের হাতে বোনা বাংলার গল্প
        </p>

      </section>



      {/* =========================
          FILTER BAR
      ========================== */}

      <section
        className="
          mb-4
          flex
          flex-col
          gap-4
          rounded-t-[18px]
          border
          border-[#8a5a3b]/20
          bg-[#f5eee4]
          p-4
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        {/* CATEGORY TABS */}

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                rounded-full
                border
                px-5
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? `
                      border-[#ae4818]
                      bg-[#ae4818]
                      text-white
                      shadow-md
                    `
                    : `
                      border-[#cdbfae]
                      bg-[#f9f5ee]
                      text-[#4e453e]
                      hover:border-[#ae4818]
                      hover:text-[#ae4818]
                    `
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>



        {/* DROPDOWNS */}

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          {/* DISTRICT */}

          <select
            value={selectedDistrict}
            onChange={(event) =>
              setSelectedDistrict(
                event.target.value
              )
            }
            className="
              cursor-pointer
              rounded-xl
              border
              border-[#cdbfae]
              bg-[#f9f5ee]
              px-4
              py-3
              text-[#51463e]
              outline-none
              transition
              focus:border-[#ae4818]
            "
          >

            {districts.map((district) => (

              <option
                key={district}
                value={district}
              >
                {district}
              </option>

            ))}

          </select>



          {/* SORT */}

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value
              )
            }
            className="
              cursor-pointer
              rounded-xl
              border
              border-[#cdbfae]
              bg-[#f9f5ee]
              px-4
              py-3
              text-[#51463e]
              outline-none
              transition
              focus:border-[#ae4818]
            "
          >

            <option value="Popular">
              Most Popular
            </option>

            <option value="Most Experienced">
              Most Experienced
            </option>

            <option value="Highest Rated">
              Highest Rated
            </option>

            <option value="Newest">
              Newest
            </option>

          </select>

        </div>

      </section>



      {/* =========================
          ARTISAN GRID
      ========================== */}

      {filteredArtisans.length > 0 ? (

        <section
          className="
            grid
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >

          {filteredArtisans.map(
            (artisan) => (

              <article
                key={artisan.id}
                className="
                  group
                  rounded-[20px]
                  border
                  border-[#cfc2b2]
                  bg-[#f8f4ec]
                  p-4
                  shadow-[0_5px_18px_rgba(70,45,25,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_28px_rgba(70,45,25,0.15)]
                "
              >

                <div
                  className="
                    flex
                    gap-5
                  "
                >

                  {/* IMAGE */}

                  <div
                    className="
                      h-[265px]
                      w-[48%]
                      shrink-0
                      overflow-hidden
                      rounded-[50%]
                      border
                      border-[#d3c2ad]
                      bg-[#d7c4aa]
                    "
                  >

                    {artisan.image ? (

                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />

                    ) : (

                      <div
                        className="
                          flex
                          h-full
                          items-center
                          justify-center
                          font-serif
                          text-[#9d8063]
                        "
                      >
                        Artisan
                      </div>

                    )}

                  </div>



                  {/* CONTENT */}

                  <div className="flex flex-1 flex-col">

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-2
                      "
                    >

                      <span
                        className="
                          rounded-full
                          bg-[#e5dcc9]
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-[#715d4c]
                        "
                      >
                        {artisan.badge}
                      </span>


                      <button
                        type="button"
                        onClick={() =>
                          toggleFavorite(
                            artisan.id
                          )
                        }
                        className="
                          text-2xl
                          text-[#6d5a4a]
                          transition
                          hover:scale-110
                        "
                      >
                        {favorites.includes(
                          artisan.id
                        )
                          ? "♥"
                          : "♡"}
                      </button>

                    </div>


                    <h2
                      className="
                        mt-5
                        font-serif
                        text-3xl
                        leading-tight
                        text-[#392820]
                      "
                    >
                      {artisan.name}
                    </h2>


                    <p
                      className="
                        mt-3
                        text-sm
                        text-[#62564c]
                      "
                    >
                      ✦ {artisan.location}
                    </p>


                    <p
                      className="
                        mt-5
                        font-serif
                        leading-7
                        text-[#66584c]
                      "
                    >
                      {artisan.description}
                    </p>

                  </div>

                </div>



                {/* BOTTOM */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#d8cbbb]
                    pt-5
                  "
                >

                  <div className="flex gap-8">

                    <div>

                      <p
                        className="
                          text-lg
                          font-semibold
                          text-[#44352b]
                        "
                      >
                        {artisan.experience}+
                      </p>

                      <p
                        className="
                          text-[11px]
                          text-[#786b60]
                        "
                      >
                        Years Exp.
                      </p>

                    </div>


                    <div>

                      <p
                        className="
                          text-lg
                          font-semibold
                          text-[#44352b]
                        "
                      >
                        ☆ {artisan.rating}
                      </p>

                      <p
                        className="
                          text-[11px]
                          text-[#786b60]
                        "
                      >
                        ({artisan.reviews} Reviews)
                      </p>

                    </div>

                  </div>


                  <button
                    type="button"
                    onClick={() =>
                      console.log(
                        "View profile:",
                        artisan.id
                      )
                    }
                    className="
                      rounded-lg
                      bg-[#ae4818]
                      px-8
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      shadow-md
                      transition-all
                      hover:bg-[#92380f]
                      hover:shadow-lg
                    "
                  >
                    View Profile
                  </button>

                </div>

              </article>

            )
          )}

        </section>

      ) : (

        /* =========================
            EMPTY STATE
        ========================== */

        <section
          className="
            flex
            min-h-[230px]
            flex-col
            items-center
            justify-center
            rounded-[18px]
            border
            border-dashed
            border-[#cdbfae]
            bg-[#f8f4ec]
            text-center
          "
        >

          <h2
            className="
              font-serif
              text-4xl
              text-[#3d2b21]
            "
          >
            No artisans found
          </h2>


          <p
            className="
              mt-3
              text-lg
              text-[#6b5c50]
            "
          >
            Try another craft or district.
          </p>


          <button
            type="button"
            onClick={() => {
              setActiveCategory(
                "All Artisans"
              );

              setSelectedDistrict(
                "All Districts"
              );
            }}
            className="
              mt-6
              rounded-lg
              bg-[#ae4818]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#92380f]
            "
          >
            Clear Filters
          </button>

        </section>

      )}

    </div>
  );
}


export default Artisans;