import { HelpCenter } from '@/components/HelpCenter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function HelpPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-grow pt-20">
                <HelpCenter />
            </div>
            <Footer />
        </main>
    );
}
