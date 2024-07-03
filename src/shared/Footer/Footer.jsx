import logo from "../../assets/logo light.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center  gap-4  bg-[#020043] text-[#FFFFF5]  px-16 py-16">
      <div className="opacity-80">
        <img className="py-4" src={logo} alt="" />
        <p>123 Main Street Anytown, USA</p>
        <p>Postal Code: 12345</p> <br />
        <p>Support: support@oyolloo.com</p>
        <p>(Available : 10:00am to 07:00pm)</p>
      </div>
      <div className="text-[14px] mt-10 opacity-80">
        <ul className="space-y-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Success Page</a>
          </li>
          <li>
            <a href="#">Terms and condition</a>
          </li>
        </ul>
      </div>
      <div className="text-[14px] mt-10 opacity-80">
        <ul className="space-y-4">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Scheduling</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Patient Portal</a>
          </li>
        </ul>
      </div>
      <div className="mt-10 opacity-80">
        <p>Follow Us</p>
        <div className="flex py-2">
          <FacebookRoundedIcon className="mx-2" />
          <InstagramIcon className="mx-2" />
          <LinkedInIcon className="mx-2" />
          <YouTubeIcon className="mx-2" />
        </div>
       <p className="mt-8"> @docplus 2024</p>
      </div>
    </div>
  );
};

export default Footer;
