import React, { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import MobileNav from './components/Layout/MobileNav';
import MainContent from './components/Layout/MainContent';
import Cursor from './components/Layout/Cursor';
import Preloader from './components/Layout/Preloader';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Service from './components/Sections/Service';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';

function App() {
    const [activeSection, setActiveSection] = useState(() => {
        return localStorage.getItem('activeSection') || 'home';
    });
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        localStorage.setItem('activeSection', activeSection);
    }, [activeSection]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'home': return <Home theme={theme} />;
            case 'about': return <About theme={theme} />;
            case 'service': return <Service theme={theme} />;
            case 'portfolio': return <Portfolio theme={theme} />;
            case 'contact': return <Contact theme={theme} />;
            default: return <Home theme={theme} />;
        }
    };

    return (
        <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-white selection:text-black transition-colors duration-500">
            <Preloader onComplete={() => setIsInitialLoad(false)} />
            <Cursor />

            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} toggleTheme={toggleTheme} />
            <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} toggleTheme={toggleTheme} />
            <MainContent>
                <div key={activeSection} className={`${!isInitialLoad ? 'animate-pageEntrance' : 'opacity-0'}`}>
                    {renderSection()}
                </div>
            </MainContent>
        </div>
    );
}

export default App;
