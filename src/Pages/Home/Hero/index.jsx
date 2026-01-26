import "./styles.scss"

import heroImg from "../../../assets/images/hero/1.png"

import { FaWhatsapp } from "react-icons/fa";
import { m, motion } from "framer-motion";
import { Md10K } from "react-icons/md";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
}

const item = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}



export default function Hero() {

    return (
        <section id="home" className="min-h-screen flex items-center px-6 mt-8 md:mt-0">
            <div className="
                w-full max-w-6xl
                mx-auto
                grid
                grid-cols-1
                md:grid-cols-2
                gap-10
                items-center
            ">
                {/* Conteúdo  */}
                <motion.div 
                    className="text-center md:text-start md:mx-9 mt-6 md:mt-0 md:px-9"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.p 
                        className="text-4xl md:text-xl lg:text-3xl text-[#25241F] -mb-5 md:-mb-3"
                        variants={item}
                    >
                        Olá, <br className="hidden md:block" /> eu sou a
                    </motion.p>
                    <motion.h1 
                        className="text-9xl md:text-7xl lg:text-8xl font-bold leading-tight "
                        variants={item}
                    >
                        Nina
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-base lg:text-xl leading-relaxed mb-6 text-[#25241F] -mt-5 md:-mt-3"
                        variants={item}
                    >
                        Transformo ideias em imagens, <br className="md:hidden lg:block"/>
                        estratégias em resultados.
                    </motion.p>
                    <motion.button className="
                        inline-flex
                        items-center
                        justify-center
                        px-8
                        py-1
                        bg-[#5A4A3B]
                        text-[#F2E6D8]
                        text-lg
                        font-normal
                        transition
                        styled-border
                        cursor-pointer
                    "
                    variants={item}
                    whileHover={{opacity: 0.8}}
                    >
                        <FaWhatsapp className="me-2" /> Fale comigo
                    </motion.button>
                </motion.div>

                {/* Imgem  */}
                <motion.div className="flex justify-center "
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.6}}
                >
                    <img 
                        src={heroImg} 
                        alt="Foto da Nina" 
                        className="
                            w-[70%]
                            lg:w-[60%]
                        "
                    />
                </motion.div>
            </div>
        </section>
    )
}