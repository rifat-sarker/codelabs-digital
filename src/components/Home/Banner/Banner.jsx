import banner from "../../../assets/Rectangle 5.png";

const Banner = () => {
  return (
    <div
      className="h-[470px] rounded-[50px]  my-8 bg-cover  bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, #00C19D00 0%, #02004378 47%), url(${banner})`,
      }}
    >
      {/* <img className="w-full" src={banner} alt="" /> */}
    </div>
  );
};

export default Banner;
