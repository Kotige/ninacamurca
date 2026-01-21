import Navbar from "../../Components/Navbar";
import Hero from "./Hero"
import AboutMe from "./AboutMe"
import Jobs from "./Jobs"
import Feedback from "./Feedbacks";
import Contact from "./Contact";
import Footer from "../../Components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Jobs />
            <Feedback />
            <Contact />
            <Footer />
        </>
    )
}
