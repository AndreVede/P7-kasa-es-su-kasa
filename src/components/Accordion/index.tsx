import React, { useEffect, useState } from 'react';
import ButtonArrow from '../ButtonArrow';

interface AccordionProps {
    title: string;
    children?: JSX.Element;
    variant?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, variant }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [onOff, setOnOff] = useState<boolean>(false);

    const animationFadeIn = useEffect(() => {
        if (open) {
            setOnOff(true);
        }
    }, [open]);

    const toggleAccordion = function (): void {
        if (!open) {
            setOpen(true);
        } else {
            setOnOff(false);
        }
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
                        onOff ? 'accordion__ban__button--active' : null,
                    ]
                        .filter(Boolean)
                        .join(' ')}
                />
            </div>
            {open && (
                <div className="accordion__container">
                    <div
                        className="accordion__container__content"
                        style={{
                            transform:
                                open !== onOff
                                    ? 'translateY(-100%)'
                                    : 'translateY(0)',
                        }}
                        onTransitionEnd={() => {
                            if (!onOff) {
                                setOpen(!open);
                            }
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Accordion;
