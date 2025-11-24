'use client';

import dynamic from 'next/dynamic';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { useMemo } from 'react';

export function CoverageSection() {
    const Map = useMemo(() => dynamic(
        () => import('@/components/LeafletMap'),
        {
            loading: () => <div className="h-full w-full bg-secondary/20 animate-pulse rounded-xl flex items-center justify-center text-muted-foreground">Loading Map...</div>,
            ssr: false
        }
    ), []);

    return (
        <section className="pt-0 pb-12 bg-gradient-to-b from-secondary/30 via-background to-background relative overflow-hidden">
            {/* Visual Connector from previous section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/20 rounded-full blur-[1px]" />
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2">
                <div className="w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Check Our Coverage</h2>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Info Card */}
                    <div className="lg:col-span-1 bg-card border border-border rounded-2xl p-8 shadow-sm h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Active Zones</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Springs Central</h4>
                                    <p className="text-sm text-muted-foreground">Full coverage available. High-speed access points active.</p>
                                </div>
                            </div>

                            <div className="p-4 bg-secondary/50 rounded-xl border border-border/50 mt-8">
                                <p className="text-sm font-medium mb-2">Don't see your area?</p>
                                <p className="text-xs text-muted-foreground">
                                    We are expanding rapidly! Check back soon or contact us to request coverage in your neighborhood.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Container */}
                    <div className="lg:col-span-2 h-[500px] bg-card border border-border rounded-2xl shadow-sm p-2 relative z-0">
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    );
}
