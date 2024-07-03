import { MdArrowOutward } from "react-icons/md";
import image from "../../../assets/Rectangle 24.png";
const Service = () => {
  return (
    <div className="flex gap-20 items-center justify-center py-20">
      <div className="w-1/2">
        <button className="border border-[#343268] py-2 px-6 rounded-3xl text-[#020043]">
          Who we are
        </button>
        <h3 className="text-[#020043] py-6 text-4xl font-bold">
          We Help To Get <br /> Soultions
        </h3>
        <p className="text-[#4D4C7B] opacity-70 pb-6">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="border bg-[#FFC637] my-6 py-3 px-5 rounded-xl font-semibold">
          Learn more <MdArrowOutward className="inline text-[#020043] size-6" />
        </button>
      </div>

      <div className="w-1/2 relative">
        <img className="w-[550px] h-[400px]" src={image} alt="" />
        <div className="bg-[#343268] rounded-3xl absolute bottom-[-40px] left-[-80px] text-white p-6  w-[350px]">
          <h4 className="font-semibold text-[26px] ">Our mission is simple</h4>
          <p className="opacity-80 py-4">
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
