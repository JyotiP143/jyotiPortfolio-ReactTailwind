import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaSearchPlus, FaServer } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: 'Website Development',
            description: 'Building fast, responsive, and dynamic websites using React.js, Next.js, and modern CSS frameworks.',
            icon: <FaLaptopCode />
        },
        {
            title: 'Responsive Design',
            description: 'Ensuring your website looks pixel-perfect and functions flawlessly across all devices and screen sizes.',
            icon: <FaMobileAlt />
        },
        {
            title: 'SEO Optimization',
            description: 'Implementing On-page SEO strategies to improve visibility, ranking, and organic traffic to your web applications.',
            icon: <FaSearchPlus />
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive, engaging, and premium user interfaces that provide an exceptional user experience.',
            icon: <FaPaintBrush />
        },
        {
            title: 'Website Hosting Support',
            description: 'Assisting with deployment processes and managing hosting on platforms like Vercel, Netlify, and custom servers.',
            icon: <FaServer />
        }
    ];

    return (
        <section id="services" className="py-20 relative bg-[#0f172a] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-[var(--color-accent)]">Services</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-purple-500 mx-auto rounded-full"></div>
                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
                        I offer a wide range of frontend development services to help you build, launch, and scale your digital products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-[var(--color-accent)] transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-[var(--color-accent)] text-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-slate-900 transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-100 mb-4">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
