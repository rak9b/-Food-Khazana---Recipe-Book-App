import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/pBWqdz5w/image.png",
      caption: "Savor the Taste of Tradition 🍛",
    },
    {
      id: 2,
      image: "https://i.ibb.co/xqjdPWhM/image.png",
      caption: "Fresh Ingredients, Delicious Meals 🥗",
    },
    {
      id: 3,
      image: "https://i.ibb.co/CpwP1y65/image.png",
      caption: "Discover the Joy of Cooking 👨‍🍳",
    },
    {
      id: 4,
      image: "https://i.ibb.co/TqbMPsYz/image.png",
      caption: "Flavors That Tell Stories ✨",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto my-10 px-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-2xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full">
            <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4 drop-shadow-md">
                  {slide.caption}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
