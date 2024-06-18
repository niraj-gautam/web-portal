import React from "react";
import "./projectCard.scss";
import Button from "../../button/Button";
import { projectData } from "../../../data";

const ProjectCard = ({ data }) => {
    return (
        <li>
            <div className="project-card">
                <figure
                    className="card-banner img-holder"
                    style={{ "--width": 510, "--height": 700 }}
                >
                    <img
                        src={`http://localhost:1337${data.image}`}
                        width="510"
                        height="700"
                        loading="lazy"
                        alt={data.title}
                        className="img-cover"
                    />
                </figure>

                <div className="card-content">
                    <p className="card-subtitle">{data.category}</p>

                    <h3 className="h3">
                        <a href="#" className="card-title">
                            {data.title}
                        </a>
                    </h3>

                    <Button
                        type={projectData.button.type}
                        value={projectData.button.value}
                    />
                </div>
            </div>
        </li>
    );
};

export default ProjectCard;
