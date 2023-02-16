import React from 'react';
import CardLocation from '../CardLocation';

import data from '../../data/logements.json';

const ListCardLocation: React.FC = () => {
    return (
        <div className="list-card-location">
            {data.map(location => (
                <CardLocation
                    key={location.id}
                    id={location.id}
                    title={location.title}
                    cover={location.cover}
                />
            ))}
        </div>
    );
};

export default ListCardLocation;
