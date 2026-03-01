import React from 'react';

interface MarqueeProps {
    text: string;
    speed?: number; // Duration in seconds for one full loop
}

export const Marquee: React.FC<MarqueeProps> = ({ text, speed = 25 }) => {
    return (
        <div className="flex w-full overflow-hidden bg-brand-primary border-y-4 border-black py-4 z-30 relative select-none">
            <div className="flex shrink-0 animate-marquee items-center" style={{ animationDuration: `${speed}s` }}>
                {[...Array(6)].map((_, i) => (
                    <span key={`1-${i}`} className="text-black font-display font-black text-3xl md:text-5xl uppercase tracking-widest mx-6 shrink-0">
                        {text} <span className="text-white ml-6">★</span>
                    </span>
                ))}
            </div>
            <div className="flex shrink-0 animate-marquee items-center" style={{ animationDuration: `${speed}s` }} aria-hidden="true">
                {[...Array(6)].map((_, i) => (
                    <span key={`2-${i}`} className="text-black font-display font-black text-3xl md:text-5xl uppercase tracking-widest mx-6 shrink-0">
                        {text} <span className="text-white ml-6">★</span>
                    </span>
                ))}
            </div>
        </div>
    );
};
