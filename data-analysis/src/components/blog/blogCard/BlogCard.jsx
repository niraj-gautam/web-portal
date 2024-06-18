import React from "react";
import "./blogCard.scss";

const BlogCard = ({ data }) => {
    return (
        <li>
            <div className={`blog-card ${data.grid || "grid"}`}>
                <figure
                    className="card-banner img-holder"
                    style={{ "--width": 860, "--height": 646 }}
                >
                    <img
                        src={`http://localhost:1337${data.image}`}
                        width="860"
                        height="646"
                        loading="lazy"
                        alt={data.title}
                        className="img-cover"
                    />
                </figure>

                <div className="card-content">
                    <time className="time" dateTime={data.dateTime}>
                        {data.date}
                    </time>

                    <h3 className="h3">
                        <a href="#" className="card-title">
                            {data.title}
                        </a>
                    </h3>
                </div>
            </div>
        </li>
    );
};

export default BlogCard;
