import logo from "../../assets/logo dark.png"

const Navbar = () => {
    return (
        <div className="flex gap-4 justify-between items-center">
            <img src={logo} alt="" />
            <div>
                <ul className="flex gap-6 text-[#020043]">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            </div>
            <button className="py-3 px-6 rounded-xl font-semibold border border-[#343268] text-[#020043]">Appointment</button>
        </div>
    );
};

export default Navbar;