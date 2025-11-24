'use client';

import { Radio, Wifi, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function HowItWorks() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const steps = [
        {
            icon: <Radio className="w-10 h-10 text-primary" />,
            title: "Wide Coverage",
            description: "We have strategically placed Access Points that blanket the entire area with strong signal coverage."
        },
        {
            icon: <Wifi className="w-10 h-10 text-primary" />,
            title: "Connect to Hotspot",
            description: "Simply find one of our hotspots on your device. No complicated setup required."
        },
        {
            icon: <Zap className="w-10 h-10 text-primary" />,
            title: "Instant Access",
            description: "Join the network and enjoy fast, reliable internet access immediately."
        }
    ];

    return (
        <section ref={sectionRef} className="pt-24 pb-12 bg-gradient-to-b from-transparent via-secondary/20 to-secondary/30 relative overflow-hidden">
            {/* Connecting Glow - Parallax Effect */}
            <div
                className="absolute top-0 right-0 pointer-events-none transition-transform duration-75 ease-out"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
                <div className="w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="bg-background/50 backdrop-blur-sm border border-border p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full">
                                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decoration - Parallax Effect */}
            <div
                className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block transition-transform duration-75 ease-out"
                style={{ transform: `translateY(calc(-50% + ${scrollY * -0.05}px))` }}
            />
        </section>
    );
}
