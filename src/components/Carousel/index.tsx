import React, { useState } from 'react';
import ButtonArrow from '../ButtonArrow';

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
        <ButtonArrow
            className={'carousel-button carousel-button--' + orientation}
            callback={callback}
        />
    );
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [translateX, setTranslateX] = useState<number>(0);
    const imagesCount = images.length;

    const movePic = function (direction: 'left' | 'right') {
        let newItem: number;
        if (imagesCount === 1) {
            // Une seule image...
            newItem = 0;
        } else if (direction === 'left') {
            // left
            newItem = translateX - 1;
            if (newItem < 0) {
                newItem = imagesCount - 1;
            }
        } else {
            // right
            newItem = translateX + 1;
            if (newItem >= imagesCount) {
                newItem = 0;
            }
        }
        setTranslateX(newItem);
    };

    return (
        <>
            {images.length > 0 && (
                <div className="carousel">
                    <ButtonMovePic
                        orientation="left"
                        callback={() => movePic('left')}
                    />
                    <ButtonMovePic
                        orientation="right"
                        callback={() => movePic('right')}
                    />

                    {/* Show index of picture */}
                    <span className="carousel__index">
                        {translateX + 1}/{imagesCount}
                    </span>

                    <div
                        className="carousel__view"
                        style={{
                            transform:
                                'translatex(-' +
                                (translateX * 100).toString() +
                                '%)',
                        }}
                    >
                        {images.map((srcImg, i) => (
                            <div
                                className="carousel__view__item"
                                key={
                                    i.toString() +
                                    Date.now().toString() +
                                    Math.floor(
                                        Math.random() * Date.now()
                                    ).toString()
                                }
                            >
                                <img
                                    src={srcImg}
                                    alt="images de description"
                                    className="carousel__view__pic"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Carousel;
