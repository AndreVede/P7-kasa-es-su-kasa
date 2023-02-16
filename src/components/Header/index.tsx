import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoApp from '../LogoApp';

const Header: React.FC = () => {
    return (
        <header className="header-app">
            <LogoApp variant="header" />
            <nav className="header-app__nav">
                <ul className="header-app__nav__liste">
                    <li className="header-app__nav__liste__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                [
                                    'header-app__nav__liste__item__link',
                                    isActive
                                        ? 'header-app__nav__liste__item__link--active'
                                        : null,
                                ]
                                    .filter(Boolean)
                                    .join(' ')
                            }
                            end
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header-app__nav__liste__item">
                        <NavLink
                            to="/A_Propos"
                            className={({ isActive }) =>
                                [
                                    'header-app__nav__liste__item__link',
                                    isActive
                                        ? 'header-app__nav__liste__item__link--active'
                                        : null,
                                ]
                                    .filter(Boolean)
                                    .join(' ')
                            }
                            end
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
