import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'Digital Agency / Freelance',
            date: 'Jan 2022 - Present',
            responsibilities: [
                'Developing responsive, mobile-first websites using React.js and Tailwind CSS.',
                'Optimizing website performance and implementing On-page SEO strategies.',
                'Deploying and hosting websites on modern cloud platforms (Vercel, Netlify).',
                'Collaborating with designers to translate UI/UX wireframes into functional code.'
            ]
        },
        {
            title: 'Web Developer Intern',
            company: 'Tech Solutions Inc.',
            date: 'Jun 2021 - Dec 2021',
            responsibilities: [
                'Assisted in building UI components using HTML5, CSS3, and JavaScript.',
                'Worked on resolving cross-browser compatibility issues.',
                'Participated in daily stand-ups and agile development processes.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 relative bg-[#0a0f1e] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-[var(--color-accent)]">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 md:-ml-0.5 w-1 h-full bg-slate-700/50 rounded-full"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-4 border-[var(--color-accent)] z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <FaBriefcase className="text-slate-300 text-sm" />
                            </div>

                            {/* Content Box */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                            >
                                <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-[var(--color-accent)]/50 transition-colors shadow-lg">
                                    <div className="text-[var(--color-accent)] text-sm font-bold tracking-wider mb-2">{exp.date}</div>
                                    <h3 className="text-2xl font-bold text-slate-100 mb-1">{exp.title}</h3>
                                    <h4 className="text-lg font-medium text-slate-400 mb-4">{exp.company}</h4>

                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((req, i) => (
                                            <li key={i} className="flex items-start text-slate-300 text-sm leading-relaxed">
                                                <span className="text-[var(--color-accent)] mr-2 mt-1">▹</span>
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
