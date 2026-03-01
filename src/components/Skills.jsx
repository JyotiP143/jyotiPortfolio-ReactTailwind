import { motion } from 'framer-motion';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiJquery, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
        { name: 'JavaScript', icon: <IoLogoJavascript className="text-[#F7DF1E]" />, level: 85 },
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" />, level: 85 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 80 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3]" />, level: 85 },
        { name: 'jQuery', icon: <SiJquery className="text-[#0769AD]" />, level: 75 },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="skills" className="py-20 relative bg-[#0a0f1e] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-[var(--color-accent)]">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-cyan-500 mx-auto rounded-full"></div>
                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
                        These are the technologies I've worked with over the past 2 years to build responsive, modern, and performant web applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-[var(--color-accent)]/50 rounded-2xl p-6 transition-all shadow-lg hover:shadow-[var(--color-accent)]/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl">{skill.icon}</div>
                                    <h3 className="text-lg font-semibold text-slate-200">{skill.name}</h3>
                                </div>
                                <span className="text-sm font-medium text-[var(--color-accent)]">{skill.level}%</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-slate-700/50 rounded-full h-2 mt-4 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                    className="bg-gradient-to-r from-[var(--color-accent)] to-cyan-600 h-2 rounded-full"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
