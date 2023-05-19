// import React from 'react';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ image }) => {

    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div>
            <LazyLoadImage
                alt={image.alt}
                height={image.height}
                src={image.src}
                effect="blur"
                threshold={50}
                width={image.width}
                afterLoad={handleImageLoad} />
            <span className={`lazy-image-caption ${isLoaded ? 'loaded' : ''}`}>
                {image.caption}
            </span>
        </div>
    );
};

export default LazyImage;