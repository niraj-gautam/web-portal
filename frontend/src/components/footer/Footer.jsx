import React from "react";
import "./footer.scss";
import { footerData } from "../../data";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright">
                    {footerData.copyrightText}
                    <a
                        href={footerData.linkToOwner}
                        target="blank"
                        className="copyright-link"
                    >
                        {footerData.owner}
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
