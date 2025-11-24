export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    image: string;
    category: string;
    readTime: string;
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: "How to Optimize Your Home Wi-Fi for Gaming",
        excerpt: "Lag ruining your killstreak? Discover simple tips to reduce latency and improve your connection stability for a competitive edge.",
        content: `
            <p>Gaming requires a stable and fast internet connection. High latency (lag) can be the difference between winning and losing. Here are some tips to optimize your home Wi-Fi for the best gaming experience.</p>
            
            <h3>1. Position Your Router Correctly</h3>
            <p>Your router's position plays a huge role in signal strength. Place it in a central location, elevated off the ground, and away from obstructions like walls and metal objects.</p>

            <h3>2. Use the 5GHz Band</h3>
            <p>Most modern routers offer both 2.4GHz and 5GHz bands. The 5GHz band offers faster speeds and less interference, which is ideal for gaming, although it has a shorter range.</p>

            <h3>3. Close Background Applications</h3>
            <p>Downloads, streaming services, and other bandwidth-heavy applications running in the background can cause lag. Make sure to close them before you start gaming.</p>

            <h3>4. Update Your Router Firmware</h3>
            <p>Manufacturers release firmware updates to improve performance and security. Check your router's settings to ensure you're running the latest version.</p>

            <h3>5. Consider a Wired Connection</h3>
            <p>If possible, use an Ethernet cable. Wired connections are always more stable and faster than Wi-Fi.</p>
        `,
        date: "Nov 22, 2025",
        author: {
            name: "Michael K.",
            avatar: "/characters/ch6.png",
            role: "Tech Enthusiast"
        },
        image: "https://images.unsplash.com/photo-1603731955926-81917dad5a80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lmaXxlbnwwfHwwfHx8MA%3D%3D",
        category: "Gaming",
        readTime: "5 min read",
        slug: "optimize-wifi-gaming"
    },
    {
        id: '2',
        title: "The Future of Connectivity in South Africa",
        excerpt: "Exploring how affordable, high-speed internet is transforming education, business, and entertainment across the nation.",
        content: `
            <p>South Africa is on the brink of a connectivity revolution. With the rollout of fiber and 5G, more people than ever have access to high-speed internet. This is transforming various sectors of society.</p>

            <h3>Education</h3>
            <p>Online learning platforms are becoming more accessible, allowing students in remote areas to access quality education resources. Virtual classrooms and digital libraries are bridging the educational gap.</p>

            <h3>Business</h3>
            <p>Small businesses are leveraging the internet to reach global markets. E-commerce is booming, and remote work is becoming a viable option for many professionals.</p>

            <h3>Entertainment</h3>
            <p>Streaming services for music, movies, and games are seeing rapid growth. Local content creators are finding new audiences online, showcasing South African culture to the world.</p>

            <h3>Challenges Ahead</h3>
            <p>While progress is being made, challenges such as data costs and infrastructure maintenance remain. However, initiatives by government and private sectors are working to address these issues.</p>
        `,
        date: "Nov 18, 2025",
        author: {
            name: "Sarah L.",
            avatar: "/characters/ch5.png",
            role: "Digital Nomad"
        },
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpZml8ZW58MHx8MHx8fDA%3D",
        category: "Technology",
        readTime: "7 min read",
        slug: "future-connectivity-sa"
    },
    {
        id: '3',
        title: "Top 5 Streaming Services Worth Your Data",
        excerpt: "From local hits to international blockbusters, we rank the best streaming platforms available in SA right now.",
        content: `
            <p>With so many streaming services available, it can be hard to choose where to spend your data. Here are our top 5 picks for South African viewers.</p>

            <h3>1. Netflix</h3>
            <p>The giant of streaming needs no introduction. With a vast library of international and local content, it's a must-have for movie buffs.</p>

            <h3>2. Showmax</h3>
            <p>Showmax is the go-to for local content. From hit series to live sports (Showmax Pro), it offers great value for South Africans.</p>

            <h3>3. Disney+</h3>
            <p>Perfect for families and fans of Marvel, Star Wars, and Disney classics. It's quickly becoming a favorite in SA.</p>

            <h3>4. Amazon Prime Video</h3>
            <p>Offering a good mix of movies and original series at a competitive price point. It also includes free shipping on Amazon orders if you shop there.</p>

            <h3>5. Apple TV+</h3>
            <p>While the library is smaller, the quality of original content is high. Shows like "Ted Lasso" and "Severance" make it worth a look.</p>
        `,
        date: "Nov 15, 2025",
        author: {
            name: "Thabo M.",
            avatar: "/characters/ch4.png",
            role: "Content Creator"
        },
        image: "https://images.unsplash.com/photo-1610034534785-4706b86dd6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpZml8ZW58MHx8MHx8fDA%3D",
        category: "Entertainment",
        readTime: "4 min read",
        slug: "top-streaming-services"
    }
];
