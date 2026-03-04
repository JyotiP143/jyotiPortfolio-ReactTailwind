import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'E-commerce Website',
            description: 'A fully functional modern e-commerce platform with responsive UI, product listing, and a seamless cart experience.',
            tech: ['React.js', 'Context API', 'Tailwind CSS'],
            liveLink: 'https://ecommerce-react-tailwind-website-2bqoi6jdf.vercel.app/',
            githubLink: 'https://github.com/JyotiP143/ecommerce-ReactTailwindWebsite',
            color: 'from-blue-500 to-cyan-400'
        },
        {
            title: 'Evoxcel Website',
            description: 'A complete business website built for a digital agency. Highly SEO optimized and responsive across all devices.',
            tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
            liveLink: '#',
            githubLink: '#',
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Portfolio UI Project',
            description: 'A modern UI/UX design implementation featuring animated components, complex layouts, and premium aesthetics.',
            tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
            liveLink: 'https://jyoti-portfolio-react-tailwind-898gdkpgc.vercel.app/',
            githubLink: 'https://github.com/JyotiP143/jyotiPortfolio-ReactTailwind',
            color: 'from-emerald-400 to-teal-500'
        },
        {
            title: 'Landing Page Project',
            description: 'A high-converting landing page designed for SEO optimization, combining multiple CSS frameworks for best results.',
            tech: ['HTML5', 'Bootstrap', 'Tailwind CSS'],
            liveLink: '#',
            githubLink: '#',
            color: 'from-orange-500 to-amber-500'
        }
    ];

    return (
        <section id="projects" className="py-20 relative bg-[#0f172a] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-[var(--color-accent)]">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-purple-500 mx-auto rounded-full"></div>
                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
                        Here are some of my significant projects that showcase my frontend skills and ability to build modern applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-[var(--color-accent)]/50 transition-all duration-500"
                        >
                            {/* Decorative gradient background that reveals on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}></div>

                            <div className="p-8 relative z-10 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-[var(--color-accent)] rounded-full border border-slate-600/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700/50">
                                    <a href={project.liveLink} className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] hover:bg-cyan-600 text-white rounded-lg text-sm font-medium transition-colors">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                    <a href={project.githubLink} className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors">
                                        <FaGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
