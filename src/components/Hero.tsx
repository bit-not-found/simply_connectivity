'use client';

import Image from 'next/image';
import { Button } from './Button';

import { useState, useEffect } from 'react';

export function Hero() {
    const heroContent = [
        {
            image: '/characters/ch4.png',
            headline: (
                <>
                    Welcome to <br />
                    <span className="text-primary">Simple Connectivity</span>
                </>
            )
        },
        {
            image: '/characters/ch5.png',
            headline: (
                <>
                    Reliable <br />
                    <span className="text-primary">Internet <br /> Access</span>
                </>
            )
        },
        {
            image: '/characters/ch6.png',
            headline: (
                <>
                    Connecting <br />
                    <span className="text-primary">Our <br />Community</span>
                </>
            )
        },
        {
            image: '/characters/ch7.png',
            headline: (
                <>
                    Your Local <br />
                    <span className="text-primary">WiFi Hotspot</span>
                </>
            )
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroContent.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pt-32 pb-0 md:pt-32 md:pb-0 overflow-hidden">
            {/* Mobile Background Character */}
            <div className="absolute inset-0 z-0 lg:hidden pointer-events-none overflow-hidden">
                <div className="absolute -right-28 top-[140px] w-[90%] h-[600px] transition-opacity duration-1000">
                    <Image
                        key={heroContent[currentIndex].image}
                        src={heroContent[currentIndex].image}
                        alt="Background character"
                        fill
                        className="object-contain object-top-right opacity-85 animate-in fade-in duration-700"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium backdrop-blur-sm border border-border">
                            Stay Simply Connected
                        </div>

                        <div className="min-h-[200px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[280px] flex items-center">
                            <h1
                                key={currentIndex}
                                className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700"
                            >
                                {heroContent[currentIndex].headline}
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Join the East Rand's local network. Get fast, reliable internet with Simple Connectivity today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg">
                                Check Coverage
                            </Button>
                            <Button variant="outline" size="lg">
                                View Packages
                            </Button>
                        </div>
                    </div>

                    {/* Image Content - Desktop Only */}
                    <div className="hidden lg:block relative h-[500px] w-full rounded-3xl overflow-hidden bg-secondary/10 border border-white/10">
                        <Image
                            key={heroContent[currentIndex].image}
                            src={heroContent[currentIndex].image}
                            alt="Happy user connected"
                            fill
                            className="object-cover object-top animate-in fade-in duration-700"
                            priority
                        />

                        {/* Decorative elements */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>
        </section>
    );
}
