import React from 'react';

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((srcImg, i) => (
                <img
                    key={i.toString() + 'picture'}
                    src={srcImg}
                    alt="images de description"
                    className="gallery__pic"
                />
            ))}
        </div>
    );
};

export default Gallery;
