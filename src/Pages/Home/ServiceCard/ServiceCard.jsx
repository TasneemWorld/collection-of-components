
const ServiceCard = ({service}) => {
    
    // const {title, img, price} = service

    return (
        <div className="w-[350] h-[350]">
            <div className="card card-compact w-96 bg-base-100 shadow">
                <figure className="p-5 h-[210px] w-full"><img src={service.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>Price :{service.price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;