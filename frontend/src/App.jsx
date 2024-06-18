import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import Project from "./components/project/Project";
import About from "./components/about/About";
import CTA from "./components/cta/CTA";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import useFetch from "./hooks/useFetch";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Service />
                <Project />
                <About />
                <CTA />
                <Blog />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default App;
