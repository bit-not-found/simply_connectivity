'use client';

import {
    Youtube, Music, Film, Instagram, Facebook, MessageCircle, Twitter, Twitch,
    Gamepad2, MessageSquare, Linkedin, Camera, ShoppingBag, Tv, Headphones,
    Video, Users, Slack, Mail, Github, Car, Home, Send, Chrome, Figma,
    Dribbble, Codepen, Search, CreditCard, Smartphone, Music2, Gamepad,
    Image as ImageIcon
} from 'lucide-react';

const brands = [
    { name: "YouTube", icon: <Youtube className="w-10 h-10" />, color: "text-red-600" },
    { name: "Spotify", icon: <Music className="w-10 h-10" />, color: "text-green-500" },
    { name: "Netflix", icon: <Film className="w-10 h-10" />, color: "text-red-600" },
    { name: "Instagram", icon: <Instagram className="w-10 h-10" />, color: "text-pink-600" },
    { name: "Facebook", icon: <Facebook className="w-10 h-10" />, color: "text-blue-600" },
    { name: "WhatsApp", icon: <MessageCircle className="w-10 h-10" />, color: "text-green-500" },
    { name: "Twitter", icon: <Twitter className="w-10 h-10" />, color: "text-blue-400" },
    { name: "Twitch", icon: <Twitch className="w-10 h-10" />, color: "text-purple-600" },
    { name: "TikTok", icon: <Smartphone className="w-10 h-10" />, color: "text-pink-500" },
    { name: "Steam", icon: <Gamepad2 className="w-10 h-10" />, color: "text-blue-900" },
    { name: "Discord", icon: <MessageSquare className="w-10 h-10" />, color: "text-indigo-500" },
    { name: "LinkedIn", icon: <Linkedin className="w-10 h-10" />, color: "text-blue-700" },
    { name: "Snapchat", icon: <Camera className="w-10 h-10" />, color: "text-yellow-400" },
    { name: "Pinterest", icon: <ImageIcon className="w-10 h-10" />, color: "text-red-600" },
    { name: "Amazon", icon: <ShoppingBag className="w-10 h-10" />, color: "text-orange-500" },
    { name: "Disney+", icon: <Tv className="w-10 h-10" />, color: "text-blue-600" },
    { name: "Apple Music", icon: <Music2 className="w-10 h-10" />, color: "text-red-500" },
    { name: "Zoom", icon: <Video className="w-10 h-10" />, color: "text-blue-500" },
    { name: "Teams", icon: <Users className="w-10 h-10" />, color: "text-purple-600" },
    { name: "Slack", icon: <Slack className="w-10 h-10" />, color: "text-purple-500" },
    { name: "Gmail", icon: <Mail className="w-10 h-10" />, color: "text-red-500" },
    { name: "GitHub", icon: <Github className="w-10 h-10" />, color: "text-gray-800 dark:text-white" },
    { name: "PlayStation", icon: <Gamepad className="w-10 h-10" />, color: "text-blue-700" },
    { name: "Xbox", icon: <Gamepad2 className="w-10 h-10" />, color: "text-green-600" },
    { name: "Uber", icon: <Car className="w-10 h-10" />, color: "text-gray-900 dark:text-white" },
    { name: "Airbnb", icon: <Home className="w-10 h-10" />, color: "text-red-500" },
    { name: "Telegram", icon: <Send className="w-10 h-10" />, color: "text-blue-400" },
    { name: "Chrome", icon: <Chrome className="w-10 h-10" />, color: "text-blue-500" },
    { name: "Figma", icon: <Figma className="w-10 h-10" />, color: "text-purple-500" },
    { name: "Dribbble", icon: <Dribbble className="w-10 h-10" />, color: "text-pink-500" },
    { name: "CodePen", icon: <Codepen className="w-10 h-10" />, color: "text-gray-900 dark:text-white" },
    { name: "Google", icon: <Search className="w-10 h-10" />, color: "text-blue-500" },
    { name: "Banking", icon: <CreditCard className="w-10 h-10" />, color: "text-green-600" },
];

export function EntertainmentMarquee() {
    return (
        <section className="pt-12 pb-12 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Enjoy Your Favorite Content</h2>
                    <p className="text-muted-foreground text-lg">
                        Stream, chat, and play without interruption. Our network is optimized for the apps you love.
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade effect at edges */}
                <div className="absolute top-0 left-0 z-10 w-20 md:w-40 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 z-10 w-20 md:w-40 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />

                <div className="flex w-max animate-scroll" style={{ animationDuration: '60s' }}>
                    {/* First set of logos */}
                    <div className="flex gap-16 mx-8 items-center">
                        {brands.map((brand, index) => (
                            <div key={`brand-1-${index}`} className="flex flex-col items-center gap-3 group cursor-default">
                                <div className={`p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/50 ${brand.color}`}>
                                    {brand.icon}
                                </div>
                                <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{brand.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless scrolling */}
                    <div className="flex gap-16 mx-8 items-center">
                        {brands.map((brand, index) => (
                            <div key={`brand-2-${index}`} className="flex flex-col items-center gap-3 group cursor-default">
                                <div className={`p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/50 ${brand.color}`}>
                                    {brand.icon}
                                </div>
                                <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
