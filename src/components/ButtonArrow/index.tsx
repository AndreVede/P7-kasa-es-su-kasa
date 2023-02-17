import React from 'react';

interface ButtonArrowProps {
    callback: Function;
    className?: string;
}

const ButtonArrow: React.FC<ButtonArrowProps> = ({ callback, className }) => {
    return (
        <svg
            className={className ? className : 'arrow-button-default'}
            onClick={() => callback()}
            role="button"
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

export default ButtonArrow;
