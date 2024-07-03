import image1 from "../../../assets/Group 12.png";
import image2 from "../../../assets/contract (1) 1.png";
import image3 from "../../../assets/Group 7.png";
import image4 from "../../../assets/Group (1).png";
import image5 from "../../../assets/Group (2).png";
import { PiStarFill } from "react-icons/pi";
const Summary = () => {
  return (
    <div className="flex py-4 gap-4 justify-center items-center ">
      <div className="p-4 w-[216px] h-[312px] rounded-2xl border  bg-[#FBFBFB] text-[#020043] shadow-2xl">
        <h3 className="font-bold text-[40px]">90%</h3>
        <p className="text-[14px]">
          Patient satisfaction rate, reflecting our commitment.
        </p>
        <img className="size-32 my-6 mx-auto" src={image1} alt="" />
      </div>
      <div>
        <h4 className="text-[#020043] font-bold text-5xl text-center pb-6 ">
          Comprehensive Care for Every Patient
        </h4>
        <div className="flex gap-4 justify-around  items-center ">
          <div className="border bg-[#FFFFF5] p-4 rounded-2xl w-[216px] h-[190px] shadow-sm">
            <h3 className="font-bold text-[40px] text-[#020043]">500+</h3>
            <p className="text-[14px] text-[#343268] opacity-80">
              Board-certified <br /> doctors
            </p>
            <img className="size-[77px] pb-4 float-end" src={image2} alt="" />
          </div>
          <div className="w-[216px] h-[162px] bg-[#FBFBFB] border rounded-2xl p-4 shadow-lg">
           <div className="flex gap-4 items-center">
           <h3 className="font-bold text-[40px] text-[#020043]">4.8</h3>
           <PiStarFill size={"30px"} color="#FFE03D" />
           </div>
            <p className="text-[14px] text-[#343268] py-2">
            Over 20,000 Patient
            </p>
            <img className="w-[100px] h-[45px]  p-2 " src={image3} alt="" />
          </div>
          <div className="border bg-[#FFFFF5] p-4 rounded-2xl w-[216px] h-[190px] shadow-sm">
            <h3 className="font-bold text-[40px] text-[#020043]">$5000</h3>
            <p className="text-[14px] text-[#343268] opacity-80">
            Money spend
            for poor patient
            </p>
            <img className="w-[90px] h-[72px] pb-4  float-end" src={image4} alt="" />
          </div>
        </div>
      </div>
      <div className="p-4 w-[216px] h-[312px] rounded-2xl border bg-[#FBFBFB] text-[#020043] shadow-2xl">
        <h3 className="font-bold text-[40px]">50+</h3>
        <p className="text-[14px] py-2">
        Free lession video 
        for patient
        </p>
        <img className="size-32 my-4 mx-auto" src={image5} alt="" />
      </div>
    </div>
  );
};

export default Summary;
