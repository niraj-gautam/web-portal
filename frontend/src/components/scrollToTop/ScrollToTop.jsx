import React, { useState, useEffect } from "react";
import "./scrollToTop.scss";
import { scrollToTopData } from "../../data";

const ScrollToTop = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
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

    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <a
            href="#home"
            aria-label="back to top"
            data-back-top-btn
            className={`back-top-btn ${isActive ? "active" : null}`}
            onClick={goToTop}
        >
            {scrollToTopData.icon}
        </a>
    );
};

export default ScrollToTop;
