import person1 from "./../../../assets/images/about_us/person.jpg"
import parts from "./../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-8 mt-7">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                    <img src={person1} className=" rounded-lg shadow-2xl w-3/4"/>
                    <img src={parts} className=" rounded-lg shadow-2xl w-1/2 absolute top-1/2 left-1/2 border-8 border-white" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;