import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative bg-[#0a0f1e] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-[var(--color-accent)]">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-accent)] to-cyan-500 mx-auto rounded-full"></div>
                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
                        Have a project in mind or looking for a frontend developer? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50">
                            <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] text-xl shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-slate-400 mb-1">Email</h4>
                                        <a href="mailto:jyoti@example.com" className="text-slate-200 hover:text-[var(--color-accent)] transition-colors">
                                            jyoti@example.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] text-xl shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-slate-400 mb-1">Phone</h4>
                                        <p className="text-slate-200">+1 (234) 567-890</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] text-xl shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-slate-400 mb-1">Location</h4>
                                        <p className="text-slate-200">Remote / Worldwide</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h4 className="text-sm text-slate-400 mb-4 uppercase tracking-wider font-semibold">Connect with me</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-colors hover:-translate-y-1 transform duration-300">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-blue-600 transition-colors hover:-translate-y-1 transform duration-300">
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:w-2/3"
                    >
                        <form className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                className="w-full py-4 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-cyan-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--color-accent)]/30 transition-all duration-300"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
