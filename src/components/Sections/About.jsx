import React, { useState, useEffect } from 'react';

const SkillBar = ({ name, level }) => {
    const [width, setWidth] = React.useState('0%');
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Slight delay for smoother feel
                    setTimeout(() => setWidth(level), 200);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [level]);

    return (
        <div ref={ref} className="group cursor-default">
            <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-white">
                <span className="text-white">{name}</span>
                <span className="text-zinc-500 group-hover:text-white transition-colors duration-300">{level}</span>
            </div>
            <div className="h-[2px] bg-zinc-800 w-full overflow-hidden">
                <div
                    className="h-full bg-white transition-all duration-[2500ms] ease-out group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] group-hover:scale-y-[2] origin-left"
                    style={{ width: width }}
                ></div>
            </div>
        </div>
    );
};

const About = ({ theme }) => {
    const [emailHover, setEmailHover] = useState(false);
    const [phoneHover, setPhoneHover] = useState(false);

    useEffect(() => {
        // Trigger hint animation on load for 2 seconds
        setEmailHover(true);
        setPhoneHover(true);

        const timer = setTimeout(() => {
            setEmailHover(false);
            setPhoneHover(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const personalInfo = [
        { label: 'Birthday', value: '21.06.2006' },
        { label: 'Age', value: '20' },
        { label: 'Address', value: 'Tanta, Egypt' },
        { label: 'Email', value: 'abdelrhmansherif85@gmail.com' },
        { label: 'Phone', value: '+20 111 265 9808' },
        { label: 'Nationality', value: 'Egyptian' },
        { label: 'Study', value: 'Kafr El-Sheikh University' },
        { label: 'Degree', value: 'Bachelor (AI) Expected 2028' },
        { label: 'Freelance', value: 'Available' },
    ];

    const education = [
        {
            year: '2024 - Present',
            title: 'Faculty of Artificial Intelligence',
            institution: 'Kafr El-Sheikh University',
            description: 'Focusing on Machine Learning, Neural Networks, Deep Learning, Computer Vision, and NLP.'
        },
        {
            year: '2025',
            title: 'AI & ML Diploma',
            institution: 'Route Academy',
            description: 'Comprehensive training in modern AI technologies and practical ML applications.'
        }
    ];

    const experience = [
        {
            year: '2025 - Present',
            title: 'AI & ML Developer',
            institution: 'Trainee / Projects',
            description: 'Building predictive models, data pipelines, and deep learning solutions using Python, scikit-learn, and TensorFlow.'
        },
        {
            year: '2024 - Present',
            title: 'Front-End Developer',
            institution: 'Freelance',
            description: 'Developed responsive user interfaces using HTML, CSS, JavaScript, and React.js.'
        }
    ];

    return (
        <div className="min-h-screen text-[var(--text-secondary)] transition-colors duration-500">

            {/* 1. Biography Section - Theme Reactive Background */}
            <section className="bg-[var(--bg-primary)] px-6 py-20 md:px-12 md:py-24 lg:px-24 border-b border-[var(--border-color)]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <span className="text-[var(--text-dim)] uppercase tracking-[.4em] text-sm font-bold block mb-4">About Me</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight">Biography</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 md:gap-24 items-start">
                        {/* Photo Box (First on Mobile, Right on Desktop) */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative inline-block group w-full cursor-none">
                                {/* Animated Glow Elements - Always active but subtle */}
                                <div className={`absolute -inset-4 bg-gradient-to-br transition-opacity duration-500 ${theme === 'light' ? 'from-zinc-400/10' : 'from-white/5'} via-transparent to-zinc-400/5 blur-2xl opacity-100 animate-pulse`}></div>

                                {/* Main image container (Animation removed) */}
                                <div className="relative w-full aspect-square max-w-[220px] mx-auto lg:max-w-[300px] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl transition-all duration-700 rounded-full">
                                    <img
                                        src="/personal_photo.jpeg"
                                        alt="Abdelrahman Sherif"
                                        className="w-full h-full object-cover grayscale-0 transition-all duration-1000 ease-out"
                                    />

                                    {/* Premium Overlay - Permanent */}
                                    <div className={`absolute inset-0 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center ${theme === 'light' ? 'bg-white/70' : 'bg-black/50'} backdrop-blur-[1px]`}>
                                        <div className="overflow-hidden mb-2">
                                            <h4 className="text-[var(--text-primary)] text-xl font-black uppercase tracking-tighter translate-y-0 transition-transform duration-500">
                                                Abdelrahman Sherif
                                            </h4>
                                        </div>
                                        <div className="h-[1px] w-12 bg-[var(--text-dim)] mb-3 scale-x-100 transition-transform duration-700"></div>
                                        <div className="overflow-hidden">
                                            <p className="text-[var(--text-secondary)] text-[10px] uppercase tracking-[.4em] font-bold translate-y-0 transition-transform duration-500">
                                                AI Engineer
                                            </p>
                                        </div>
                                    </div>

                                    {/* Subtle inner gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-40"></div>
                                </div>
                            </div>
                        </div>

                        {/* Content Left (Second on Mobile, Left on Desktop) */}
                        <div className="w-full order-2 lg:order-1">
                            <div className="mb-10 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Abdelrahman Sherif</h3>
                                <p className="text-[var(--text-dim)] font-medium text-sm">AI & ML Engineer</p>
                            </div>

                            <div className="border-t border-[var(--border-color)] pt-10">
                                <p className="text-[var(--text-secondary)] text-base leading-7 mb-6 text-center lg:text-left">
                                    Hi, my name is Abdelrahman Sherif and I’m passionate about Artificial Intelligence and Machine Learning.
                                    I spend most of my time learning, exploring data, and experimenting with different models to better understand how intelligent systems work and how they can solve real-world problems.
                                </p>
                                <p className="text-[var(--text-secondary)] text-base leading-7 mb-10 text-center lg:text-left">
                                    I enjoy working with datasets, improving model performance step by step, and continuously developing my technical skills through hands-on projects.
                                    My goal is to grow into a professional AI Engineer and build impactful, real-world AI solutions.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 border-t border-[var(--border-color)] pt-10">
                                    {personalInfo.map((info, idx) => {
                                        const isEmail = info.label === 'Email';
                                        const isPhone = info.label === 'Phone';

                                        return (
                                            <div key={idx} className="flex items-center text-sm border-b border-[var(--border-color)] pb-2">
                                                <span className="w-24 text-[var(--text-primary)] font-bold shrink-0">{info.label}:</span>
                                                {isEmail || isPhone ? (
                                                    <a
                                                        href={isEmail ? `mailto:${info.value}` : `https://wa.me/201112659808`}
                                                        target={isPhone ? "_blank" : "_self"}
                                                        rel={isPhone ? "noopener noreferrer" : ""}
                                                        onMouseEnter={() => isEmail ? setEmailHover(true) : setPhoneHover(true)}
                                                        onMouseLeave={() => isEmail ? setEmailHover(false) : setPhoneHover(false)}
                                                        className="relative flex-grow text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 overflow-hidden"
                                                    >
                                                        <span className={`transition-all duration-700 ease-in-out inline-block ${((isEmail && emailHover) || (isPhone && phoneHover)) ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'}`}>
                                                            {info.value}
                                                        </span>
                                                        <span className={`absolute left-0 top-0 transition-all duration-700 ease-in-out italic whitespace-nowrap text-[var(--text-dim)] ${((isEmail && emailHover) || (isPhone && phoneHover)) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                                                            {isEmail ? 'contact via email' : 'call or whatsapp'} &rarr;
                                                        </span>
                                                    </a>
                                                ) : (
                                                    <span className="text-[var(--text-secondary)]">{info.value}</span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="text-center lg:text-left mt-12">
                                    <a
                                        href="/Abdelrahman_Sherif_CVa.pdf"
                                        download="Abdelrahman_Sherif_CV.pdf"
                                        className="inline-block bg-[var(--text-primary)] text-[var(--bg-primary)] px-10 py-4 font-bold uppercase tracking-widest hover:opacity-80 transition-all cursor-pointer text-xs"
                                    >
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Skills Bars Section - Theme Reactive Background */}
            <section className="bg-[var(--bg-secondary)] px-6 py-20 md:px-12 md:py-24 lg:px-24">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16">
                    <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-10 border-l-4 border-[var(--text-dim)] pl-6">Programming / AI Skills</h3>
                        <div className="space-y-8">
                            {[
                                { name: 'Python', level: '85%' },
                                { name: 'Machine Learning', level: '80%' },
                                { name: 'Deep Learning', level: '70%' },
                                { name: 'Data Analysis', level: '80%' },
                                { name: 'Problem Solving', level: '85%' },
                            ].map((skill, idx) => (
                                <SkillBar key={idx} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-10 border-l-4 border-[var(--text-dim)] pl-6">Language Skills</h3>
                        <div className="space-y-8">
                            {[
                                { name: 'Arabic', level: '100%' },
                                { name: 'English', level: '85%' },
                            ].map((skill, idx) => (
                                <SkillBar key={idx} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Skills & Knowledge Categories - Theme Reactive Background */}
            <section className="bg-[var(--bg-primary)] px-6 py-20 md:px-12 md:py-24 lg:px-24 border-y border-[var(--border-color)]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[var(--text-dim)] uppercase tracking-[.4em] text-sm font-bold block mb-4">Mastery</span>
                        <h3 className="text-4xl font-bold text-[var(--text-primary)] border-l-4 border-[var(--text-dim)] pl-6">Technical Skills & Tools</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            { title: 'Programming', skills: ['Python', 'C++', 'JavaScript'] },
                            { title: 'AI & ML', skills: ['Scikit-Learn', 'PyTorch', 'TensorFlow', 'Model Evaluation', 'Hyperparameter Tuning'] },
                            { title: 'Data Science', skills: ['NumPy', 'Pandas', 'Matplotlib / Seaborn', 'Data Preprocessing', 'Feature Engineering'] },
                            { title: 'Tools & Dev', skills: ['Git & GitHub', 'Jupyter Notebook', 'Anaconda', 'VS Code', 'Linux Basics'] },
                            { title: 'Databases', skills: ['SQL Basics', 'MongoDB Basics'] },
                            { title: 'Interests', skills: ['Full-stack AI Integration', 'Natural Language Processing', 'Open Source Contribution', 'Learning New Technologies'] }
                        ].map((cat, idx) => (
                            <div key={idx} className="group p-8 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--text-dim)] transition-all duration-500 rounded-sm shadow-sm hover:shadow-md">
                                <h4 className="text-[var(--text-primary)] font-bold text-lg mb-6 flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-primary)] rounded-full"></span>
                                    {cat.title}
                                </h4>
                                <ul className="space-y-3">
                                    {cat.skills.map((s, i) => (
                                        <li key={i} className="text-[var(--text-dim)] text-sm flex items-center gap-3 group-hover:text-[var(--text-secondary)] transition-colors font-medium">
                                            <span className="opacity-30">—</span> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Education & Experience Timeline - Theme Reactive Background */}
            <section className="bg-[var(--bg-secondary)] px-6 py-20 md:px-12 md:py-24 lg:px-24">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 pb-20">
                    <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-12 border-l-4 border-[var(--text-dim)] pl-6">Education</h3>
                        <div className="space-y-12 relative before:absolute before:left-0 before:top-4 before:bottom-0 before:w-[1px] before:bg-[var(--border-color)] ml-1.5 pl-8">
                            {education.map((item, idx) => (
                                <div key={idx} className="relative before:absolute before:-left-[33px] before:top-2 before:w-2.5 before:h-2.5 before:bg-[var(--bg-secondary)] before:border-2 before:border-[var(--text-dim)]">
                                    <span className="inline-block px-3 py-1 bg-[var(--bg-card)] text-[var(--text-dim)] text-xs font-bold rounded-full mb-4">
                                        {item.year}
                                    </span>
                                    <h4 className="text-[var(--text-primary)] text-xl font-bold mb-1">{item.title}</h4>
                                    <p className="text-[var(--text-dim)] text-sm mb-3 font-medium uppercase tracking-widest">{item.institution}</p>
                                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-12 border-l-4 border-[var(--text-dim)] pl-6">Experience</h3>
                        <div className="space-y-12 relative before:absolute before:left-0 before:top-4 before:bottom-0 before:w-[1px] before:bg-[var(--border-color)] ml-1.5 pl-8">
                            {experience.map((item, idx) => (
                                <div key={idx} className="relative before:absolute before:-left-[33px] before:top-2 before:w-2.5 before:h-2.5 before:bg-[var(--bg-secondary)] before:border-2 before:border-[var(--text-dim)]">
                                    <span className="inline-block px-3 py-1 bg-[var(--bg-card)] text-[var(--text-dim)] text-xs font-bold rounded-full mb-4">
                                        {item.year}
                                    </span>
                                    <h4 className="text-[var(--text-primary)] text-xl font-bold mb-1">{item.title}</h4>
                                    <p className="text-[var(--text-dim)] text-sm mb-3 font-medium uppercase tracking-widest">{item.institution}</p>
                                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
