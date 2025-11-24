import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const footerLinks = {
    Company: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '#' }
    ],
    Support: [
        { name: 'Help Centre', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Network Status', href: '#' },
        { name: 'Coverage Map', href: '#' }
    ],
    Legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Acceptable Use Policy', href: '#' }
    ],
};

const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
];

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-6 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                                <Image
                                    src="/simple_connectivity.png"
                                    alt="Simple Connectivity Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-foreground font-bold text-lg">Simple Connectivity</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Connecting communities with affordable, reliable, and unlimited internet access.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-foreground font-bold mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Simple Connectivity. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
