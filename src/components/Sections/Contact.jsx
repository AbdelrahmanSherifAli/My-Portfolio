import React, { useState, useEffect } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';

const Contact = ({ theme }) => {
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

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const userEmail = "abdelrhmansherif85@gmail.com";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${userEmail}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Message from Portfolio",
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] px-6 py-20 md:px-12 md:py-24 lg:px-24 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <span className="text-[var(--text-dim)] uppercase tracking-[.4em] text-sm font-bold block mb-4">Get In Touch</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight">Contact</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start pb-20">
                    {/* Left Side: Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">Let's build something amazing together</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-10">
                                I'm currently available for freelance work and open to new opportunities in AI.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Email Item */}
                            <div className="group flex items-center gap-8">
                                <div className="w-16 h-16 bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] group-hover:border-[var(--text-dim)] transition-all duration-500 rounded-sm">
                                    <FiMail size={24} />
                                </div>
                                <div className="relative overflow-hidden flex-grow">
                                    <h4 className="text-[var(--text-dim)] text-xs font-bold uppercase tracking-widest mb-1">Email</h4>
                                    <a
                                        href={`mailto:${userEmail}`}
                                        onMouseEnter={() => setEmailHover(true)}
                                        onMouseLeave={() => setEmailHover(false)}
                                        className="text-xl font-bold text-[var(--text-primary)] relative block h-8 overflow-hidden"
                                    >
                                        <span className={`absolute transition-all duration-700 ease-in-out ${emailHover ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'}`}>
                                            {userEmail}
                                        </span>
                                        <span className={`absolute italic text-[var(--text-dim)] transition-all duration-700 ease-in-out ${emailHover ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                                            contact via email &rarr;
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Phone Item */}
                            <div className="group flex items-center gap-8">
                                <div className="w-16 h-16 bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] group-hover:border-[var(--text-dim)] transition-all duration-500 rounded-sm">
                                    <FiPhone size={24} />
                                </div>
                                <div className="relative overflow-hidden flex-grow">
                                    <h4 className="text-[var(--text-dim)] text-xs font-bold uppercase tracking-widest mb-1">Phone</h4>
                                    <a
                                        href="https://wa.me/201112659808"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onMouseEnter={() => setPhoneHover(true)}
                                        onMouseLeave={() => setPhoneHover(false)}
                                        className="text-xl font-bold text-[var(--text-primary)] relative block h-8 overflow-hidden"
                                    >
                                        <span className={`absolute transition-all duration-700 ease-in-out ${phoneHover ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'}`}>
                                            +20 111 265 9808
                                        </span>
                                        <span className={`absolute italic text-[var(--text-dim)] transition-all duration-700 ease-in-out ${phoneHover ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                                            call or whatsapp &rarr;
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-[var(--border-color)]">
                            <h4 className="text-[var(--text-dim)] text-xs font-bold uppercase tracking-widest mb-6">Social Profiles</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: <FaGithub />, link: "https://github.com/AbdelrahmanSherif85" },
                                    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/abdelrahmansherif85/" },
                                    { icon: <FaInstagram />, link: "https://www.instagram.com/abdelrahman_sherif_85/" },
                                    { icon: <FaSnapchatGhost />, link: "https://www.snapchat.com/add/sherif_200621" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--text-primary)] hover:border-[var(--text-dim)] transition-all duration-500 rounded-sm"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-[var(--bg-card)] p-10 md:p-12 border border-[var(--border-color)] rounded-sm shadow-sm relative">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-dim)] transition-colors placeholder:[var(--text-dim)] font-medium"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-dim)] transition-colors placeholder:[var(--text-dim)] font-medium"
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-dim)] transition-colors placeholder:[var(--text-dim)] font-medium resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`w-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold py-5 uppercase tracking-[.3em] hover:opacity-90 transition-all text-xs flex items-center justify-center gap-4 ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-[var(--bg-primary)] border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </form>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-card)]/90 backdrop-blur-sm z-10 p-10 text-center animate-fadeIn">
                                <div>
                                    <div className="w-16 h-16 bg-green-500/10 text-green-500 border border-green-500/20 flex items-center justify-center rounded-full mx-auto mb-6">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8"><path d="M20 6L9 17L4 12"></path></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Message Sent!</h3>
                                    <p className="text-[var(--text-secondary)]">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                </div>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold text-center rounded-sm">
                                Something went wrong. Please try again or reach out directly via email.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
