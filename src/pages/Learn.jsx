import logo from "../assets/logo.png";
import navkolka from "../assets/navkolka.png";
import FeaturedLessons from "../components/FeaturedLessons";
function Learn() {
  const lessons = [
    {
      title: "Terracotta Pot Making for Beginners",
      teacher: "Gopal Pal Artisan",
      lessons: "12 Lessons",
      level: "Beginner",
      tag: "Bestseller",
      tagColor: "bg-[#a52b13]",
      image: "../assets/Terracotta/terracotta1.png",
    },
    {
      title: "Bamboo Basket Weaving Step by Step",
      teacher: "Maya Das Artisan",
      lessons: "10 Lessons",
      level: "Beginner",
      tag: "Popular",
      tagColor: "bg-[#4d7b18]",
      image: "../assets/bamboo1.png",
    },
    {
      title: "Pattachitra Painting Basics",
      teacher: "Anjali Chitrakar",
      lessons: "15 Lessons",
      level: "Intermediate",
      tag: "New",
      tagColor: "bg-[#733a7e]",
      image: "../assets/artwork1.png",
    },
    {
      title: "Dokra Craft – Lost Wax Art Technique",
      teacher: "Haripada Saha Artisan",
      lessons: "14 Lessons",
      level: "Advanced",
      tag: "Bestseller",
      tagColor: "bg-[#a52b13]",
      image: "../assets/dokra1.png",
    },
    {
      title: "Macrame Wall Hanging Designs",
      teacher: "Lata Halder Artisan",
      lessons: "8 Lessons",
      level: "Beginner",
      tag: "Popular",
      tagColor: "bg-[#4d7b18]",
      image: "../assets/macrame1.png",
    },
  ];

  const teachers = [
    {
      name: "Gopal Pal",
      craft: "Terracotta Artisan",
      rating: "4.8",
      reviews: "120",
      lessons: "12 Lessons",
      image: "../assets/teacher1.png",
    },
    {
      name: "Maya Das",
      craft: "Bamboo Artisan",
      rating: "4.9",
      reviews: "98",
      lessons: "10 Lessons",
      image: "../assets/teacher2.png",
    },
    {
      name: "Anjali Chitrakar",
      craft: "Pattachitra Artist",
      rating: "4.9",
      reviews: "85",
      lessons: "15 Lessons",
      image: "../assets/teacher3.png",
    },
    {
      name: "Haripada Saha",
      craft: "Dokra Artisan",
      rating: "4.8",
      reviews: "70",
      lessons: "14 Lessons",
      image: "../assets/teacher4.png",
    },
    {
      name: "Lata Halder",
      craft: "Macrame Artist",
      rating: "4.9",
      reviews: "60",
      lessons: "8 Lessons",
      image: "../assets/teacher5.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffaf0] text-[#4a2119]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="sticky top-0 z-50 border-b border-[#e5cdb5] bg-[#fffaf4]">

        <div className="mx-auto flex h-[92px] max-w-[1500px] items-center justify-between px-8">

          {/* LOGO */}

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Silpam"
              className="h-[58px] w-[58px] object-contain"
            />

            <div>
              <h1 className="font-serif text-[28px] font-bold leading-none tracking-wide">
                Silpam
              </h1>

              <p className="mt-1 text-[9px] tracking-[1.5px] text-[#9b5035]">
                REVIVING BENGAL'S TIMELESS ART
              </p>

              <p className="font-serif text-[12px] font-semibold text-[#651e14]">
                শিল্প | সৃষ্টি | কারিগরি মন
              </p>
            </div>

          </div>


          {/* NAVIGATION */}

          <div className="hidden items-center gap-7 font-serif text-[14px] font-semibold xl:flex">

            <button className="transition hover:text-[#a52b13]">
              Home
            </button>

            <button className="flex items-center gap-1 transition hover:text-[#a52b13]">
              Shop
              <span>⌄</span>
            </button>

            <button className="flex items-center gap-1 transition hover:text-[#a52b13]">
              Categories
              <span>⌄</span>
            </button>

            <button className="transition hover:text-[#a52b13]">
              Our Artisans
            </button>

            <button
              className="
                border-b-2
                border-[#a52b13]
                pb-3
                pt-3
                text-[#a52b13]
              "
            >
              Learn with Silpam
            </button>

            <button className="transition hover:text-[#a52b13]">
              Our Story
            </button>

            <button className="transition hover:text-[#a52b13]">
              Contact
            </button>

          </div>


          {/* SEARCH + ICONS */}

          <div className="flex items-center gap-4">

            <div className="hidden items-center rounded-full border border-[#dfc5aa] bg-[#fffaf4] px-4 py-2 lg:flex">

              <input
                type="text"
                placeholder="Search for lessons, crafts..."
                className="
                  w-[150px]
                  bg-transparent
                  text-[11px]
                  outline-none
                  placeholder:text-[#9d8879]
                "
              />

              <span className="text-[22px] text-[#a52b13]">
                ⌕
              </span>

            </div>

            <button className="text-[24px] text-[#8e2012]">
              🛒
            </button>

            <button className="text-[28px] text-[#8e2012]">
              ♡
            </button>

            <button className="text-[25px] text-[#8e2012]">
              ♙
            </button>

          </div>

        </div>


        {/* =================================================
            DECORATIVE NAV KOLKA
        ================================================== */}

        <div className="h-[13px] w-full overflow-hidden">

          <img
            src={navkolka}
            alt=""
            className="h-[22px] w-full object-cover object-top"
          />

        </div>

      </nav>


      {/* =====================================================
          FEATURED LESSONS
      ===================================================== */}

      <section className="mx-auto max-w-[1450px] px-8 pt-7">

        {/* SECTION HEADING */}

        <div className="mb-5 flex items-center justify-between">

          <h2 className="flex items-center gap-3 font-serif text-[24px] font-bold">

            <span className="text-[27px] text-[#a52b13]">
              ✣
            </span>

            Featured Lessons

          </h2>


          <button className="font-serif text-[12px] font-semibold text-[#a52b13]">
            View All Lessons&nbsp; →
          </button>

        </div>


        {/* LESSON CARDS */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {lessons.map((lesson, index) => (

            <article
              key={index}
              className="
                group
                overflow-hidden
                rounded-[13px]
                border
                border-[#e4cbb1]
                bg-[#fffaf1]
                shadow-[0_2px_8px_rgba(80,35,15,0.03)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(80,35,15,0.10)]
              "
            >

              {/* IMAGE */}

              <div className="relative h-[145px] overflow-hidden bg-[#ead4b5]">

                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />


                {/* TAG */}

                <span
                  className={`
                    absolute
                    left-3
                    top-3
                    rounded-full
                    px-3
                    py-1
                    text-[10px]
                    font-semibold
                    text-white
                    ${lesson.tagColor}
                  `}
                >
                  {lesson.tag}
                </span>


                {/* PLAY */}

                <button
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
                    bg-white
                    text-[12px]
                    text-[#9f2713]
                    shadow-md
                  "
                >
                  ▶
                </button>

              </div>


              {/* CARD CONTENT */}

              <div className="px-3 py-3">

                <h3 className="min-h-[53px] font-serif text-[14px] font-bold leading-6 text-[#4a2119]">
                  {lesson.title}
                </h3>


                <p className="mt-2 text-[10px] text-[#5e4b40]">
                  By {lesson.teacher}
                </p>


                <div className="mt-4 flex items-center justify-between text-[9px] text-[#4d382d]">

                  <span className="flex items-center gap-1">
                    📖 {lesson.lessons}
                  </span>

                  <span className="flex items-center gap-1">
                    ▥ {lesson.level}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          TEACH ON SILPAM BANNER
      ===================================================== */}

      <section className="mx-auto mt-8 max-w-[1400px] px-8">

        <div
          className="
            relative
            overflow-hidden
            rounded-[15px]
            bg-[#9f210f]
            px-8
            py-6
          "
        >

          <div className="relative z-10 flex flex-col items-center justify-between gap-5 lg:flex-row">

            <div className="flex items-center gap-8">

              <div className="hidden text-[80px] leading-none text-[#f9dfbd] lg:block">
                ❧
              </div>

              <h2 className="max-w-[470px] font-serif text-[24px] font-semibold leading-9 text-[#fff5e5]">
                শিল্পকে ভালোবাসুন,
                <br />
                দক্ষতা বাড়ান,
                <br />
                স্বনির্ভর হয়ে গড়ুন সুন্দর ভবিষ্যৎ।
              </h2>

            </div>


            <div className="flex min-w-[420px] items-center gap-5 rounded-[14px] bg-[#fff9ee] px-7 py-5">

              <div className="text-[45px] text-[#a52b13]">
                ▣
              </div>

              <div className="flex-1">

                <h3 className="font-serif text-[21px] font-bold text-[#a52b13]">
                  Teach on Silpam
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-[#5c4437]">
                  আপনার জ্ঞান শেয়ার করুন
                  <br />
                  হাজারো শিক্ষার্থীর অনুপ্রেরণা হন।
                </p>

              </div>

              <button
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#a52b13]
                  text-xl
                  text-white
                "
              >
                →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TEACHERS + TESTIMONIAL
      ===================================================== */}

      <section className="mx-auto mt-7 grid max-w-[1400px] grid-cols-1 gap-5 px-8 lg:grid-cols-[2fr_1fr]">

        {/* TEACHERS */}

        <div className="rounded-[14px] border border-[#e4cdb5] bg-[#fffaf1] p-5">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="flex items-center gap-3 font-serif text-[21px] font-bold">
              <span className="text-[#a52b13]">
                ✣
              </span>
              Meet Our Top Teacher Artisans
            </h2>

            <button className="text-[11px] font-semibold text-[#a52b13]">
              View All Teachers →
            </button>

          </div>


          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">

            {teachers.map((teacher, index) => (

              <div
                key={index}
                className="
                  border-r
                  border-[#ead7c3]
                  text-center
                  last:border-r-0
                "
              >

                <div className="mx-auto flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full bg-[#ead9bd]">

                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                </div>


                <h3 className="mt-3 font-serif text-[14px] font-bold">
                  {teacher.name}
                </h3>

                <p className="mt-1 text-[9px] text-[#7b6254]">
                  {teacher.craft}
                </p>

                <p className="mt-3 text-[10px]">
                  <span className="text-[#a52b13]">
                    ★
                  </span>{" "}
                  {teacher.rating} ({teacher.reviews})
                </p>

                <p className="mt-3 text-[9px]">
                  ♧ {teacher.lessons}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* TESTIMONIAL */}

        <div className="relative overflow-hidden rounded-[14px] border border-[#e4cdb5] bg-[#fffaf1] p-5">

          <h2 className="font-serif text-[21px] font-bold">
            What Learners Say
          </h2>

          <p className="mt-2 font-serif text-[14px] font-semibold">
            শিক্ষার্থীদের ভালোবাসা
          </p>


          <div className="mt-5 text-[48px] leading-none text-[#a52b13]">
            “
          </div>


          <p className="font-serif text-[13px] leading-7 text-[#4f372d]">
            Silpam-এর পাঠগুলো খুব সহজভাবে
            <br />
            বোঝানো হয়। আমি টেরাকোটা নিয়ে
            <br />
            এখন নিজের তৈরি জিনিস অনলাইনে
            <br />
            বিক্রি করি!
          </p>


          <p className="mt-4 text-[11px] font-semibold">
            – Purnima Karmakar
          </p>

          <p className="mt-1 text-[9px]">
            Terracotta Artisan
          </p>


          <div className="mt-2 text-[#a52b13]">
            ★★★★★
          </div>


          <div className="mt-5 flex justify-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#a52b13]" />
            <span className="h-2 w-2 rounded-full bg-[#dfc3a2]" />
            <span className="h-2 w-2 rounded-full bg-[#dfc3a2]" />
            <span className="h-2 w-2 rounded-full bg-[#dfc3a2]" />

          </div>

        </div>

      </section>


      {/* =====================================================
          SILPAM AI
      ===================================================== */}

      <section className="mx-auto mt-7 max-w-[1400px] px-8">

        <div className="relative overflow-hidden rounded-[15px] border border-[#e2cbb1] bg-[#f8e8d0] px-8 py-6">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            {/* ROBOT */}

            <div className="hidden text-[100px] leading-none lg:block">
              🤖
            </div>


            {/* TEXT */}

            <div className="flex-1">

              <div className="flex items-center gap-3">

                <h2 className="font-serif text-[25px] font-bold">
                  Silpam AI Assistant
                </h2>

                <span className="rounded-full bg-[#f2a35e] px-3 py-1 text-[9px] font-semibold text-[#6d2a12]">
                  New
                </span>

              </div>


              <h3 className="mt-1 font-serif text-[17px] font-semibold text-[#a52b13]">
                আপনার সহায়ক, আপনার পাশে
              </h3>


              <p className="mt-2 max-w-[600px] font-serif text-[13px] leading-6">
                শিল্প, কৌশল, উপকরণ বা ব্যবসা সম্পর্কিত
                যে কোনো প্রশ্ন করুন। Silpam AI আছে
                আপনার জন্য।
              </p>

            </div>


            {/* BUTTON */}

            <button
              className="
                rounded-[10px]
                bg-[#a52b13]
                px-8
                py-4
                font-serif
                text-[17px]
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(120,30,10,0.15)]
                transition
                hover:bg-[#861c0d]
              "
            >
              💬 Ask Silpam AI
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="mx-auto mt-5 max-w-[1400px] px-8">

        <div className="grid grid-cols-1 divide-y divide-[#dfc5aa] rounded-[14px] border border-[#e4cdb5] bg-[#fffaf1] md:grid-cols-3 md:divide-x md:divide-y-0">

          <div className="flex items-center justify-center gap-4 p-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#dfc3a2] bg-[#fff6e8] text-[25px]">
              📖
            </div>

            <div>
              <h3 className="font-serif text-[14px] font-semibold">
                শিখুন নতুন কিছু প্রতিদিন
              </h3>

              <p className="mt-1 text-[11px] text-[#765e51]">
                ধাপে ধাপে, সহজ ভাষায়।
              </p>
            </div>

          </div>


          <div className="flex items-center justify-center gap-4 p-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#dfc3a2] bg-[#fff6e8] text-[25px]">
              🖐
            </div>

            <div>
              <h3 className="font-serif text-[14px] font-semibold">
                নিজের দক্ষতা ভাগ করুন
              </h3>

              <p className="mt-1 text-[11px] text-[#765e51]">
                অন্যদের শিখিয়ে এগিয়ে চলুন।
              </p>
            </div>

          </div>


          <div className="flex items-center justify-center gap-4 p-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#dfc3a2] bg-[#fff6e8] text-[25px]">
              👥
            </div>

            <div>
              <h3 className="font-serif text-[14px] font-semibold">
                একটি শক্তিশালী কমিউনিটিতে
              </h3>

              <p className="mt-1 text-[11px] text-[#765e51]">
                যুক্ত হন এবং অনুপ্রাণিত হন।
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="mt-7 bg-[#8f1d0d] text-[#fff5e7]">

        <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}

          <div className="lg:col-span-1">

            <h2 className="font-serif text-[27px] font-bold">
              ✣ Silpam
            </h2>

            <p className="mt-4 font-serif text-[12px] leading-6 text-[#f4d7c0]">
              বাংলার ঐতিহ্যবাহী কারুশিল্পকে
              <br />
              সবার কাছে পৌঁছে দিতে এবং
              <br />
              নতুন প্রজন্মকে শেখাতে Silpam।
            </p>

            <div className="mt-5 flex gap-3 text-[20px]">
              ○
              ◎
              ◉
              Ⓟ
            </div>

          </div>


          {/* SHOP */}

          <div>

            <h3 className="font-serif text-[15px] font-bold">
              Shop
            </h3>

            <div className="mt-4 space-y-3 text-[11px] text-[#f2d9c6]">

              <p>All Products</p>
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>Gift Hampers</p>

            </div>

          </div>


          {/* CUSTOMER CARE */}

          <div>

            <h3 className="font-serif text-[15px] font-bold">
              Customer Care
            </h3>

            <div className="mt-4 space-y-3 text-[11px] text-[#f2d9c6]">

              <p>Track Order</p>
              <p>Returns & Refunds</p>
              <p>Shipping Policy</p>
              <p>Help & FAQ</p>

            </div>

          </div>


          {/* LEARN */}

          <div>

            <h3 className="font-serif text-[15px] font-bold">
              Learn with Silpam
            </h3>

            <div className="mt-4 space-y-3 text-[11px] text-[#f2d9c6]">

              <p>All Lessons</p>
              <p>Become a Teacher</p>
              <p>My Learning</p>
              <p>Help & Support</p>

            </div>

          </div>


          {/* COMPANY */}

          <div>

            <h3 className="font-serif text-[15px] font-bold">
              Our Company
            </h3>

            <div className="mt-4 space-y-3 text-[11px] text-[#f2d9c6]">

              <p>About Us</p>
              <p>Our Artisans</p>
              <p>Sustainability</p>
              <p>Contact Us</p>

            </div>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="border-t border-[#b75c43] py-5 text-center">

          <p className="font-serif text-[11px] text-[#f2d7c3]">
            © 2024 Silpam. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}

export default Learn;