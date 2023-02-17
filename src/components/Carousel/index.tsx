import React, { useState } from 'react';

interface CarouselProps {
    images: string[];
}

interface ButtonMovePicProps {
    orientation: 'left' | 'right';
    callback: Function;
}

const ButtonMovePic: React.FC<ButtonMovePicProps> = ({
    orientation,
    callback,
}) => {
    return (
        <svg
            onClick={() => callback()}
            role="button"
            className={'carousel-button carousel-button--' + orientation}
            viewBox="0 0 79.199974 46.680016"
            fill="none"
            version="1.1"
            id="svg4"
        >
            <path
                d="m 72.11998,46.680016 7.079995,-7.12 L 39.6,7.5195313e-7 -1.4984131e-7,39.600016 7.0799999,46.680016 39.6,14.160016 Z"
                fill="white"
                id="path2"
                style={{ fill: '#ffffff' }}
            />
        </svg>
    );
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [translateX, setTranslateX] = useState<number>(1);
    const imagesCount = images.length;

    const movePic = function (direction: 'left' | 'right') {
        if (direction === 'left') {
            // left
            let newItem = translateX - 1;
            if (newItem <= 0) {
                newItem = imagesCount - 1;
            }
            setTranslateX(newItem);
        } else {
            // right
            let newItem = translateX + 1;
            if (newItem >= imagesCount) {
                newItem = 1;
            }
            setTranslateX(newItem);
        }
    };

    return (
        <div className="carousel">
            <ButtonMovePic
                orientation="left"
                callback={() => movePic('left')}
            />
            <ButtonMovePic
                orientation="right"
                callback={() => movePic('right')}
            />
            <div
                className="carousel__view"
                style={{
                    transform:
                        'translatex(-' + (translateX * 100).toString() + '%)',
                }}
            >
                {images.map((srcImg, i) => (
                    <div className="carousel__view__item">
                        <img
                            key={i.toString() + 'picture'}
                            src={srcImg}
                            alt="images de description"
                            className="carousel__view__pic"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
