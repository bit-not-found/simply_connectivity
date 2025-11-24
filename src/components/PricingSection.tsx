'use client';

import { Check, Wifi, Zap, Star } from 'lucide-react';
import { Button } from './Button';

const plans = [
    {
        name: "1 Hour",
        price: "R5",
        duration: "60 Minutes",
        features: ["Unlimited Data", "High Speed Access", "Instant Activation"],
        popular: false,
        color: "bg-card"
    },
    {
        name: "24 Hours",
        price: "R30",
        duration: "1 Day",
        features: ["Unlimited Data", "High Speed Access", "Instant Activation", "Best for Day Trips"],
        popular: true,
        color: "bg-primary/5 border-primary"
    },
    {
        name: "7 Days",
        price: "R60",
        duration: "1 Week",
        features: ["Unlimited Data", "High Speed Access", "Instant Activation", "Great Value"],
        popular: false,
        color: "bg-card"
    },
    {
        name: "30 Days",
        price: "R180",
        duration: "1 Month",
        features: ["Unlimited Data", "High Speed Access", "Instant Activation", "Maximum Savings"],
        popular: false,
        color: "bg-card"
    }
];

export function PricingSection() {
    return (
        <section className="pt-12 pb-12 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Affordable Pricing</h2>
                    <p className="text-muted-foreground text-lg">
                        No contracts, no hidden fees. Choose the plan that fits your needs and get connected instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col ${plan.popular
                                ? 'border-primary shadow-lg shadow-primary/10 bg-background'
                                : 'border-border bg-card/50 backdrop-blur-sm hover:border-primary/50'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                                    <Star size={12} fill="currentColor" />
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-muted-foreground mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                    <span className="text-sm text-muted-foreground">/ {plan.duration}</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? "primary" : "outline"}
                                className={`w-full justify-center font-bold ${plan.popular ? 'shadow-lg shadow-primary/20' : ''}`}
                            >
                                Buy Voucher
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
                    <div className="flex flex-col items-center text-center p-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                            <Wifi className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold mb-2">Uncapped Data</h4>
                        <p className="text-sm text-muted-foreground">Stream, download, and browse without worrying about limits.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold mb-2">High Speed</h4>
                        <p className="text-sm text-muted-foreground">Fast connection speeds suitable for video calls and streaming.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                            <Check className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold mb-2">Instant Access</h4>
                        <p className="text-sm text-muted-foreground">Connect to the internet immediately after payment.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
