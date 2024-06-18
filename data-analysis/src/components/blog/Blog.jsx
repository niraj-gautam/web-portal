import React from "react";
import "./blog.scss";
import BlogCard from "./blogCard/BlogCard";
import { blogData } from "../../data";
import useFetch from "../../hooks/useFetch";

const Blog = () => {
    const { data, error, isLoading } = useFetch(
        "http://localhost:1337/api/blogs?populate=*"
    );

    if (isLoading)
        return (
            <section className="section blog" id="blog" aria-label="blog">
                <div className="container">
                    <h2 className="h2 section-title">{blogData.title}</h2>

                    <p className="section-text">{blogData.text}</p>
                    <h1 style={{ textAlign: "center" }}>Data is Loading</h1>
                </div>
            </section>
        );
    if (error)
        return (
            <section className="section blog" id="blog" aria-label="blog">
                <div className="container">
                    <h2 className="h2 section-title">{blogData.title}</h2>

                    <p className="section-text">{blogData.text}</p>
                    <h1 style={{ textAlign: "center" }}>
                        {error.message + ". There was error getting the blogs"}
                    </h1>
                </div>
            </section>
        );

    return (
        <section className="section blog" id="blog" aria-label="blog">
            <div className="container">
                <h2 className="h2 section-title">{blogData.title}</h2>

                <p className="section-text">{blogData.text}</p>

                <ul className="grid-list">
                    {data &&
                        data.data.map((blog, index) => {
                            const { attributes } = blog;
                            const { title, publishedDate, article, image } =
                                attributes;
                            const textContent = article
                                .map((section) =>
                                    section.children
                                        .map((child) => child.text)
                                        .join(" ")
                                )
                                .join(" ");

                            return (
                                <BlogCard
                                    key={index}
                                    data={{
                                        title,
                                        content: textContent,
                                        date: new Date(
                                            publishedDate
                                        ).toLocaleDateString(),
                                        dateTime: new Date(
                                            publishedDate
                                        ).toISOString(),
                                        image: image.data.attributes.url,
                                        grid: index === 0,
                                    }}
                                />
                            );
                        })}
                </ul>
            </div>
        </section>
    );
};

export default Blog;
