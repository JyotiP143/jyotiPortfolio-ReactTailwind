import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Services', to: 'services' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-tighter">
                    <span className="text-[var(--color-accent)]">J</span>yoti
                    <span className="text-[var(--color-accent)]">.</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                            className="text-slate-300 hover:text-white cursor-pointer text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-slate-300 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-[#0f172a]/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-6 border-t border-slate-800' : 'max-h-0'
                    }`}
            >
                <div className="flex flex-col items-center space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-300 hover:text-[var(--color-accent)] cursor-pointer text-lg font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
