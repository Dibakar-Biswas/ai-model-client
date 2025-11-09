import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: 'Manage AI Models Efficiently',
      description: 'Organize, track, and share your AI models in one centralized platform',
      image: 'https://i.ibb.co/2YMj7yYp/ai.jpg',
      bgColor: 'from-blue-600 to-purple-600'
    },
    {
      id: 2,
      title: 'Collaborate with AI Developers',
      description: 'Share models, datasets, and insights with the AI community',
      image: 'https://i.ibb.co/5XwFTTD3/bi.jpg',
      bgColor: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      title: 'Track Model Performance',
      description: 'Monitor usage, purchases, and analytics for all your AI models',
      image: 'https://i.ibb.co/s94C3GN3/ci.jpg',
      bgColor: 'from-pink-600 to-red-600'
    }
  ];
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-[500px] md:h-[600px] rounded-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.image}")` }}
            >
              <div className="absolute inset-0 bg-opacity-40 flex items-end justify-center">
                <div
                  className="text-center text-black bg-white px-6 max-w-3xl"
                  data-aos="fade-up"
                >
                  <h1 className="text-2xl md:text-4xl font-bold mb-0">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-lg mb-6">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;