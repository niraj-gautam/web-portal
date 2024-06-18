import React from "react";
import "./contact.scss";

import Button from "../button/Button";
import { contactData } from "../../data";

const Contact = () => {
    return (
        <section className="section contact" id="contact" aria-label="contact">
            <div className="container">
                <h2 className="h2 section-title">{contactData.title}</h2>

                <p className="section-text">{contactData.text}</p>

                <form action="" className="contact-form">
                    <div className="input-wrapper">
                        <input
                            type="text "
                            name="name"
                            aria-label="name"
                            placeholder="Your name*"
                            required
                            className="input-field"
                        />

                        <input
                            type="email"
                            name="email_address"
                            aria-label="email"
                            placeholder="Email address*"
                            required
                            className="input-field"
                        />
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="subject"
                            aria-label="subject"
                            placeholder="Subject"
                            className="input-field"
                        />

                        <input
                            type="number"
                            name="phone"
                            aria-label="phone"
                            placeholder="Phone number"
                            className="input-field"
                        />
                    </div>

                    <textarea
                        name="message"
                        aria-label="message"
                        placeholder="Your message...*"
                        required
                        className="input-field"
                    ></textarea>

                    <Button
                        type={contactData.button.type}
                        value={contactData.button.value}
                        link={contactData.button.link}
                    />
                </form>

                <ul className="contact-list">
                    <li className="contact-item">
                        <div className="contact-card">
                            <div className="card-icon">
                                {contactData.info.mail.icon}
                            </div>

                            <div className="card-content">
                                <h3 className="h3 card-title">
                                    {contactData.info.mail.title}
                                </h3>

                                <a
                                    href={`mailto:${contactData.info.mail.mailAddress}`}
                                    className="card-link"
                                >
                                    {contactData.info.mail.mailAddress}
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="contact-card">
                            <div className="card-icon">
                                {contactData.info.address.icon}
                            </div>

                            <div className="card-content">
                                <h3 className="h3 card-title">
                                    {contactData.info.address.title}
                                </h3>

                                <a
                                    href={contactData.info.address.location}
                                    className="card-link"
                                    target="blank"
                                >
                                    {contactData.info.address.locationName}
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="contact-card">
                            <div className="card-icon">
                                {contactData.info.contact.icon}
                            </div>

                            <div className="card-content">
                                <h3 className="h3 card-title">
                                    {contactData.info.contact.title}
                                </h3>

                                <a
                                    href={`tel:${contactData.info.contact.number
                                        .split(" ")
                                        .join("")}`}
                                    className="card-link"
                                >
                                    {contactData.info.contact.number}
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contact;
