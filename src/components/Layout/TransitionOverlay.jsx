import React from 'react';

const TransitionOverlay = () => {
    return (
        <div className="fixed inset-0 z-[200000] flex items-center justify-center overflow-hidden pointer-events-none transition-opacity duration-300">
            {/* Rapid curtains */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-zinc-900 transition-transform duration-[600ms] ease-in-out animate-curtainWipeLeft"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900 transition-transform duration-[600ms] ease-in-out animate-curtainWipeRight"></div>

            {/* Central scanning line */}
            <div className="relative z-20 w-[1px] bg-white h-0 animate-lineScan"></div>
        </div>
    );
};

export default TransitionOverlay;
