import React from "react";
import "./cta.scss";
import Button from "../button/Button";
import { ctaData } from "../../data";

const CTA = () => {
    return (
        <section
            className="section cta"
            aria-label="cta"
            style={{ backgroundImage: `url(${ctaData.backgroundImg})` }}
        >
            <div className="container">
                <p className="cta-subtitle">{ctaData.subTitle}</p>

                <h2 className="h2 section-title">{ctaData.title}</h2>

                <Button
                    type={ctaData.button.type}
                    value={ctaData.button.value}
                />
            </div>
        </section>
    );
};

export default CTA;
