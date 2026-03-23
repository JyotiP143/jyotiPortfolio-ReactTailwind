import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            {/* Background Animated Gradient / Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />

            <div className="container mx-auto px-6 md:px-12 z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-block px-4 py-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-semibold tracking-wide"
                    >
                        Welcome to my portfolio
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-purple-500">Jyoti Patil</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-4xl font-medium text-slate-300 mb-8 h-[40px] md:h-[48px]"
                    >
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer',
                                2000,
                                'React Specialist',
                                2000,
                                'UI/UX Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed"
                    >
                        I'm a passionate Frontend Developer with 2 years of experience building modern, responsive, and SEO-friendly web applications using React.js and Tailwind CSS.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-cyan-600 text-white font-semibold cursor-pointer hover:shadow-lg hover:shadow-[var(--color-accent)]/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3.5 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 text-white font-semibold cursor-pointer transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm hover:bg-slate-800"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-slate-400 text-sm mb-2">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-[var(--color-accent)]/50 rounded-full flex justify-center p-1"
                >
                    <div className="w-1.5 h-2.5 bg-[var(--color-accent)] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
