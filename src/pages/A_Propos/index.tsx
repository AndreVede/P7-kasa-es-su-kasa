import React from 'react';
import Banner from '../../components/Banner';

import montagneImg from '../../assets/images/montagne.webp';
import Accordion from '../../components/Accordion';

const APropos: React.FC = () => {
    return (
        <>
            <Banner imgSrc={montagneImg} imgAlt="paysage de montagne" />
            <div className="a-propos-container">
                <Accordion title="Fiabilité">
                    <p className="a-propos-container__p">
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </p>
                </Accordion>
                <Accordion title="Respect">
                    <p className="a-propos-container__p">
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Accordion>
                <Accordion title="Service">
                    <p className="a-propos-container__p">
                        Nos équipes se tiennent à votre disposition pour vous
                        fournir une expérience parfaite. N'hésitez pas à nous
                        contacter si vous avez la moindre question.
                    </p>
                </Accordion>
                <Accordion title="Responsabilité">
                    <p className="a-propos-container__p">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Accordion>
            </div>
        </>
    );
};

export default APropos;
