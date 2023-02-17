import React, { useState } from 'react';
import ButtonArrow from '../ButtonArrow';

interface AccordionProps {
    title: string;
    children?: JSX.Element;
    variant?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, variant }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleAccordion = function (): void {
        setOpen(!open);
    };

    return (
        <div
            className={'accordion' + (variant ? ' accordion--' + variant : '')}
        >
            <div className="accordion__ban" onClick={() => toggleAccordion()}>
                <h3 className="accordion__ban__title">{title}</h3>
                <ButtonArrow
                    callback={() => toggleAccordion()}
                    className={[
                        'accordion__ban__button',
                        open ? 'accordion__ban__button--active' : null,
                    ]
                        .filter(Boolean)
                        .join(' ')}
                />
            </div>
            {open && (
                <div className="accordion__container">
                    <div className="accordion__container__content">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Accordion;
