
'use client';

import Image from 'next/image';
import { ChevronRight, ChevronLeft, Wifi, UserPlus, CreditCard, Globe } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';

const steps = [
    {
        id: 1,
        title: "Connect to Wi-Fi",
        description: "Check your Wi-Fi settings and select 'Simple Connectivity Hotspot'. No password required to connect.",
        icon: <Wifi className="w-8 h-8" />,
        image: "/characters/ch2.png"
    },
    {
        id: 2,
        title: "Sign Up or Login",
        description: "A pop-up will appear automatically. If not, open your browser. Create a new account or log in to your existing one.",
        icon: <UserPlus className="w-8 h-8" />,
        image: "/characters/ch2.png"
    },
    {
        id: 3,
        title: "Choose Your Plan",
        description: "Select the time-based plan that suits your needs. From 1 hour to 30 days, we have you covered.",
        icon: <CreditCard className="w-8 h-8" />,
        image: "/characters/ch2.png"
    },
    {
        id: 4,
        title: "Get Online",
        description: "Complete your payment securely and enjoy instant, unlimited internet access at high speeds.",
        icon: <Globe className="w-8 h-8" />,
        image: "/characters/ch2.png"
    }
];

export function Steps() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="relative bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

                    {/* Mobile Background Character */}
                    <div className="absolute inset-0 z-0 lg:hidden">
                        <Image
                            src={steps[currentStep].image}
                            alt="Background character"
                            fill
                            className="object-cover object-center opacity-10"
                            priority
                        />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-16 min-h-[600px]">
                        {/* Text Content */}
                        <div className="space-y-8 flex flex-col justify-center h-full">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-bold text-sm border border-white/20">
                                    <span className="bg-white text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        {steps[currentStep].id}
                                    </span>
                                    <span>Step {steps[currentStep].id} of {steps.length}</span>
                                </div>
                            </div>

                            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300" key={currentStep}>
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm border border-white/20">
                                    {steps[currentStep].icon}
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    {steps[currentStep].title}
                                </h2>

                                <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-lg">
                                    {steps[currentStep].description}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <Button
                                    onClick={prevStep}
                                    disabled={currentStep === 0}
                                    variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent h-14 w-14 rounded-full p-0 flex items-center justify-center"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>

                                <Button
                                    onClick={nextStep}
                                    disabled={currentStep === steps.length - 1}
                                    className="bg-white text-primary hover:bg-blue-50 h-14 px-8 rounded-full font-bold text-lg flex-1 sm:flex-none justify-between sm:justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {currentStep === steps.length - 1 ? 'Get Started' : 'Next Step'}
                                    {currentStep !== steps.length - 1 && <ChevronRight className="h-5 w-5" />}
                                </Button>
                            </div>

                            {/* Progress Indicators */}
                            <div className="flex gap-2 mt-4">
                                {steps.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-8 bg-white' : 'w-2 bg-white/30'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Image Content - Desktop Only */}
                        <div className="hidden lg:flex relative justify-center lg:justify-end h-full items-end">
                            <div className="relative w-[400px] h-[600px] transition-all duration-500">
                                <Image
                                    src={steps[currentStep].image}
                                    alt="Character guiding steps"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
