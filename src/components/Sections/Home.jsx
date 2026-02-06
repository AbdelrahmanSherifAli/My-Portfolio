import { FaGithub, FaLinkedinIn, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';

const Home = ({ theme }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] overflow-hidden relative px-6 py-20 lg:p-10 transition-colors duration-500">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 lg:-ml-20">

                {/* Image Section (Left) */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative inline-block group -rotate-6">
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-600/30 via-zinc-700/20 to-transparent blur-xl scale-110 group-hover:scale-115 transition-transform duration-500"></div>
                        {/* Main image container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-[3px] border-zinc-700/50 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-full bg-zinc-800 group-hover:border-zinc-600/60 transition-all duration-500">
                            {/* Animated Border Ring */}
                            <div className="border-line-path animate-spin-slow"></div>

                            <img src="/personal_photo.jpeg" alt="Abdelrahman Sherif" className="w-full h-full object-cover" />
                            {/* Subtle inner gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-zinc-700/10 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Text Section (Right) */}
                <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
                    <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight whitespace-nowrap">
                        Abdelrahman <span className="text-zinc-500">Sherif</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-zinc-400 max-w-lg mx-auto lg:mx-0 mb-8 font-light leading-relaxed">
                        I’m an AI Engineer based in Egypt, passionate about data, machine learning, and intelligent technologies.
                    </p>

                    <div className="flex justify-center lg:justify-start space-x-6 text-zinc-500">
                        <a href="https://github.com/AbdelrahmanSherifAli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                            <FaGithub size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/abdelrahmansherif/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors duration-300">
                            <FaLinkedinIn size={22} />
                        </a>
                        <a href="https://www.instagram.com/abdelrahmansherif01/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e4405f] transition-colors duration-300">
                            <FaInstagram size={22} />
                        </a>
                        <a href="https://www.snapchat.com/add/abdelrhmanor?share_id=J_l16mSHres&locale=en-US" target="_blank" rel="noopener noreferrer" className="hover:text-[#fffc00] transition-colors duration-300">
                            <FaSnapchatGhost size={22} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
