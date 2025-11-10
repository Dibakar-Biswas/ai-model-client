import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Sliders = () => {
  const slides = [
    {
      id: 1,
      title: "Manage AI Models Efficiently",
      description:
        "Organize, track, and share your AI models in one centralized platform",
      image: "https://i.ibb.co/6cTF7yV6/download.jpg",
      bgColor: "from-blue-600 to-purple-600",
    },
    {
      id: 2,
      title: "Collaborate with AI Developers",
      description: "Share models, datasets, and insights with the AI community",
      image: "https://i.ibb.co/zT3SqjQc/download-1.jpg",
      bgColor: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      title: "Track Model Performance",
      description:
        "Monitor usage, purchases, and analytics for all your AI models",
      image: "https://i.ibb.co/LD6q4PDm/d3.png",
      bgColor: "from-pink-600 to-red-600",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative h-full bg-gradient-to-r ${slide.bgColor}`}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div
                className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 animate-fade-in-delay">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
