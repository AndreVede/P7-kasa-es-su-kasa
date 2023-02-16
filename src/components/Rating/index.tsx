import React from 'react';

interface RatingProps {
    rating: number;
}

interface StarProps {
    active: boolean;
}

const Star: React.FC<StarProps> = ({ active }) => {
    return (
        <svg className="star" viewBox="0 0 30 30" fill="none">
            <path
                className={['star__path', active ? 'active' : null]
                    .filter(Boolean)
                    .join('--')}
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
            />
        </svg>
    );
};

// Nombre d'étoiles
const starsTotal = 5;

const Rating: React.FC<RatingProps> = ({ rating }) => {
    /**
     * Check the star is active
     * @param index index of star
     * @returns boolean indicate if the star is active
     */
    const checkStarInRating = function (index: number): boolean {
        const test = rating - index;
        // L'index commence à 0. Donc si rating = 3 alors 3-0=3, 3-1=2, 3-2=1, 3-3=0 sauf que celui-là doit être false.
        return test > 0;
    };

    return (
        /* <Star key={'star-' + index.toString()} active={true} /> */
        <div>
            {Array.apply(0, Array(starsTotal)).map((_, i) => (
                <Star
                    key={'star-' + i.toString()}
                    active={checkStarInRating(i)}
                />
            ))}
        </div>
    );
};

export default Rating;
