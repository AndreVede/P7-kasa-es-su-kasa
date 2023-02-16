import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
    return (
        <article className="not-found">
            <section className="not-found__content">
                <h1 className="not-found__content__title">404</h1>
                <p className="not-found__content__message">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </section>

            <Link to="/" className="not-found__redirection">
                Retourner sur la page d’accueil
            </Link>
        </article>
    );
};

export default PageNotFound;
