import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import {
    HiOutlineDatabase,
    HiOutlineChip,
    HiOutlineChatAlt2,
    HiOutlineChartBar,
    HiOutlineSearch,
    HiOutlinePhotograph
} from 'react-icons/hi';

const Service = ({ theme }) => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: '01',
            title: 'Machine Learning',
            icon: <HiOutlineDatabase size={40} />,
            description: 'Building and training machine learning models for prediction, classification, and real-world datasets.',
            details: 'Machine Learning is one of my primary areas of focus. I work on building, training, and evaluating models using real-world datasets for tasks such as prediction, classification, and pattern recognition. I enjoy experimenting with different algorithms, tuning hyperparameters, and analyzing model performance to achieve better accuracy and reliability. Through hands-on projects, I’ve developed a strong understanding of data preprocessing, feature engineering, and model evaluation techniques. My goal is always to transform raw data into meaningful insights and intelligent decisions that can solve practical problems.'
        },
        {
            id: '02',
            title: 'Deep Learning',
            icon: <HiOutlineChip size={40} />,
            description: 'Experimenting with neural networks and deep learning techniques for image and pattern recognition tasks.',
            details: 'I explore Deep Learning techniques using neural networks such as ANN, CNN, and basic RNN architectures for solving more complex data challenges. Most of my experience comes from practical projects where I focus on understanding how neural networks learn patterns and how to improve their performance step by step. I’m continuously learning new architectures and experimenting with different frameworks to strengthen my knowledge in this field. Deep Learning allows me to approach problems that require higher levels of abstraction and advanced pattern recognition.'
        },
        {
            id: '03',
            title: 'Natural Language Processing',
            icon: <HiOutlineChatAlt2 size={40} />,
            description: 'Working on basic NLP projects such as text classification, sentiment analysis, and chat-based systems.',
            details: 'I work on beginner-to-intermediate Natural Language Processing projects including text classification, sentiment analysis, and simple conversational systems. I’m interested in how machines can understand, process, and generate human language using structured and unstructured text data. By experimenting with various NLP libraries and datasets, I continue improving my understanding of tokenization, embeddings, and text-based model training. This field excites me because it bridges communication between humans and intelligent systems.'
        },
        {
            id: '04',
            title: 'Data Visualization',
            icon: <HiOutlineChartBar size={40} />,
            description: 'Creating clear and interactive visual reports using Python libraries to present data effectively.',
            details: 'Data Visualization plays an important role in my workflow as it helps transform complex datasets into clear and interactive visuals. I use tools like Matplotlib and Seaborn to present insights in a simple and meaningful way that supports better understanding and decision-making. I focus on choosing the right type of visualization for each dataset to ensure clarity and accuracy. Strong visual representation allows data stories to be communicated effectively without unnecessary complexity.'
        },
        {
            id: '05',
            title: 'Data Analysis',
            icon: <HiOutlineSearch size={40} />,
            description: 'Cleaning, analyzing, and exploring datasets to discover insights and support better decisions.',
            details: 'I enjoy cleaning, exploring, and analyzing datasets to discover hidden patterns and valuable insights. My process usually includes handling missing values, detecting outliers, scaling features, and building a deep understanding of the dataset before applying any predictive models. Data Analysis helps me build a strong foundation for machine learning projects by ensuring that the data quality is reliable and well-structured. I believe that well-prepared data is the key to building accurate and effective AI systems.'
        },
        {
            id: '06',
            title: 'Computer Vision',
            icon: <HiOutlinePhotograph size={40} />,
            description: 'Building projects that analyze and understand visual data like images and videos.',
            details: 'I have a foundational understanding of Computer Vision and I’m actively working on improving my skills in this area. I’ve completed beginner-level projects involving image classification and simple visual recognition tasks using basic neural network models. While I’m still in the learning phase, I continuously explore new techniques and practical exercises to strengthen my knowledge. My goal is gradually develop deeper expertise in computer vision through consistent practice and real-world experimentation.'
        }
    ];

    const openModal = (service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedService(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] px-6 py-20 md:px-12 md:py-24 lg:px-24 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <span className="text-[var(--text-dim)] uppercase tracking-[.4em] text-sm font-bold block mb-4">What I Do</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight">Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => openModal(service)}
                            className="bg-[var(--bg-card)] p-10 border border-[var(--border-color)] hover:border-[var(--text-dim)] transition-all duration-500 cursor-pointer group rounded-sm shadow-sm hover:shadow-md"
                        >
                            <div className="text-[var(--text-primary)] mb-8 transition-transform duration-500 group-hover:scale-110 origin-left opacity-80 group-hover:opacity-100">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{service.title}</h3>
                            <p className="text-[var(--text-secondary)] leading-7 line-clamp-2">{service.description}</p>
                            <div className="mt-8 flex items-center gap-2 text-[var(--text-primary)] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                                Read More <span className="text-lg">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal - Theme Reactive */}
            {selectedService && createPortal(
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
                            <div className="mb-10">
                                <span className="text-[var(--text-dim)] text-xs uppercase tracking-[.4em] font-bold block mb-4">Service Detail</span>
                                <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">{selectedService.title}</h3>
                                <div className="w-20 h-1 bg-[var(--text-primary)] opacity-20"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="md:col-span-2">
                                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                                        {selectedService.details}
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    <div className="border-t border-[var(--border-color)] pt-8 md:border-none md:pt-0">
                                        <span className="block text-[var(--text-primary)] font-bold uppercase tracking-widest mb-2 text-xs">Technologies</span>
                                        <span className="text-[var(--text-dim)]">Python, scikit-learn, PyTorch, TensorFlow</span>
                                    </div>
                                    <div className="border-t border-[var(--border-color)] pt-8">
                                        <span className="block text-[var(--text-primary)] font-bold uppercase tracking-widest mb-2 text-xs">Type</span>
                                        <span className="text-[var(--text-dim)]">AI Solutions & Analysis</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-8 border-t border-[var(--border-color)] bg-[var(--bg-card)]/50">
                            <p className="text-[var(--text-dim)] text-[10px] uppercase tracking-[.4em] font-bold text-center">
                                Abdelrahman Sherif &bull; Applied AI Services &bull; 2026
                            </p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Service;
