import React from 'react';
import Banner from '../../components/Banner';

import montagneImg from '../../assets/images/montagne.webp';

const APropos: React.FC = () => {
    return (
        <>
            <Banner imgSrc={montagneImg} imgAlt="paysage de montagne" />
        </>
    );
};

export default APropos;
