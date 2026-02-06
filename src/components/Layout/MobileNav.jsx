import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'service', label: 'Service' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleNavClick = (id) => {
        setActiveSection(id);
        setIsOpen(false);
    };

    return (
        <>
            {/* Top Bar */}
            <div className="lg:hidden fixed top-0 left-0 w-full bg-[var(--bg-secondary)] z-50 px-6 py-4 flex justify-between items-center border-b border-[var(--border-color)] h-24 transition-colors duration-500">
                <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
                    <img
                        src={theme === 'light' ? "/light mode logo.png" : "/my_logo.png"}
                        alt="Logo"
                        className="h-28 w-auto object-contain"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] shadow-md transition-all duration-300"
                    >
                        <div className="relative w-5 h-5">
                            <div className={`absolute inset-0 transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </div>
                            <div className={`absolute inset-0 transition-all duration-500 ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                            </div>
                        </div>
                    </button>
                    <button onClick={() => setIsOpen(true)} className="text-[var(--text-primary)]">
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Overlay Menu */}
            <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                {/* Sidebar Content */}
                <div className={`absolute top-0 right-0 h-full w-[300px] bg-zinc-900 border-l border-white/5 flex flex-col transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Sidebar Header */}
                    <div className="flex justify-between items-center px-8 py-8 border-b border-white/5">
                        <span className="text-white font-bold text-xl tracking-widest uppercase">Sherif</span>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-zinc-400">
                            <FaTimes size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-grow flex flex-col justify-center px-12">
                        <ul className="space-y-6 text-right">
                            {menuItems.map((item) => (
                                <li key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`relative text-xl font-medium cursor-pointer transition-all duration-300 group pr-8 ${activeSection === item.id ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
                                >
                                    {item.label}
                                    {/* Vertical Line Indicator (Right Side) */}
                                    <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-[2px] bg-white transition-all duration-300 ${activeSection === item.id ? 'h-6 opacity-100' : 'h-0 opacity-0 group-hover:h-4 group-hover:opacity-50'}`}></div>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-8 text-right text-xs text-zinc-600 border-t border-white/5">
                        <p>&copy; 2026 Abdelrahman Sherif</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
