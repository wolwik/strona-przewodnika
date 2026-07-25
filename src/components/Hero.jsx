import { useEffect, useState } from "react";

const slides = [
  "/carousel/IMG_1449.JPG",
  "/carousel/IMG_4292.JPG",
  "/carousel/IMG_4305.JPG",
  "/carousel/IMG_4371.JPG",
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-screen flex items-center justify-center px-6 pt-10"
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl">
        <div className="w-full md:w-1/2 flex flex-col justify-left max-w-3xl gap-5 text-white">
          <h2 className="text-6xl font-black ">
            Odkryj miejsca, które zapamiętasz na długo
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
