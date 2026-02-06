import React, { useEffect, useState, useRef } from 'react';

const Cursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // Use refs for mouse position to avoid re-renders
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    // Use refs for current cursor position to implement smooth following (optional)
    // or just set directly for instant response. User complained about slowness,
    // so we will make the dot instant and the ring very snappy.
    const ringX = useRef(0);
    const ringY = useRef(0);

    useEffect(() => {
        const updatePosition = (e) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;

            // Update dot immediately for instant feedback
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        const handleMouseEnter = (e) => {
            if (e.target.closest('a, button, .cursor-pointer, li, [role="button"]')) {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        // Animation loop for smooth ring movement
        let animationFrameId;

        const animateRing = () => {
            // Linear interpolation for the ring to make it follow smoothly
            // User requested "smoother" -> adjusting to 0.08
            ringX.current += (mouseX.current - ringX.current) * 0.1;
            ringY.current += (mouseY.current - ringY.current) * 0.1;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0) translate(-50%, -50%)`;
            }

            animationFrameId = requestAnimationFrame(animateRing);
        };

        animateRing();

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* Inner dot - reduced size, instant movement */}
            <div
                ref={dotRef}
                className="fixed pointer-events-none z-[100000] rounded-full bg-white mix-blend-difference hidden md:block will-change-transform"
                style={{
                    left: 0,
                    top: 0,
                    width: '6px', // Reduced from 8px
                    height: '6px', // Reduced from 8px
                }}
            />
            {/* Outer ring - reduced size, smooth follow */}
            <div
                ref={ringRef}
                className={`fixed pointer-events-none z-[99999] rounded-full border border-white hidden md:block will-change-transform transition-[width,height,background-color,border-color] duration-300 ease-out ${isHovering ? 'bg-white/20 border-transparent' : ''
                    }`}
                style={{
                    left: 0,
                    top: 0,
                    width: isHovering ? '40px' : '30px', // Reduced from 50px/40px
                    height: isHovering ? '40px' : '30px', // Reduced from 50px/40px
                }}
            />
        </>
    );
};

export default Cursor;
