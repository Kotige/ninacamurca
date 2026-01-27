import Navbar from "../../Components/Navbar"
import Hero from "./Hero"
import About from "./About"
import Services from "./Services"
import Feedbacks from "./Feedback"
import Contact from "./Contact"
import Footer from "../../Components/Footer"

import "./styles.scss"

export default function Home() {
    return (
        <main className="">
            <div className="bg-home" />
            <div className="">
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Feedbacks />
                <Contact />
                <Footer />
            </div>
        </main>
    )
}