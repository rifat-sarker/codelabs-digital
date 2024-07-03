import { MdArrowOutward } from "react-icons/md";
import image from "../../../assets/Rectangle 27-2.png";
import image2 from "../../../assets/Rectangle 27-1.png";
import image3 from "../../../assets/Rectangle 27.png";

const Technology = () => {
  return (
    <div>
      <div className="flex gap-20 items-center justify-center py-20">
        <div className="w-1/2">
          <button className="border border-[#4D4C7B] py-2 px-6 rounded-3xl text-[#020043]">
            Service
          </button>
          <h3 className="text-[#020043] py-6 text-4xl font-bold">
            Empowering Health,
            <br /> Enriching Lives
          </h3>
          <p className="text-[#4D4C7B] opacity-70 pb-6">
            We are committed to providing high-quality,
            <br /> compassionate care to every patient we{" "}
            <serve className="br"></serve> Whatever your healthcare needs may
            be, you can trust <br /> us to be your partner in health and
            wellness.
          </p>
          <button className="border bg-[#FFC637] my-6 py-3 px-5 rounded-xl font-semibold">
            Appointment{" "}
            <MdArrowOutward className="inline text-[#020043] size-6" />
          </button>
        </div>

        <div className="w-1/2 relative">
          <img
            className="w-[550px] h-[400px] rounded-[30px]"
            src={image}
            alt=""
          />
          <div className="text-[#FFFFF5] opacity-60 absolute bottom-5 left-5 p-5 rounded-3xl bg-[#020043] w-[320px] h-[144px]">
            <h5 className=" font-bold text-[20px] py-2">Advanced Technology</h5>
            <p className="text-[12px]">
              Our surgeons are trained in the latest <br /> robotic surgical
              techniques, which <br /> allow for greater precision
            </p>
            <div className="relative">
              <MdArrowOutward className="inline float-right absolute right-0 bottom-1 bg-[#FFC637] rounded-full  text-[#FFFFF5] p-1 size-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
      <div className="w-1/2 relative">
          <img
            className="w-[550px] h-[400px] rounded-[30px]"
            src={image2}
            alt=""
          />
          <div className="text-[#FFFFF5] opacity-60 absolute bottom-5 left-5 p-5 rounded-3xl bg-[#020043] w-[320px] h-[144px]">
            <h5 className=" font-bold text-[20px] py-2">Online Doctor Meet</h5>
            <p className="text-[12px]">
            Our surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision
            </p>
            <div className="relative">
              <MdArrowOutward className="inline float-right absolute right-0 bottom-1 bg-[#FFC637] rounded-full  text-[#FFFFF5] p-1 size-8" />
            </div>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img
            className="w-[550px] h-[400px] rounded-[30px]"
            src={image3}
            alt=""
          />
          <div className="text-[#FFFFF5] opacity-60 absolute bottom-5 left-5 p-5 rounded-3xl bg-[#020043] w-[320px] h-[144px]">
            <h5 className=" font-bold text-[20px] py-2">Consultancy your health</h5>
            <p className="text-[12px]">
            Our surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision
            </p>
            <div className="relative">
              <MdArrowOutward className="inline float-right absolute right-0 bottom-1 bg-[#FFC637] rounded-full  text-[#FFFFF5] p-1 size-8" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Technology;
