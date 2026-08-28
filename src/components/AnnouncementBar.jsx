function AnnouncementBar() {
  const announcements = [
    "Made & Authentic",
    "Crafted by Bengal's Skilled Artisans",
    "Bringing Bengal's Heritage to Every Home",
    "Pan-India Delivery Available",
    "Welcome to Silpam — Reviving Bengal's Timeless Art",
    "Free Shipping on Orders Above ₹999",
  ];

  return (
    <div className="h-9 w-full overflow-hidden bg-[#064B36] text-[#F8E8C9]">

      <div className="flex h-full w-max animate-[marquee_30s_linear_infinite] items-center">

        {/* First set */}
        <div className="flex items-center gap-16 px-8 whitespace-nowrap">
          {announcements.map((item, index) => (
            <span
              key={`first-${index}`}
              className="text-[11px] font-medium tracking-wide"
            >
              ✦ {item}
            </span>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-16 px-8 whitespace-nowrap">
          {announcements.map((item, index) => (
            <span
              key={`second-${index}`}
              className="text-[11px] font-medium tracking-wide"
            >
              ✦ {item}
            </span>
          ))}
        </div>

      </div>

      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </div>
  );
}

export default AnnouncementBar;