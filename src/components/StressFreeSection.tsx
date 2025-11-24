'use client';

import Image from 'next/image';
import { ShieldCheck, HeartHandshake, Smile, Clock, Ban } from 'lucide-react';

const benefits = [
    {
        title: "No Contracts, No Commitments",
        description: "Pay as you go. You are never locked into a long-term agreement.",
        icon: <Ban className="w-6 h-6 text-primary" />
    },
    {
        title: "Zero Hidden Fees",
        description: "The price you see is the price you pay. No surprise bills at the end of the month.",
        icon: <ShieldCheck className="w-6 h-6 text-primary" />
    },
    {
        title: "Instant Support",
        description: "Our friendly team is always ready to help you get back online quickly.",
        icon: <HeartHandshake className="w-6 h-6 text-primary" />
    },
    {
        title: "99.9% Uptime",
        description: "Reliable connection means you can work, study, and play without stress.",
        icon: <Clock className="w-6 h-6 text-primary" />
    }
];

export function StressFreeSection() {
    return (
        <section className="pt-12 pb-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
                                <Smile className="w-4 h-4" />
                                <span>Peace of Mind</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Say Goodbye to <br />
                                <span className="text-primary">Connection Anxiety</span>
                            </h2>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-card border border-border p-6 rounded-2xl hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative h-[500px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-secondary/30">
                            {/* Abstract Shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            <Image
                                src="/characters/ch1.png"
                                alt="Happy family enjoying stress-free internet connectivity"
                                fill
                                className="object-contain p-8 drop-shadow-xl hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 -left-4 md:-left-8 bg-card p-4 rounded-2xl shadow-xl border border-border animate-bounce duration-[3000ms]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-medium">Secure</p>
                                    <p className="font-bold text-sm">Network</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
