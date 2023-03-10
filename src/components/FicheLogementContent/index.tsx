import React, { useEffect } from 'react';
import Carousel from '../Carousel';
import ProfilePic from '../ProfilPic';
import Rating from '../Rating';

import { Location } from '../../models/Location';

import data from '../../data/logements.json';
import Accordion from '../Accordion';

/**
 * Jump lines when spaces were.
 * @param data The string for start containing spaces.
 * @returns The string with jump line when spaces were.
 */
const jumpForEachWord = function (data: string): string {
    return data.split(' ').join('\n');
};

interface FicheLogementContentProps {
    idLocation: string;
    notFound: boolean;
    setNotFound: React.Dispatch<React.SetStateAction<boolean>>;
}

let location: Location | undefined;

const FicheLogementContent: React.FC<FicheLogementContentProps> = ({
    idLocation,
    notFound,
    setNotFound,
}) => {
    const getLocation = useEffect(() => {
        if (!data.find(loc => loc.id === idLocation)) {
            setNotFound(true);
        }
    }, [idLocation, setNotFound]);

    location = data.find(loc => loc.id === idLocation);

    return (
        <>
            {location && (
                <article className="fiche-logement">
                    <Carousel images={location.pictures} />
                    <div className="fiche-logement__header">
                        <div className="fiche-logement__header__location-infos">
                            <div className="fiche-logement__header__location-infos__presentation">
                                <h1 className="fiche-logement__header__location-infos__presentation__title">
                                    {location.title}
                                </h1>
                                <span className="fiche-logement__header__location-infos__presentation__localisation">
                                    {location.location}
                                </span>
                            </div>
                            <ul className="fiche-logement__header__location-infos__tags-list">
                                {location.tags.map(tag => (
                                    <li
                                        key={tag + idLocation}
                                        className="fiche-logement__header__location-infos__tags-list__item"
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="fiche-logement__header__infos">
                            <div className="fiche-logement__header__infos__profil">
                                <span className="fiche-logement__header__infos__profil__name">
                                    {jumpForEachWord(location.host.name)}
                                </span>

                                <ProfilePic
                                    pict={location.host.picture}
                                    alt={location.id + ' photo de profil'}
                                />
                            </div>
                            <Rating rating={Number(location.rating)} />
                        </div>
                    </div>
                    <div className="fiche-logement__content">
                        <Accordion title="Description" variant="fiche-logement">
                            <p className="fiche-logement__content__description">
                                {location.description}
                            </p>
                        </Accordion>
                        <Accordion title="??quipements" variant="fiche-logement">
                            <ul className="fiche-logement__content__list">
                                {location.equipments.map(equip => (
                                    <li
                                        key={idLocation + '-' + equip}
                                        className="fiche-logement__content__list__item"
                                    >
                                        {equip}
                                    </li>
                                ))}
                            </ul>
                        </Accordion>
                    </div>
                </article>
            )}
        </>
    );
};

export default FicheLogementContent;
