

// import Banner from "../BannerSection/Banner";
import About from "../About/About";
import Slider from "../BannerSection/Slider";
import Slider3 from "../BannerSection/Slider3";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Slider3></Slider3>
            <About></About>
            <Services></Services>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Home;