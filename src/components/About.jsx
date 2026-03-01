import { motion } from 'framer-motion';

const About = () => {
    const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'];

    return (
        <section id="about" className="py-20 relative bg-[#0f172a] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-[var(--color-accent)]">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-1/2"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-slate-200">
                            Frontend Developer with <span className="text-[var(--color-accent)]">2 Years</span> of Experience
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Hello! I'm Jyoti Patil, a dedicated Frontend Developer who thrives on creating interactive, user-friendly, and modern web applications. My journey in web development has been fueled by a passion for continuous learning and a keen eye for exceptional UI/UX design.
                        </p>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            With a solid foundation in modern frontend frameworks like React.js and Next.js, combined with deep knowledge of HTML5, CSS3, and JavaScript, I build scalable applications that deliver outstanding performance and SEO optimization.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-[var(--color-accent)]/50 transition-colors">
                                <div className="text-3xl font-bold text-[var(--color-accent)] mb-1">2+</div>
                                <div className="text-slate-300 text-sm">Years Experience</div>
                            </div>
                            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                                <div className="text-3xl font-bold text-purple-500 mb-1">10+</div>
                                <div className="text-slate-300 text-sm">Projects Completed</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mini Skills Grid Image Replacement */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:w-1/2 w-full"
                    >
                        <div className="relative">
                            {/* Decorative background block */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/20 to-purple-600/20 rounded-2xl blur-xl -z-10 absolute"></div>

                            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700 shadow-2xl">
                                <h4 className="text-xl font-medium mb-6 text-slate-200 border-b border-slate-700 pb-2">Core Arsenal</h4>
                                <div className="flex justify-center items-center h-full">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                                        {skills.map((skill, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="bg-slate-900/80 p-4 rounded-xl text-center border border-slate-700 hover:border-[var(--color-accent)] shadow-lg hover:shadow-[var(--color-accent)]/20 transition-all cursor-default"
                                            >
                                                <span className="text-slate-300 font-medium text-sm">{skill}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
