import { FaArrowUp, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] border-t border-slate-800 py-8 relative">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">

                <div className="mb-4 md:mb-0">
                    <p className="flex items-center gap-2">
                        &copy; {new Date().getFullYear()} Jyoti Patil. Built with <FaHeart className="text-red-500" /> globally.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="hover:text-[var(--color-accent)] cursor-pointer transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="hover:text-[var(--color-accent)] cursor-pointer transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="hover:text-[var(--color-accent)] cursor-pointer transition-colors"
                    >
                        Projects
                    </Link>

                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[var(--color-accent)] hover:text-white transition-colors cursor-pointer ml-4"
                        aria-label="Back to top"
                    >
                        <FaArrowUp />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
