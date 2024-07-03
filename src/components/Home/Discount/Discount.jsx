import { MdArrowOutward } from "react-icons/md";
import image from "../../../assets/Rectangle 32.png";
import logo from "../../../assets/logo light.png"
const Discount = () => {
  return (
    <div className="py-24">
      <div
        className="relative py-20  bg-cover rounded-[30px] bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to left, transparent 30%, #020043 100%), url(${image})`,
        }}
      >
        <div className="pl-12 flex  justify-start flex-col">
          <h4 className="text-[#FFFFF5] text-[40px] font-bold">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h4>
          <div className="flex gap-4">
            <button className="bg-[#FFC637] my-6 py-3 px-5 rounded-xl font-semibold">
              Appointment{" "}
              <MdArrowOutward className="inline text-[#020043] size-6" />
            </button>
            <button className=" border border-white text-[#FFFFF5] my-6 py-3 px-5 rounded-xl font-semibold">
              Learn More{" "}
              <MdArrowOutward className="inline text-[#FFFFF5] size-6" />
            </button>
          </div>
        </div>
        <img className="absolute right-10 top-10" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Discount;
