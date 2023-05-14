import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="mb-7 mt-7">
            <div className="text-center">
                <h2 className="text-5xl">Our services</h2>
                <h2 className="text-2xl">Our service Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima quasi Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit. Nam ipsa qui minus illo? </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service ={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;