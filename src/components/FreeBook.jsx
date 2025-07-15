import React from "react";
import list from "../../public/list.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FreeBook = ({darkMode}) => {
  const filterData = list.filter((data) => data.category === "Free");

  return (
    <div className="px-5 md:px-20 py-10">
      <h1 className="font-semibold text-xl mb-4">Free Offered Courses</h1>
      <p className="mb-8 text-sm md:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis...
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filterData.map((book) => (
          <SwiperSlide key={book.id}>
            <div className={`lex flex-col justify-between border rounded shadow-md p-4 bg-white h-full hover:shadow-lg transition-transform duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <div className="flex-1 ">
                <h2 className="font-bold text-lg mb-1">{book.title}</h2>
                <p className={`text-sm mb-1 ${darkMode ? "text-white" : ""}`}>by {book.author}</p>
                <p className="text-sm mb-2">Price: ₹{book.price}</p>
                <div className="flex items-center">
                  <p className="text-sm text-pink-500 font-semibold">
                    {book.category}
                  </p>
                  <div className="ml-auto text-medium text-pink-600  rounded-lg px-2 font-sm border border-2 cursor-pointer hover:bg-pink-500 hover:text-white outline-none">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FreeBook;
