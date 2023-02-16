import React from 'react';
import { Link } from 'react-router-dom';

interface LocationCardProps {
    id: string;
    title: string;
    cover: string;
}

const CardLocation: React.FC<LocationCardProps> = ({ id, title, cover }) => {
    return (
        <Link to={'/Fiche_Logement?id=' + id} className="card-location">
            <div className="card-location__content">
                <h2 className="card-location__content__title">{title}</h2>
                <img
                    src={cover}
                    alt={title}
                    className="card-location__content__img"
                />
            </div>
        </Link>
    );
};

export default CardLocation;
