import "./Slider.css"
import 'swiper/css';

const Slider = () => {
    return (
        <section className="main swiper mySwiper">
            <div className="wrapper swiper-wrapper">
                <div className="slide">
                    <img className="image" src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="image-text">
                        <span className="text text-white">
                            Lorem ipsum dolor sit amet consectetur.
                        </span>
                        <h2 className="text-4xl text-white">Lorem ipsum dolor sit amet.</h2>
                        <a className="border inline-block px-[20px] bg-white py-[10px] mt-[20px]" href="">About us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;