import React, { useState, useEffect } from "react";
import "./header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "../button/Button";
import CloseIcon from "@mui/icons-material/Close";
import { NavItems } from "../../data";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isNavbarActive, setIsNavbarActive] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarActive((prevState) => !prevState);
    };

    const closeNavbar = () => {
        setIsNavbarActive(false);
    };

    useEffect(() => {
        const navbarLinks = document.querySelectorAll("[data-nav-link]");

        if (navbarLinks.length > 0) {
            navbarLinks.forEach((link) => {
                link.addEventListener("click", closeNavbar);
            });
        }

        return () => {
            if (navbarLinks.length > 0) {
                navbarLinks.forEach((link) => {
                    link.removeEventListener("click", closeNavbar);
                });
            }
        };
    }, []);

    return (
        <header className={`header ${isActive ? "active" : null}`} data-header>
            <div className="container">
                <a href="#" className="logo">
                    Analysis
                </a>

                <nav
                    className={`navbar container ${
                        isNavbarActive ? "active" : ""
                    }`}
                    data-navbar
                >
                    <ul className="navbar-list">
                        {NavItems.map((item, index) => (
                            <li key={index}>
                                {NavItems[NavItems.length - 1] != item ? (
                                    <a
                                        href={item.link}
                                        className="navbar-link"
                                        data-nav-link
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    <Button
                                        type={"primary"}
                                        value={item.title}
                                        link={item.link}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="nav-toggle-btn"
                    aria-label="Toggle menu"
                    onClick={toggleNavbar}
                >
                    {isNavbarActive ? (
                        <CloseIcon className="icon close-icon" />
                    ) : (
                        <MenuIcon className="icon menu-icon" />
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
