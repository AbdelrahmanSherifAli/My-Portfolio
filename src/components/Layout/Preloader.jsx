import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Notify App to show content when curtains START opening
        const completeTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 2200); // Matches curtain-left/right delay

        const closeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 4000); // Full sequence time

        return () => {
            clearTimeout(completeTimer);
            clearTimeout(closeTimer);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center overflow-hidden pointer-events-none">
            {/* Left Curtain */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-zinc-900 preloader-curtain-left pointer-events-auto"></div>

            {/* Right Curtain */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900 preloader-curtain-right pointer-events-auto"></div>

            {/* The vertical line */}
            <div className="relative z-10 w-[1px] bg-white preloader-line-v2"></div>
        </div>
    );
};


export default Preloader;
