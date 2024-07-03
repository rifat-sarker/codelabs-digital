import Banner from "./Banner/Banner";
import Discount from "./Discount/Discount";
import Feedback from "./Feedback/Feedback";
import Questions from "./Questions/Questions";
import Service from "./Service/Service";
import Summary from "./Summary/Summary";
import Technology from "./Technology/Technology";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Summary/>
            <Service/>
            <Technology/>
            <Feedback/>
            <Questions/>
            <Discount/>
        </div>
    );
};

export default Home;