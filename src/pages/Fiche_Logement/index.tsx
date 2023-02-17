import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FicheLogementContent = React.lazy(
    () => import('../../components/FicheLogementContent')
);

const FicheLogement: React.FC = () => {
    const navigate = useNavigate();

    // redirection
    const [notFound, setNotFound] = useState<boolean>(false);
    const notFoundRedirect = useEffect(() => {
        if (notFound) {
            navigate('/404');
        }
    }, [notFound, navigate]);

    // Prend le paramètre d'url useParams :id
    const { idLocation } = useParams();

    // Redirection si pas d'id
    if (typeof idLocation === 'undefined' || idLocation === null) {
        setNotFound(true);
    }

    return (
        <>
            {idLocation && (
                <Suspense fallback={<div>Loading ...</div>}>
                    <FicheLogementContent
                        idLocation={idLocation}
                        notFound={notFound}
                        setNotFound={setNotFound}
                    />
                </Suspense>
            )}
        </>
    );
};

export default FicheLogement;
