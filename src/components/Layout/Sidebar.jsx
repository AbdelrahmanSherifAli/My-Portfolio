import React from 'react';

const Sidebar = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'service', label: 'Service' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <div className="w-[400px] h-screen fixed left-0 top-0 bg-[var(--bg-secondary)] z-50 px-16 pt-32 pb-10 hidden lg:flex flex-col justify-start items-start transition-colors duration-500">

            {/* Logo Section - Top */}
            <div className="logo cursor-pointer mb-12 ml-0" onClick={() => setActiveSection('home')}>
                <img
                    src={theme === 'light' ? "/light mode logo.png" : "/my_logo.png"}
                    alt="Abdelrahman Sherif"
                    className="h-48 w-auto object-contain object-left"
                />
            </div>

            {/* Navigation - Center */}
            <nav className="w-full pl-6">
                <ul className="space-y-3">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`relative cursor-pointer transition-all duration-300 text-xl font-medium tracking-wide flex items-center group ${activeSection === item.id
                                ? 'text-white pl-8'
                                : 'text-zinc-500 hover:text-white pl-8'
                                }`}
                        >
                            {/* Vertical Line Indicator */}
                            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] bg-white transition-all duration-300 ${activeSection === item.id ? 'h-6 opacity-100' : 'h-0 opacity-0 group-hover:h-4 group-hover:opacity-50'}`}></div>
                            {item.label}
                        </li>
                    ))}
                    {/* Theme Toggle Integrated */}
                    <li className="pt-8">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] shadow-md hover:scale-110 transition-all duration-300 group ml-8"
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
                    </li>
                </ul>
            </nav>

            {/* Footer - Positioned below nav with spacing */}
            <div className="footer text-zinc-600 text-xs leading-relaxed pl-6 mt-12">
                <p>&copy; 2026 Abdelrahman Sherif</p>
            </div>
        </div>
    );
};

export default Sidebar;
