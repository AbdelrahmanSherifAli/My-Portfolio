import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaGithub } from 'react-icons/fa';

const Portfolio = ({ theme }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Ride Pricing & Surge Modeling',
            category: 'Machine Learning',
            image: '/portfolio_ride.png', // Placeholder if not found, but I'll use a generic placeholder style
            github: 'https://github.com/AbdelrahmanSherifAli/Ride-Pricing-Surge-Modeling-for-Urban-Mobility',
            overview: 'This project is a complete Machine Learning system that predicts Ride Price (Regression) and Surge Activation (Classification) using Uber & Lyft historical data combined with weather conditions.',
            problem: [
                'Ride prices are dynamic and depend on multiple factors such as distance, time, weather, and demand.',
                'The goal was to estimate expected ride prices and predict whether surge pricing will be active.'
            ],
            techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'XGBoost', 'SHAP', 'Streamlit', 'Matplotlib', 'Seaborn'],
            dataset: [
                'Cab Rides Dataset: (Uber/Lyft types, locations, distance, price, surge multiplier, timestamp)',
                'Weather Dataset: (Temperature, rain, wind speed, humidity, clouds, pressure, timestamp)'
            ],
            keyLearnings: [
                'Preventing Data Leakage',
                'Handling Class Imbalance (scale_pos_weight)',
                'Feature Engineering Strategies',
                'Model Explainability with SHAP',
                'End-to-End ML Deployment'
            ]
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] px-6 py-20 md:px-12 md:py-24 lg:px-24 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <span className="text-[var(--text-dim)] uppercase tracking-[.4em] text-sm font-bold block mb-4">Latest Work</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight">Portfolio</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => openModal(project)}
                            className="bg-[var(--bg-card)] group relative overflow-hidden cursor-pointer border border-[var(--border-color)] transition-all duration-500 rounded-sm shadow-sm hover:shadow-md"
                        >
                            <div className="aspect-video overflow-hidden relative bg-zinc-800">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                                            e.target.parentElement.innerHTML = `<span class="uppercase tracking-widest text-[10px] text-[var(--text-dim)] text-center px-4">${project.title}</span>`;
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[var(--text-dim)]">
                                        <span className="uppercase tracking-widest text-xs text-center px-4">{project.title}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                            <div className="p-8">
                                <span className="text-[var(--text-dim)] text-[10px] uppercase tracking-[.3em] font-bold mb-3 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--text-dim)] transition-colors">
                                    {project.title}
                                </h3>
                                <div className="w-10 h-[2px] bg-[var(--text-primary)] opacity-20 mt-4 transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal - Theme Reactive */}
            {selectedProject && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 animate-fadeIn">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>
                    <div className="relative bg-[var(--bg-primary)] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[var(--border-color)] animate-scaleUp rounded-sm shadow-2xl">
                        {/* Improved Modal Close Button */}
                        <button
                            onClick={closeModal}
                            className="fixed top-2 right-2 md:top-8 md:right-8 text-[var(--text-primary)] hover:text-red-500 transition-colors z-[110] bg-[var(--bg-card)] p-3 rounded-full border border-[var(--border-color)] backdrop-blur-md shadow-xl"
                        >
                            <FaTimes size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            <div className="aspect-video bg-[var(--bg-card)] mb-10 overflow-hidden border border-[var(--border-color)] rounded-sm group relative">
                                {selectedProject.image ? (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                                            e.target.parentElement.innerHTML = `<span class="uppercase tracking-[.4em] font-bold text-[var(--text-dim)] text-center px-4">${selectedProject.title}</span>`;
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-[var(--text-dim)] uppercase tracking-[.4em] font-bold text-center px-4">{selectedProject.title}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 border-b border-[var(--border-color)] pb-10">
                                <div>
                                    <span className="text-[var(--text-dim)] text-xs uppercase tracking-[.4em] font-bold block mb-4">
                                        {selectedProject.category}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">{selectedProject.title}</h3>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all"
                                    >
                                        <FaGithub size={18} /> GitHub
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                <div className="lg:col-span-2 space-y-10">
                                    <div>
                                        <h4 className="text-[var(--text-primary)] text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                                            <span className="w-8 h-[1px] bg-[var(--text-primary)] opacity-30"></span>
                                            Overview
                                        </h4>
                                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                                            {selectedProject.overview}
                                        </p>
                                    </div>

                                    {selectedProject.problem.length > 0 && (
                                        <div>
                                            <h4 className="text-[var(--text-primary)] text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                                                <span className="w-8 h-[1px] bg-[var(--text-primary)] opacity-30"></span>
                                                Challenges
                                            </h4>
                                            <ul className="space-y-4">
                                                {selectedProject.problem.map((p, i) => (
                                                    <li key={i} className="flex gap-4 text-[var(--text-secondary)]">
                                                        <div className="w-1.5 h-1.5 bg-[var(--text-primary)] shrink-0 mt-2 rotate-45 opacity-40"></div>
                                                        <span className="text-base leading-relaxed">{p}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-10">
                                    <div>
                                        <h4 className="text-[var(--text-primary)] text-sm font-bold uppercase tracking-widest mb-6">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-dim)] text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {selectedProject.keyLearnings.length > 0 && (
                                        <div>
                                            <h4 className="text-[var(--text-primary)] text-sm font-bold uppercase tracking-widest mb-6">Key Learnings</h4>
                                            <ul className="space-y-3">
                                                {selectedProject.keyLearnings.map((l, i) => (
                                                    <li key={i} className="text-[var(--text-dim)] text-xs flex items-center gap-3">
                                                        <span className="w-1 h-1 bg-[var(--text-dim)] rounded-full opacity-50"></span>
                                                        {l}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-8 border-t border-[var(--border-color)] bg-[var(--bg-card)]/50">
                            <p className="text-[var(--text-dim)] text-[10px] uppercase tracking-[.4em] font-bold text-center">
                                Abdelrahman Sherif &bull; Applied AI Portfolio &bull; 2026
                            </p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Portfolio;
