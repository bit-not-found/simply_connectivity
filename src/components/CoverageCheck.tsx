import Image from 'next/image';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from './Button';

export function CoverageCheck() {
    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">


            <div className="max-w-7xl mx-auto relative z-10">
                <div className="relative bg-card rounded-3xl overflow-hidden border border-border shadow-2xl">
                    {/* Mobile Background Character */}
                    <div className="absolute inset-0 z-0 lg:hidden">
                        <Image
                            src="/characters/ch3.png"
                            alt="Background character"
                            fill
                            className="object-cover object-center opacity-10"
                            priority
                        />
                    </div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
                        {/* Form Section */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
                                    Check Your Coverage
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Enter your address or use your current location to find out if your area is covered by our network.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter your address"
                                        className="w-full h-14 pl-4 pr-4 rounded-xl bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-border"
                                    />
                                </div>

                                <Button className="w-full sm:w-auto gap-2" size="lg">
                                    <Navigation size={20} />
                                    Use Current Location
                                </Button>
                            </div>
                        </div>

                        {/* Map Section - Desktop Only */}
                        <div className="hidden lg:block relative h-[400px] lg:h-auto min-h-[400px] bg-muted">
                            <Image
                                src="/characters/ch3.png"
                                alt="Coverage Character"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent lg:w-32" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
