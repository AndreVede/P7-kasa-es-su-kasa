import React from 'react';
import ProfilePic from '../../components/ProfilPic';
import { Location } from '../../models/Location';

import data from '../../data/logements.json';
import Rating from '../../components/Rating';
import Gallery from '../../components/Gallery';

/**
 * Jump lines when spaces were.
 * @param data The string for start containing spaces.
 * @returns The string with jump line when spaces were.
 */
const jumpForEachWord = function (data: string): string {
    return data.split(' ').join('\n');
};

const FicheLogement: React.FC = () => {
    // Prend le paramètre d'url
    const url = new URL(document.location.href);
    const idLocation = url.searchParams.get('id');

    let location: Location | undefined;

    // Récupération de la location ou redirection
    if (typeof idLocation === 'undefined' || idLocation === null) {
        document.location.href = '/';
    } else {
        location = data.find(loc => loc.id === idLocation);

        if (!location) {
            document.location.href = '/Fiche_Logement/404';
        }
    }

    return (
        <>
            {location && (
                <article className="fiche-logement">
                    <Gallery images={location.pictures} />
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
                        {/* 2 Composants Accordéon */}
                    </div>
                </article>
            )}
        </>
    );
};

export default FicheLogement;
