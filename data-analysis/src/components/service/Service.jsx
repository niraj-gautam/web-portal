import React from "react";
import "./service.scss";
import ServiceCard from "./serviceCard/ServiceCard";
import { serviceData } from "../../data";
import useFetch from "../../hooks/useFetch";

const Service = () => {
    const { data, error, isLoading } = useFetch(
        "http://localhost:1337/api/services?populate=*"
    );

    if (isLoading)
        return (
            <section
                className="section service"
                id="service"
                aria-label="service"
            >
                <div className="container">
                    <h2 className="h2 section-title">{serviceData.title}</h2>

                    <p className="section-text">{serviceData.text}</p>
                    <h1 style={{ textAlign: "center" }}>Data is Loading</h1>
                </div>
            </section>
        );
    if (error)
        return (
            <section
                className="section service"
                id="service"
                aria-label="service"
            >
                <div className="container">
                    <h2 className="h2 section-title">{serviceData.title}</h2>

                    <p className="section-text">{serviceData.text}</p>
                    <h1 style={{ textAlign: "center" }}>
                        {error.message +
                            ". There was error getting the services"}
                    </h1>
                </div>
            </section>
        );

    return (
        <section className="section service" id="service" aria-label="service">
            <div className="container">
                <h2 className="h2 section-title">{serviceData.title}</h2>

                <p className="section-text">{serviceData.text}</p>

                <ul className="grid-list">
                    {data &&
                        data.data.map((service, index) => {
                            const { id, attributes } = service;
                            const { title, description, icon } = attributes;

                            return (
                                <ServiceCard
                                    key={index}
                                    data={{
                                        title,
                                        text: description,
                                        icon,
                                    }}
                                />
                            );
                        })}
                </ul>
            </div>
        </section>
    );
};

export default Service;
