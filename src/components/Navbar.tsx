'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { ModeToggle } from './ModeToggle';

const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Hotspot', href: '#' },
    { name: 'How to Pay', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Help', href: '/help' },
    { name: 'Blog', href: '/blog' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <div className="w-full max-w-7xl bg-white/95 dark:bg-card/95 backdrop-blur-sm rounded-full shadow-xl border border-border px-6 py-3 flex items-center justify-between transition-all duration-300">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-4">
                            <div className="relative h-14 w-14 overflow-hidden rounded-lg">
                                <Image
                                    src="/simple_connectivity.png"
                                    alt="Simple Connectivity Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <ModeToggle />
                        <Button
                            variant="primary"
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-none"
                        >
                            Sign Up
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-border text-foreground hover:bg-secondary font-medium"
                        >
                            Account Login
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ModeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)}>
                    <div
                        className="absolute top-24 left-4 right-4 bg-card rounded-3xl p-6 shadow-2xl space-y-4 animate-in slide-in-from-top-10 fade-in duration-200 border border-border"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-secondary rounded-xl transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 space-y-3 border-t border-border">
                            <Button
                                variant="primary"
                                className="w-full justify-center bg-primary text-primary-foreground font-bold"
                            >
                                Sign Up
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full justify-center border-border text-foreground hover:bg-secondary"
                            >
                                Account Login
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
