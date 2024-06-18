import HeroImage from "./assets/images/dataanalysis.svg";
import AboutBanner from "./assets/images/project-1.jpg";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CTABG from "./assets/images/cta-bg.jpg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

// #---------- HEADER ----------#

export const NavItems = [
    { title: "Home", link: "#home" },
    { title: "Services", link: "#service" },
    { title: "Projects", link: "#project" },
    { title: "About Us", link: "#about" },
    { title: "Blog", link: "#blog" },
    { title: "Contact", link: "#contact" },
];

// #---------- HERO ----------#

export const HeroData = {
    companyName: "Data Analysis Agency",
    title: "We are available for analysis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporthem incididunt ut labore et dolore magna aliqua.",
    button: {
        type: "primary",
        value: "Get Started",
        link: "#contact",
    },
    image: HeroImage,
};

// #---------- SERVICE ----------#

export const serviceData = {
    title: "Services We Provide",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
};

// #---------- PROJECT ----------#

export const projectData = {
    title: "Our Recent Projects",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: {
        type: "primary",
        value: "View Details",
        link: "#",
    },
};

// #---------- ABOUT ----------#

export const aboutData = {
    banner: AboutBanner,
    title: "About Us",
    text: "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.",
    subTitle1: "Who We Are",
    subText1:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    subTitle2: "Our Success",
    subText2: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    ],
    checkIcon: <CheckCircleRoundedIcon className="check-icon" />,
    subTitle3: "Our Mission",
    subText3:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique suntin.",
};

// #---------- CTA ----------#

export const ctaData = {
    subTitle: "So What is Next?",
    title: "Are You Ready? Let's get to Work!",
    backgroundImg: CTABG,
    button: {
        type: "secondary",
        value: "Get Started",
        link: "#contact",
    },
};

// #---------- BLOG ----------#

export const blogData = {
    title: "Latest Articles Updated Weekly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

// #---------- CONTACT ----------#

export const contactData = {
    title: "Let's Contact With Us",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: {
        type: "primary",
        value: "Send Message",
        link: "",
    },

    info: {
        mail: {
            title: "Mail Here",
            mailAddress: "devnirajgautam@gmail.com",
            icon: <EmailOutlinedIcon className="icon" />,
        },
        address: {
            title: "Visit Here",
            location: "https://maps.app.goo.gl/m5ko1hydtyuCLTmC8",
            locationName: "Kalanki, Kathmandu, Nepal",
            icon: <LocationOnOutlinedIcon className="icon" />,
        },
        contact: {
            title: "Mail Here",
            number: "+977 9816372933",
            icon: <HeadsetMicOutlinedIcon className="icon" />,
        },
    },
};

// #---------- FOOTER ----------#

export const footerData = {
    copyrightText: "\u00A9 2024 All Rights Reserved by ",
    owner: "Niraj Gautam",
    linkToOwner: "https://www.instagram.com/nirajgautammm/",
};

// #---------- SCROLL TO TOP ----------#

export const scrollToTopData = {
    icon: <ArrowUpwardOutlinedIcon className="icon" />,
};
