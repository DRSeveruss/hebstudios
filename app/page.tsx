'use client';

import { useState, useEffect, useRef } from 'react';
import LegalModals from '@/components/LegalModals';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null); // Ref for the hero section
    const bananiumVideoRef = useRef<HTMLVideoElement>(null); // Ref for bananium video
    const legendVideoRef = useRef<HTMLVideoElement>(null); // Ref for legend video

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        // Add listener to the whole window for simplicity
        window.addEventListener('mousemove', handleMouseMove);

        // Smooth scrolling with native browser behavior
        const handleNavClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const href = target.getAttribute('href');
            
            // Only process anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    // Get element position with header offset
                    const headerOffset = 100;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    
                    // Use native smooth scrolling
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };
        
        // Close mobile menu when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            const mobileMenu = document.getElementById('mobile-menu');
            const hamburgerButton = document.querySelector('button[aria-label="Toggle mobile menu"]');
            
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                // Check if the click is outside the mobile menu and not on the hamburger button
                if (
                    mobileMenu &&
                    hamburgerButton &&
                    !mobileMenu.contains(event.target as Node) &&
                    !hamburgerButton.contains(event.target as Node)
                ) {
                    mobileMenu.classList.add('hidden');
                }
            }
        };
        
        // Add click event listener for closing mobile menu
        document.addEventListener('click', handleClickOutside);
        
        // Add click event listeners to all navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick as unknown as EventListener);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClickOutside);
            
            // Clean up navigation click listeners
            const navLinks = document.querySelectorAll('a[href^="#"]');
            navLinks.forEach(link => {
                link.removeEventListener('click', handleNavClick as unknown as EventListener);
            });
        };
// IntersectionObserver for mobile autoplay
    useEffect(() => {
        const videos = [bananiumVideoRef.current, legendVideoRef.current];
        videos.forEach(video => {
            if (!video) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && entry.intersectionRatio === 1) {
                        video.play();
                    } else {
                        video.pause();
                    }
                },
                { threshold: 1.0 }
            );
            observer.observe(video);
            return () => observer.disconnect();
        });
    }, []);

    const projects = [
        {
            id: 'bananium',
            title: 'bananium.ai',
            description:
                'A bleeding-edge AAA auto-battler with where users own AI Agent fighters who battle in immersive arenas.',
            image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000',
        },
        {
            id: 'legend',
            title: 'the-legend.io',
            description:
                'An epic storytelling experience built with Unreal Engine 5, pushing the boundaries of web-based immersive narratives.',
            image: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=1000',
        },
    ];

    return (
        <div
            className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden"
            data-oid="lgzdk24"
        >
            {/* Texture Overlay */}
            <div
                className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"
                data-oid=":.mp-mr"
            ></div>

            {/* Navigation */}
            <nav
                className={`fixed top-6 w-full z-50 flex justify-center transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                data-oid="par:858"
            >
                <div
                    className="inline-flex bg-muted rounded-full px-6 py-4 items-center gap-8 relative shadow-2xl"
                    data-oid="p:2xadb"
                >
                    {/* Gradient Overlay for Desktop */}
                    <div className="hidden" aria-hidden="true" data-oid="_:zmrc9"></div>
                    <a href="#" className="flex items-center relative z-10" data-oid="q_sn_rs">
                        {/* Logo */}
                        <img
                            src="/images/elephant-logo.png"
                            alt="HEB Studios Logo"
                            className="w-12 h-12 mr-4"
                            data-oid="bq6h59y"
                        />

                        <div className="text-xl tracking-tight font-montserrat" data-oid="_jjvbtg">
                            <span className="font-bold">HEB</span>{" "}
                            <span className="font-normal">Studios</span>
                        </div>
                    </a>

                    <div
                        className="hidden md:flex space-x-8 text-sm font-medium"
                        data-oid="t2klnts"
                    >
                        <a
                            href="#about"
                            className="hover:text-foreground transition-colors"
                            data-oid="s-uc0b3"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-foreground transition-colors"
                            data-oid="jjw0__c"
                        >
                            Projects
                        </a>
                        <a
                            href="#team"
                            className="hover:text-foreground transition-colors"
                        >
                            Team
                        </a>
                        <a
                            href="#expertise"
                            className="hover:text-foreground transition-colors"
                            data-oid="o4z62:u"
                        >
                            Expertise
                        </a>
                    </div>

                    <a
                        href="#contact"
                        className="hidden md:inline-block px-5 py-2 border border-foreground text-foreground rounded-full text-sm hover:bg-muted transition-colors"
                        data-oid="eqgaf8u"
                    >
                        Get in Touch
                    </a>

                    <button
                        className="md:hidden text-2xl"
                        onClick={() => {
                            const mobileMenu = document.getElementById('mobile-menu');
                            if (mobileMenu) {
                                mobileMenu.classList.toggle('hidden');
                            }
                        }}
                        aria-label="Toggle mobile menu"
                        data-oid="tsjk:6b"
                    >
                        ☰
                    </button>
                </div>
                
                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className="hidden absolute top-20 left-0 right-0 bg-muted rounded-lg mx-4 p-4 shadow-lg z-40"
                >
                    <div className="flex flex-col space-y-4 text-sm font-medium">
                        <a
                            href="#about"
                            className="hover:text-foreground transition-colors py-2"
                            onClick={() => {
                                const mobileMenu = document.getElementById('mobile-menu');
                                if (mobileMenu) {
                                    mobileMenu.classList.add('hidden');
                                }
                            }}
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-foreground transition-colors py-2"
                            onClick={() => {
                                const mobileMenu = document.getElementById('mobile-menu');
                                if (mobileMenu) {
                                    mobileMenu.classList.add('hidden');
                                }
                            }}
                        >
                            Projects
                        </a>
                        <a
                            href="#team"
                            className="hover:text-foreground transition-colors py-2"
                            onClick={() => {
                                const mobileMenu = document.getElementById('mobile-menu');
                                if (mobileMenu) {
                                    mobileMenu.classList.add('hidden');
                                }
                            }}
                        >
                            Team
                        </a>
                        <a
                            href="#expertise"
                            className="hover:text-foreground transition-colors py-2"
                            onClick={() => {
                                const mobileMenu = document.getElementById('mobile-menu');
                                if (mobileMenu) {
                                    mobileMenu.classList.add('hidden');
                                }
                            }}
                        >
                            Expertise
                        </a>
                        <a
                            href="#contact"
                            className="px-5 py-2 border border-foreground text-foreground rounded-full text-sm hover:bg-muted transition-colors"
                            onClick={() => {
                                const mobileMenu = document.getElementById('mobile-menu');
                                if (mobileMenu) {
                                    mobileMenu.classList.add('hidden');
                                }
                            }}
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                ref={heroRef} // Add ref here
                className="min-h-screen flex items-center relative overflow-hidden"
                style={{
                    // Apply the radial gradient centered at the mouse position
                    // Adjust colors and size for the desired "dimple" effect
                    backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 5%, transparent 15%)`,
                }}
                data-oid="oph3hh4"
            >
                {/* Existing radial gradient overlay - keep or remove depending on desired blend */}
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,40,40,0.3),rgba(0,0,0,0))] pointer-events-none -z-10" // Ensure it's behind the mouse effect
                    data-oid="eq_bm_5"
                ></div>

                <div
                    className={`max-w-7xl mx-auto px-6 py-24 md:py-32 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="e4qi_hp"
                >
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl font-montserrat"
                        data-oid="cxklf6i"
                    >
                        Building the future of{' '}
                        <span className="text-primary" data-oid="llrm2wd">
                            Web3 experiences
                        </span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-primary max-w-2xl mb-12 font-light"
                        data-oid="89pqiqt"
                    >
                        HEB Studios specializes in creating cutting-edge Web3 projects with AAA
                        quality design, Unreal Engine 5, and immersive storytelling.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4" data-oid="bx5mj9r">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-foreground text-white rounded-full hover:bg-foreground/90 transition-colors"
                            data-oid="tchawxp"
                        >
                            Explore Our Work
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            data-oid="t5al:wq"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Removed the distracting semi-transparent white circles */}
            </section>

            {/* About Section */}
            <section id="about" className="py-24 md:py-32 relative" data-oid="yjudhcq">
                <div className="max-w-7xl mx-auto px-6" data-oid="n9o51iv">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="bn4y5g.">
                        <div data-oid="ib6i8q_">
                            <h2
                                className="text-3xl md:text-4xl font-medium mb-6 font-montserrat"
                                data-oid="ty5q99v"
                            >
                                The Studio
                            </h2>
                            <p className="text-foreground mb-6 font-light" data-oid="u29li6v">
                                HEB Studios Pte. Ltd. is a Singapore-based creative technology
                                company specializing in building cutting-edge Web3 oriented projects
                                and experiences.
                            </p>
                            <p className="text-foreground mb-6 font-light" data-oid="tnt1p6m">
                                We leverage AAA quality design, Unreal Engine 5, compelling
                                storytelling, and immersive quality to create digital experiences
                                that push boundaries and set new standards.
                            </p>
                            <p className="text-foreground font-light" data-oid="nghz5bn">
                                Our mission is to bridge the gap between traditional digital
                                experiences and the emerging Web3 ecosystem, creating products that
                                are not only technologically advanced but also accessible and
                                engaging.
                            </p>
                        </div>

                        <div
                            className="relative h-[400px] rounded-lg overflow-hidden"
                            data-oid="3_ofwu9"
                        >
                            <img
                                src="/images/2-balls.png"
                                alt="Abstract two-ball graphic"
                                className="w-full h-full object-cover"
                                data-oid="dk_etqf"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 md:py-32 bg-[#d7d3d1] relative" data-oid=":w51yfz">
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"
                    data-oid="wqe-kog"
                ></div>

                <div className="max-w-7xl mx-auto px-6" data-oid="pezw368">
                    <h2
                        className="text-3xl md:text-4xl font-medium mb-16 font-montserrat"
                        data-oid="q9tgp8a"
                    >
                        Our Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="9j.f9tw">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative rounded-lg overflow-hidden bg-card hover:bg-black/10 transition-all duration-300 h-[400px] cursor-pointer soft-shadow"
                                onMouseEnter={() => {
                                    setActiveProject(project.id);
                                    if (project.id === 'bananium') bananiumVideoRef.current?.play();
                                    if (project.id === 'legend') legendVideoRef.current?.play();
                                }}
                                onMouseLeave={() => {
                                    setActiveProject(null);
                                    if (project.id === 'bananium') bananiumVideoRef.current?.pause();
                                    if (project.id === 'legend') legendVideoRef.current?.pause();
                                }}
                                data-oid="83usrlc"
                            >
                                <div
                                    className="absolute inset-0 opacity-85 group-hover:opacity-90 transition-opacity pointer-events-none"
                                    data-oid="4i4na6a"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/40 to-transparent z-10 group-hover:from-white/80 group-hover:via-white/50 transition-all duration-300"
                                        data-oid="6nupe40"
                                    ></div>
                                    {project.id === 'bananium' ? (
                                        <video
                                            ref={bananiumVideoRef}
                                            src="/videos/banananna.mp4"
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            className="w-full h-full object-cover"
                                            onMouseEnter={() => bananiumVideoRef.current?.play()}
                                            onMouseLeave={() => bananiumVideoRef.current?.pause()}
                                        />
                                    ) : project.id === 'legend' ? (
                                        <video
                                            ref={legendVideoRef}
                                            src="/videos/ml_teaser.mp4"
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            className="w-full h-full object-cover"
                                            onMouseEnter={() => legendVideoRef.current?.play()}
                                            onMouseLeave={() => legendVideoRef.current?.pause()}
                                        />
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            data-oid=".ce2yxd"
                                        />
                                    )}
                                </div>

                                <div
                                    className="absolute inset-0 flex flex-col justify-end p-8 z-20"
                                    data-oid="pvjn_nq"
                                >
                                    <h3
                                        className="text-2xl font-semibold mb-3 font-montserrat"
                                        data-oid="rpm9:iz"
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className="text-muted-foreground mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid=".3a4yzp"
                                    >
                                        {project.description}
                                    </p>
                                    <div
                                        className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="yvy71p9"
                                    >
                                        {project.id === 'bananium' ? (
                                            <a
                                                href="https://bananium.ai/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 border border-foreground rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                            >
                                                View Project
                                            </a>
                                        ) : (
                                            <a
                                                href="https://the-legend.io/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 border border-foreground rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                                data-oid="h600ff6"
                                            >
                                                View Project
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-24 md:py-32 bg-[#d7d3d1] relative">
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"
                ></div>

                <div className="max-w-7xl mx-auto px-6">
                    <h2
                        className="text-3xl md:text-4xl font-medium mb-16 font-montserrat"
                    >
                        Our Team
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 - Unreal Engine 5 */}
                        <div
                            className="bg-card p-8 rounded-lg hover:bg-muted transition-colors soft-shadow flex flex-col items-center text-center group"
                        >
                            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                                {/* Abstract placeholder SVG for team member */}
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#6a8494" />
                                            <stop offset="100%" stopColor="#8ca3b4" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="40" r="25" fill="url(#grad1)" />
                                    <path d="M50,75 Q20,60 20,95 L80,95 Q80,60 50,75" fill="url(#grad1)" />
                                    <circle cx="35" cy="35" r="4" fill="#ffffff" fillOpacity="0.6" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold mb-2 font-montserrat"
                            >
                                Lead Developer
                            </h3>
                            <p className="text-muted-foreground font-light mb-4 group-hover:text-foreground transition-colors">
                                Unreal Engine 5
                            </p>
                            <div className="w-12 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors"></div>
                        </div>

                        {/* Team Member 2 - Motion Design */}
                        <div
                            className="bg-card p-8 rounded-lg hover:bg-muted transition-colors soft-shadow flex flex-col items-center text-center group"
                        >
                            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                                {/* Abstract placeholder SVG for team member */}
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#7a8494" />
                                            <stop offset="100%" stopColor="#9ca3b4" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="40" r="25" fill="url(#grad2)" />
                                    <path d="M50,75 Q20,60 20,95 L80,95 Q80,60 50,75" fill="url(#grad2)" />
                                    <rect x="40" y="30" width="20" height="10" rx="5" fill="#ffffff" fillOpacity="0.6" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold mb-2 font-montserrat"
                            >
                                Creative Director
                            </h3>
                            <p className="text-muted-foreground font-light mb-4 group-hover:text-foreground transition-colors">
                                Motion Design
                            </p>
                            <div className="w-12 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors"></div>
                        </div>

                        {/* Team Member 3 - Game Design */}
                        <div
                            className="bg-card p-8 rounded-lg hover:bg-muted transition-colors soft-shadow flex flex-col items-center text-center group"
                        >
                            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                                {/* Abstract placeholder SVG for team member */}
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8a7494" />
                                            <stop offset="100%" stopColor="#ac93b4" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="40" r="25" fill="url(#grad3)" />
                                    <path d="M50,75 Q20,60 20,95 L80,95 Q80,60 50,75" fill="url(#grad3)" />
                                    <polygon points="40,30 60,30 50,45" fill="#ffffff" fillOpacity="0.6" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold mb-2 font-montserrat"
                            >
                                Game Designer
                            </h3>
                            <p className="text-muted-foreground font-light mb-4 group-hover:text-foreground transition-colors">
                                Game Design
                            </p>
                            <div className="w-12 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors"></div>
                        </div>

                        {/* Team Member 4 - Web3 Strategy & Tokenomics */}
                        <div
                            className="bg-card p-8 rounded-lg hover:bg-muted transition-colors soft-shadow flex flex-col items-center text-center group"
                        >
                            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                                {/* Abstract placeholder SVG for team member */}
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#6a7484" />
                                            <stop offset="100%" stopColor="#8c93a4" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="40" r="25" fill="url(#grad4)" />
                                    <path d="M50,75 Q20,60 20,95 L80,95 Q80,60 50,75" fill="url(#grad4)" />
                                    <circle cx="50" cy="35" r="10" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-semibold mb-2 font-montserrat"
                            >
                                Blockchain Strategist
                            </h3>
                            <p className="text-muted-foreground font-light mb-4 group-hover:text-foreground transition-colors">
                                Web3 Strategy & Tokenomics
                            </p>
                            <div className="w-12 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section id="expertise" className="py-24 md:py-32 bg-[#d7d3d1] relative" data-oid="kctwt2e">
                <div className="max-w-7xl mx-auto px-6" data-oid="-0k:_si">
                    <h2
                        className="text-3xl md:text-4xl font-medium mb-16 font-montserrat"
                        data-oid="e36enmh"
                    >
                        Our Expertise
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="3.8we--">
                        {[
                            {
                                title: 'AAA Design',
                                icon: '✦',
                                description:
                                    'Premium quality design that meets the highest industry standards.',
                            },
                            {
                                title: 'Unreal Engine 5',
                                icon: '◆',
                                description:
                                    'Leveraging the latest in real-time 3D technology for immersive experiences.',
                            },
                            {
                                title: 'Web3 Integration',
                                icon: '⬢',
                                description:
                                    'Seamlessly connecting traditional web with blockchain technologies.',
                            },
                            {
                                title: 'Storytelling',
                                icon: '◈',
                                description:
                                    'Crafting compelling narratives that engage and captivate audiences.',
                            },
                        ].map((expertise, index) => (
                            <div
                                key={index}
                                className="bg-card p-8 rounded-lg hover:bg-muted transition-colors soft-shadow"
                                data-oid="k7963rf"
                            >
                                <div
                                    className="text-3xl mb-4 text-muted-foreground"
                                    data-oid="yi8nt9g"
                                >
                                    {expertise.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-3 font-montserrat"
                                    data-oid="joc25oe"
                                >
                                    {expertise.title}
                                </h3>
                                <p className="text-muted-foreground font-light" data-oid="mxf2ai5">
                                    {expertise.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 md:py-32 bg-[#d7d3d1] relative" data-oid="-nmovkb">
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"
                    data-oid="wrduul6"
                ></div>

                <div className="max-w-7xl mx-auto px-6" data-oid="3e:rb1_">
                    <div className="grid md:grid-cols-2 gap-12" data-oid="czxxo0k">
                        <div data-oid=":5viq_p">
                            <h2
                                className="text-3xl md:text-4xl font-medium mb-6 font-montserrat"
                                data-oid="dd1xax:"
                            >
                                Get in Touch
                            </h2>
                            <p className="text-muted-foreground mb-8 font-light" data-oid="z3xwyaq">
                                Interested in working with us or learning more about our services?
                                We'd love to hear from you.
                            </p>

                            <div className="space-y-4" data-oid="6e1mq1m">
                                <div data-oid="e6rzcfd">
                                    <h4
                                        className="text-sm text-muted-foreground mb-1"
                                        data-oid=".w_99sp"
                                    >
                                        Email
                                    </h4>
                                    <p className="text-foreground" data-oid="vt.kz1h">
                                        contact@hebstudios.com
                                    </p>
                                </div>
                                <div data-oid="64gm9z3">
                                    <h4
                                        className="text-sm text-muted-foreground mb-1"
                                        data-oid=":pxyr6w"
                                    >
                                        Location
                                    </h4>
                                    <p className="text-foreground" data-oid="-_ml_9e">
                                        Singapore
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div data-oid="wdat431">
                            <form className="space-y-6" data-oid="k.7vtz5">
                                <div data-oid="1s3oacy">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm text-muted-foreground mb-2"
                                        data-oid="kh1ygn1"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-input border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                                        data-oid="ao06tg7"
                                    />
                                </div>

                                <div data-oid="vyydc0_">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-muted-foreground mb-2"
                                        data-oid="r70j_x."
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-input border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                                        data-oid="i_wutpk"
                                    />
                                </div>

                                <div data-oid=".-lcp21">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm text-muted-foreground mb-2"
                                        data-oid="j.u1odx"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full bg-input border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                                        data-oid="osdc-hd"
                                    ></textarea>
                                </div>

                                <button
                                    className="w-full px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-colors"
                                    data-oid="ib-tqja"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t" data-oid="5az3i3m">
                <div className="max-w-7xl mx-auto px-6" data-oid="7ncm7cg">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="2pkvyzr"
                    >
                        <div className="flex items-center mb-6 md:mb-0" data-oid="pk7vof2">
                            <div className="w-10 h-10 mr-3 relative" data-oid="zi4.7cq">
                                <div
                                    className="flex items-center justify-center"
                                    data-oid="bnl_arf"
                                >
                                    <img
                                        src="/images/elephant-logo.png"
                                        alt="HEB Studios Logo"
                                        className="w-10 h-10"
                                        data-oid="5e8v:up"
                                    />
                                </div>
                            </div>
                            <div className="text-sm text-foreground" data-oid="9vh74cb">
                                HEB Studios Pte. Ltd.
                            </div>
                        </div>

                        <div
                            className="flex space-x-6 text-sm text-muted-foreground"
                            data-oid="x2nf_ix"
                        >
                            <button
                                onClick={() => (window as any).__legalModals?.openPrivacyPolicy()}
                                className="hover:text-foreground transition-colors"
                                data-oid="w4u_:6e"
                            >
                                Privacy Policy
                            </button>
                            <button
                                onClick={() => (window as any).__legalModals?.openTermsOfService()}
                                className="hover:text-foreground transition-colors"
                                data-oid="tgzu78b"
                            >
                                Terms of Service
                            </button>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                                data-oid="h7ae:--"
                            >
                                © 2025 HEB Studios
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            
            {/* Legal Modals */}
            <LegalModals />
        </div>
    );
}
