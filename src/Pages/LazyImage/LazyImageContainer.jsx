import LazyImage from "./LazyImage";

const LazyImageContainer = () => {

    const image = {
        alt: 'Example Image',
        src: 'https://images.pexels.com/photos/15737944/pexels-photo-15737944/free-photo-of-woman-posing-in-a-suit-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // width: 400,
        // height: 300,
        caption: 'Example Image Caption',
    };
    // const image1 = {
    //     alt: 'Example Image',
    //     src: 'https://images.pexels.com/photos/15737944/pexels-photo-15737944/free-photo-of-woman-posing-in-a-suit-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //     width: 500,
    //     height: 300,
    //     caption: 'Example Image Caption',
    // };

    const array = [image]

    return (
        <div>
            <div>
                <h1>My App</h1>
                {
                    array.map(image => <LazyImage
                      key={image.width}
                      image={image}
                    ></LazyImage>)
                }
            </div>
        </div>
    );
};

export default LazyImageContainer;