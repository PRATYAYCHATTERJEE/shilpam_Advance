import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";

function Hero() {
  const slides = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="flex w-max animate-[heroSlide_25s_infinite_linear]">

        {slides.map((image, index) => (
          <div
            key={index}
            className="w-screen shrink-0"
          >
            <img
              src={image}
              alt={`Silpam hero slide ${index + 1}`}
              className="block h-auto w-full"
            />
          </div>
        ))}

      </div>

      <style>
        {`
          @keyframes heroSlide {
            0% {
              transform: translateX(0);
            }

            18% {
              transform: translateX(0);
            }

            20% {
              transform: translateX(-100vw);
            }

            38% {
              transform: translateX(-100vw);
            }

            40% {
              transform: translateX(-200vw);
            }

            58% {
              transform: translateX(-200vw);
            }

            60% {
              transform: translateX(-300vw);
            }

            78% {
              transform: translateX(-300vw);
            }

            80% {
              transform: translateX(-400vw);
            }

            98% {
              transform: translateX(-400vw);
            }

            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;