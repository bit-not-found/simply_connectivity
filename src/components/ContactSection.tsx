'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './Button';

export function ContactSection() {
    return (
        <section className="pt-6 pb-6 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
                                <span>Get In Touch</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Here To Help You<br />
                                <span className="text-primary">Simply Connect</span>
                            </h2>

                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <p className="text-muted-foreground mb-2">For general inquiries and support</p>
                                    <a href="mailto:info@simpleconnectivity.co.za" className="text-primary font-medium hover:underline">
                                        info@simpleconnectivity.co.za
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                    <p className="text-muted-foreground mb-2">Mon-Fri from 8am to 5pm</p>
                                    <a href="tel:+27123456789" className="text-primary font-medium hover:underline">
                                        +27 12 345 6789
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        123 Connectivity Street, Tech Park<br />
                                        Johannesburg, South Africa
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-lg relative">
                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                        <form action="https://formsubmit.co/sslissue@gmail.com" method="POST" className="space-y-6">
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Contact Form Submission - Simple Connectivity" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="email" name="email" placeholder="Email Address" />
                            <input type="hidden" name="_autoresponse" value="Thank you for reaching out to Simple Connectivity. We have received your message and will get back to you shortly. Below is a copy of your submission for your records." />
                            <input type="hidden" name="_next" value="https://simplyconnectivity.vercel.app/success" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="support">Technical Support</option>
                                    <option value="sales">Sales & Pricing</option>
                                    <option value="coverage">Coverage Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <Button type="submit" className="w-full py-6 text-lg font-bold shadow-lg shadow-primary/25">
                                Send Message <Send className="ml-2 w-5 h-5" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
}
