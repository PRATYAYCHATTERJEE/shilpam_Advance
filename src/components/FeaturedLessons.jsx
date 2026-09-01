import terracottaLesson from "../assets/learn/terracotta-lesson.png";
import bambooLesson from "../assets/learn/bamboo-lesson.png";
import pattachitraLesson from "../assets/learn/pattachitra-lesson.png";
import dokraLesson from "../assets/learn/dokra-lesson.png";
import macrameLesson from "../assets/learn/macrame-lesson.png";

function FeaturedLessons() {
  const lessons = [
    {
      title: "Terracotta Pot Making for Beginners",
      teacher: "Gopal Pal Artisan",
      lessons: "12 Lessons",
      level: "Beginner",
      tag: "Bestseller",
      tagClass: "bg-[#a72d16]",
      image: terracottaLesson,
    },
    {
      title: "Bamboo Basket Weaving Step by Step",
      teacher: "Maya Das Artisan",
      lessons: "10 Lessons",
      level: "Beginner",
      tag: "Popular",
      tagClass: "bg-[#4d7b19]",
      image: bambooLesson,
    },
    {
      title: "Pattachitra Painting Basics",
      teacher: "Anjali Chitrakar",
      lessons: "15 Lessons",
      level: "Intermediate",
      tag: "New",
      tagClass: "bg-[#70387c]",
      image: pattachitraLesson,
    },
    {
      title: "Dokra Craft – Lost Wax Art Technique",
      teacher: "Haripada Saha Artisan",
      lessons: "14 Lessons",
      level: "Advanced",
      tag: "Bestseller",
      tagClass: "bg-[#a72d16]",
      image: dokraLesson,
    },
    {
      title: "Macrame Wall Hanging Designs",
      teacher: "Lata Halder Artisan",
      lessons: "8 Lessons",
      level: "Beginner",
      tag: "Popular",
      tagClass: "bg-[#4d7b19]",
      image: macrameLesson,
    },
  ];

  return (
    <section className="mx-auto max-w-[1450px] px-8 pt-7">

      {/* HEADER */}

      <div className="mb-5 flex items-center justify-between">

        <h2 className="flex items-center gap-3 font-serif text-[24px] font-bold text-[#4a2119]">

          <span className="text-[28px] text-[#a52b13]">
            ✣
          </span>

          Featured Lessons

        </h2>

        <button
          type="button"
          className="
            font-serif
            text-[12px]
            font-semibold
            text-[#a52b13]
            transition-colors
            hover:text-[#761d10]
          "
        >
          View All Lessons →
        </button>

      </div>


      {/* CARDS */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {lessons.map((lesson) => (

          <article
            key={lesson.title}
            className="
              group
              overflow-hidden
              rounded-[13px]
              border
              border-[#e2c8ad]
              bg-[#fffaf1]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_10px_25px_rgba(74,33,25,0.10)]
            "
          >

            {/* IMAGE */}

            <div className="relative h-[145px] overflow-hidden bg-[#ead5b8]">

              <img
                src={lesson.image}
                alt={lesson.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-[1.04]
                "
              />

              {/* CATEGORY TAG */}

              <span
                className={`
                  absolute
                  left-3
                  top-3
                  rounded-full
                  px-3
                  py-[5px]
                  text-[10px]
                  font-semibold
                  text-white
                  shadow-sm
                  ${lesson.tagClass}
                `}
              >
                {lesson.tag}
              </span>


              {/* PLAY BUTTON */}

              <button
                type="button"
                aria-label={`Play ${lesson.title}`}
                className="
                  absolute
                  bottom-2
                  right-2
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d8c0a7]
                  bg-white
                  text-[10px]
                  text-[#9e2914]
                  shadow-md
                  transition-transform
                  duration-300
                  hover:scale-110
                "
              >
                ▶
              </button>

            </div>


            {/* CONTENT */}

            <div className="px-3 py-3">

              <h3 className="min-h-[52px] font-serif text-[14px] font-bold leading-[1.65] text-[#4a2119]">
                {lesson.title}
              </h3>


              <p className="mt-2 text-[10px] text-[#604a3c]">
                By {lesson.teacher}
              </p>


              {/* META */}

              <div className="mt-4 flex items-center justify-between border-t border-[#ead9c6] pt-3">

                <span className="flex items-center gap-1 text-[9px] font-medium text-[#4e392e]">
                  <span className="text-[12px] text-[#a52b13]">
                    ♧
                  </span>
                  {lesson.lessons}
                </span>


                <span className="flex items-center gap-1 text-[9px] font-medium text-[#4e392e]">

                  <span className="text-[12px] text-[#a52b13]">
                    ▥
                  </span>

                  {lesson.level}

                </span>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default FeaturedLessons;