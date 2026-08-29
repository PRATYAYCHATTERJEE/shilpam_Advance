import allIcon from "../assets/all.png";

function CategoryBar({ activeCategory, setActiveCategory }) {
  const categories = [
    "All Crafts",
    "Terracotta",
    "Art works",
    "Bamboo & Cane",
    "Dokra & Metal",
    "Woodcraft",
    "Home Décor",
    "Jewellery",
    "Bags & Accessories",
    "হাতের ও সৃজনকর্ম",
  ];

  return (
    <section className="w-full bg-[#f8edda] px-5 py-5">

      <div className="mx-auto flex w-full items-start justify-between gap-3 overflow-hidden rounded-lg border border-[#d8b99c] bg-[#fffaf0] px-6 py-4">

        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="group flex min-w-[120px] flex-1 flex-col items-center justify-start"
            >

              {/* Icon */}
              <div
                className={`
                  flex h-14 w-14 items-center justify-center
                  rounded-full border
                  transition-all duration-300
                  ${
                    isActive
                      ? "border-[#c76535] bg-[#f9eee0] shadow-[0_4px_12px_rgba(150,80,40,0.12)]"
                      : "border-[#e2c5a9] bg-[#fffaf0] group-hover:border-[#c76535]"
                  }
                `}
              >
                <img
                  src={allIcon}
                  alt=""
                  className="h-9 w-9 object-contain"
                />
              </div>

              {/* Category name */}
              <span
                className={`
                  mt-3 whitespace-nowrap font-serif text-[15px]
                  transition-colors duration-300
                  ${
                    isActive
                      ? "font-semibold text-[#c44f20]"
                      : "text-[#4a2119] group-hover:text-[#c44f20]"
                  }
                `}
              >
                {category}
              </span>

              {/* Active underline */}
              <div
                className={`
                  mt-3 h-[2px] rounded-full bg-[#c44f20]
                  transition-all duration-300
                  ${
                    isActive
                      ? "w-32 opacity-100"
                      : "w-0 opacity-0"
                  }
                `}
              />

            </button>
          );
        })}

      </div>

    </section>
  );
}

export default CategoryBar;