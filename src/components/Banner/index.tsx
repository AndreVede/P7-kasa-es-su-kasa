import React from 'react';

interface BannerProps {
    text?: string;
    imgSrc: string;
    imgAlt: string;
}

const Banner: React.FC<BannerProps> = ({ text, imgSrc, imgAlt }) => {
    return (
        <div className="banner">
            <img src={imgSrc} alt={imgAlt} className="banner__img" />
            {!!text && <span className="banner__text">{text}</span>}
        </div>
    );
};

export default Banner;
