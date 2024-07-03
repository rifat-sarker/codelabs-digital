import photo from "../../../assets/Ellipse 10.png";
import photo2 from "../../../assets/Ellipse 10 (1).png";
import photo3 from "../../../assets/Ellipse 10 (2).png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { PiStarFill } from "react-icons/pi";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const Feedback = () => {
  return (
    <div className="py-20">
      <button className="border border-[#4D4C7B] py-2 px-6 rounded-3xl text-[#020043]">
        Testimonial
      </button>
      <h3 className="text-[#020043] py-6 text-4xl font-bold">
        What they say about us
      </h3>
      {/* feedback slider */}

      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h4 className="text-[#020043] font-bold py-3">
            Expertise and Compassion <br /> Combined
          </h4>
          <p className="text-[#4D4C7B] text-[12px] opacity-70">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion <br /> throughout
            my treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-4 py-4">
            <img src={photo} className="size-11" alt="" />
            <div>
              <h4 className="text-[12px]">
                <span className="font-bold">Sarah D,</span>{" "}
                <span className="opacity-70">IT Professional</span>
              </h4>
              <div className="flex">
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="text-[#020043] font-bold py-3">
            Life-Saving Care, Life-Changing <br /> Experience
          </h4>
          <p className="text-[#4D4C7B] text-[12px] opacity-70">
            My experience at [Healthcare Provider Name] was life-changing. The
            prompt and accurate diagnosis, coupled with the advanced treatments
            they provided, saved my life.
          </p>
          <div className="flex gap-4 py-4">
            <img src={photo2} className="size-11" alt="" />
            <div>
              <h4 className="text-[12px]">
                <span className="font-bold">Michael R,</span>{" "}
                <span className="opacity-70">Business Executive</span>
              </h4>
              <div className="flex">
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="text-[#020043] font-bold py-3">
            A Partner in Health and <br /> Wellness
          </h4>
          <p className="text-[#4D4C7B] text-[12px] opacity-70">
            As a busy professional, I appreciate the convenience and quality of
            care I receive at [Healthcare Provider Name]. From telemedicine
            consultations to routine check-ups, they've become my trusted
            partner in health and
          </p>
          <div className="flex gap-4 py-4">
            <img src={photo3} className="size-11" alt="" />
            <div>
              <h4 className="text-[12px]">
                <span className="font-bold">David S,</span>{" "}
                <span className="opacity-70">IT Lawyer</span>
              </h4>
              <div className="flex">
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="text-[#020043] font-bold py-3">
            Expertise and Compassion <br /> Combined
          </h4>
          <p className="text-[#4D4C7B] text-[12px] opacity-70">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion <br /> throughout
            my treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-4 py-4">
            <img src={photo} className="size-11" alt="" />
            <div>
              <h4 className="text-[12px]">
                <span className="font-bold">Sarah D,</span>{" "}
                <span className="opacity-70">IT Professional</span>
              </h4>
              <div className="flex">
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="text-[#020043] font-bold py-3">
            Life-Saving Care, Life-Changing <br /> Experience
          </h4>
          <p className="text-[#4D4C7B] text-[12px] opacity-70">
            My experience at [Healthcare Provider Name] was life-changing. The
            prompt and accurate diagnosis, coupled with the advanced treatments
            they provided, saved my life.
          </p>
          <div className="flex gap-4 py-4">
            <img src={photo2} className="size-11" alt="" />
            <div>
              <h4 className="text-[12px]">
                <span className="font-bold">Michael R,</span>{" "}
                <span className="opacity-70">Business Executive</span>
              </h4>
              <div className="flex">
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="text-[#020043] font-bold py-3">
            A Partner in Health and <br /> Wellness
          </h4>
          <p className="text-[#4D4C7B] text-[12px] opacity-70">
            As a busy professional, I appreciate the convenience and quality of
            care I receive at [Healthcare Provider Name]. From telemedicine
            consultations to routine check-ups, they've become my trusted
            partner in health and
          </p>
          <div className="flex gap-4 py-4">
            <img src={photo3} className="size-11" alt="" />
            <div>
              <h4 className="text-[12px]">
                <span className="font-bold">David S,</span>{" "}
                <span className="opacity-70">IT Lawyer</span>
              </h4>
              <div className="flex">
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
                <PiStarFill size={"30px"} color="#FFE03D" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Feedback;
