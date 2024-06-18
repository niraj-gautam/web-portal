import React from "react";
import "./hero.scss";
import Button from "../button/Button";
import { HeroData } from "../../data";

const Hero = () => {
    return (
        <section className="section hero" id="home" aria-label="hero">
            <div className="container">
                <div className="hero-content">
                    <p className="hero-subtitle">{HeroData.companyName}</p>

                    <h1 className="h1 hero-title">{HeroData.title}</h1>

                    <p className="hero-text">{HeroData.text}</p>

                    <Button
                        type={HeroData.button.type}
                        value={HeroData.button.value}
                        link={HeroData.button.link}
                    />
                </div>

                <figure className="hero-banner">
                    <img
                        src={HeroData.image}
                        width="720"
                        height="673"
                        alt="hero banner"
                        className="w-100"
                    />
                </figure>
            </div>
        </section>
    );
};

export default Hero;
