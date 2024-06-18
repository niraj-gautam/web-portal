import React from "react";
import "./project.scss";
import ProjectCard from "./projectCard/ProjectCard";
import { projectData } from "../../data";
import useFetch from "../../hooks/useFetch";

const Project = () => {
    const { data, error, isLoading } = useFetch(
        "http://localhost:1337/api/projects?populate=*"
    ); // Adjust the URL as needed

    if (isLoading)
        return (
            <section
                className="section project"
                id="project"
                aria-label="project"
            >
                <div className="container">
                    <h2 className="h2 section-title">{projectData.title}</h2>

                    <p className="section-text">{projectData.text}</p>

                    <ul className="grid-list">
                        <h1 style={{ textAlign: "center" }}>
                            The Projects are loading...
                        </h1>
                    </ul>
                </div>
            </section>
        );
    if (error)
        return (
            <section
                className="section project"
                id="project"
                aria-label="project"
            >
                <div className="container">
                    <h2 className="h2 section-title">{projectData.title}</h2>

                    <p className="section-text">{projectData.text}</p>

                    <ul className="grid-list">
                        <h1 style={{ textAlign: "center" }}>
                            There was error getting the projects.
                        </h1>
                    </ul>
                </div>
            </section>
        );

    return (
        <section className="section project" id="project" aria-label="project">
            <div className="container">
                <h2 className="h2 section-title">{projectData.title}</h2>

                <p className="section-text">{projectData.text}</p>

                <ul className="grid-list">
                    {data &&
                        data.data.map((project, index) => {
                            const { attributes } = project;
                            const { title, category, coverImage } = attributes;

                            return (
                                <ProjectCard
                                    key={index}
                                    data={{
                                        title,
                                        category,
                                        image: coverImage.data.attributes.url, // Use the URL of the small format image
                                    }}
                                />
                            );
                        })}
                </ul>
            </div>
        </section>
    );
};

export default Project;
