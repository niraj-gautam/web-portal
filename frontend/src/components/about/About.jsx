import React from "react";
import "./about.scss";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { aboutData } from "../../data";

const About = () => {
    return (
        <section className="section about" id="about" aria-label="about">
            <div className="container">
                <div
                    className="about-banner img-holder"
                    style={{ "--width": 720, "--height": 960 }}
                >
                    <img
                        src={aboutData.banner}
                        width="720"
                        height="960"
                        loading="lazy"
                        alt="about banner"
                        className="img-cover"
                    />

                    <button className="play-btn" aria-label="Play video">
                        <PlayArrowRoundedIcon className="play-icon" />
                    </button>
                </div>

                <div className="about-content">
                    <h2 className="h2 section-title">{aboutData.title}</h2>

                    <p className="section-text">{aboutData.text}</p>

                    <h3 className="h3">{aboutData.subTitle1}</h3>

                    <p className="section-text">{aboutData.subText1}</p>

                    <h3 className="h3">{aboutData.subTitle2}</h3>

                    <ul className="about-list">
                        {aboutData.subText2.map((item, index) => (
                            <li className="about-item" key={index}>
                                {aboutData.checkIcon}

                                <p className="section-text">{item}</p>
                            </li>
                        ))}
                    </ul>

                    <h3 className="h3">{aboutData.subTitle3}</h3>

                    <p className="section-text">{aboutData.subText3}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
