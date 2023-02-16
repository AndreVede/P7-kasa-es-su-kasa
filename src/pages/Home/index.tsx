import React from 'react';
import Banner from '../../components/Banner';

import plageImg from '../../assets/images/plage.webp';
import ListCardLocation from '../../components/ListCardLocation';

const Home: React.FC = () => {
    return (
        <>
            <Banner
                text="Chez vous, partout et ailleurs"
                imgSrc={plageImg}
                imgAlt="paysage de plage"
            />
            <ListCardLocation />
        </>
    );
};

export default Home;
