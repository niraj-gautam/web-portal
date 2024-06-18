import React from "react";
import "./serviceCard.scss";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import AodIcon from "@mui/icons-material/Aod";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BuildIcon from "@mui/icons-material/Build";

const ServiceCard = ({ data }) => {
    const getIcon = (icon) => {
        switch (icon) {
            case "chat":
                return {
                    icon: <ChatBubbleRoundedIcon className="icon" />,
                    background: "mountain-meadow",
                };
            case "monitor":
                return {
                    icon: <DesktopMacIcon className="icon" />,
                    background: "electric-violet",
                };
            case "lightbulb":
                return {
                    icon: <EmojiObjectsRoundedIcon className="icon " />,
                    background: "selective-yellow",
                };
            case "phone":
                return {
                    icon: <AodIcon className="icon " />,
                    background: "coral-red",
                };
            case "build":
                return {
                    icon: <BuildIcon className="icon " />,
                    background: "caribbean-green",
                };
            case "archive":
                return {
                    icon: <Inventory2Icon className="icon " />,
                    background: "outrageous-orange",
                };
        }
    };

    return (
        <li>
            <div className="service-card">
                <div
                    className="card-icon"
                    style={{
                        backgroundColor: `var(--${
                            getIcon(data.icon).background
                        })`,
                    }}
                >
                    {getIcon(data.icon).icon}
                </div>
                <h3 className="h3">
                    <a href="#" className="card-title">
                        {data.title}
                    </a>
                </h3>

                <p className="card-text">{data.text}</p>
            </div>
        </li>
    );
};

export default ServiceCard;
