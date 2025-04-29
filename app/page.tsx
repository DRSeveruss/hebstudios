'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import LegalModals from '@/components/LegalModals';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeProject, setActiveProject] = useState<string | null>(null); // Keep for hover logic, maybe rename
    const [hoveredProject, setHoveredProject] = useState<string | null>(null); // Explicit state for desktop hover
    const [expandedProjects, setExpandedProjects] = useState<string[]>([]); // Keep for mobile tap
    const [isProjectsVisible, setIsProjectsVisible] = useState(false); // Track section visibility for desktop autoplay
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null); // Ref for the hero section
    const projectsSectionRef = useRef<HTMLElement>(null); // Ref for the projects section
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
                    // Hide menu with animation
                    mobileMenu.style.maxHeight = '0';
                    // Wait for animation to complete before hiding
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                    }, 300);
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
    }, []);

    // Mobile-only IntersectionObserver for individual video autoplay (Replaces the original one)
    useEffect(() => {
        const videos = [bananiumVideoRef.current, legendVideoRef.current];
        let observers: IntersectionObserver[] = []; // Use let for reassignment

        const setupMobileObservers = () => {
            // Clear existing observers first
            observers.forEach(obs => obs.disconnect());
            observers = []; // Reset the array

            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                videos.forEach(video => {
                    if (!video) return;
                    const observer = new IntersectionObserver(
                        ([entry]) => {
                            // Double-check if still mobile during callback
                            if (window.innerWidth < 768) {
                                if (entry.isIntersecting && entry.intersectionRatio === 1) {
                                    video.play().catch(e => console.error("Mobile autoplay failed:", e));
                                } else {
                                    video.pause();
                                }
                            }
                        },
                        { threshold: 1.0 }
                    );
                    observer.observe(video);
                    observers.push(observer); // Add the new observer
                });
            }
            // No else needed: if not mobile, observers array remains empty or cleared
        };

        // Initial setup
        setupMobileObservers();

        // Add resize listener
        window.addEventListener('resize', setupMobileObservers);

        // Cleanup function
        return () => {
            observers.forEach(obs => obs.disconnect()); // Disconnect all active observers
            window.removeEventListener('resize', setupMobileObservers); // Remove listener
        };
    }, []); // Empty dependency array ensures this runs once on mount, resize handles updates

    // IntersectionObserver for Projects Section (Desktop Autoplay)
    useEffect(() => {
        const section = projectsSectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Check screen width - only apply desktop logic if wider than md breakpoint (e.g., 768px)
                const isDesktop = window.innerWidth >= 768;
                if (isDesktop) {
                    setIsProjectsVisible(entry.isIntersecting);
                    if (entry.isIntersecting) {
                        // Play both videos only if not currently hovered
                        if (!hoveredProject) {
                            bananiumVideoRef.current?.play();
                            legendVideoRef.current?.play();
                        }
                    } else {
                        // Pause both videos when section scrolls out
                        bananiumVideoRef.current?.pause();
                        legendVideoRef.current?.pause();
                    }
                } else {
                     // Ensure visibility state is false on mobile if observer triggers
                    setIsProjectsVisible(false);
                }
            },
            { threshold: 0.1 } // Trigger when 10% is visible
        );

        observer.observe(section);

        // Also check initial state on load for desktop
        const checkInitialVisibility = () => {
            const isDesktop = window.innerWidth >= 768;
            if (isDesktop && section) {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                 setIsProjectsVisible(isVisible);
                 if (isVisible && !hoveredProject) {
                     bananiumVideoRef.current?.play().catch(e => console.error("Autoplay failed:", e));
                     legendVideoRef.current?.play().catch(e => console.error("Autoplay failed:", e));
                 }
            }
        };

        // Check visibility on load and resize
        checkInitialVisibility();
        window.addEventListener('resize', checkInitialVisibility);


        return () => {
            observer.disconnect();
            window.removeEventListener('resize', checkInitialVisibility);
        }
    }, [hoveredProject]); // Re-run observer logic if hover state changes

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
                        <Image
                            src="/images/elephant-logo.png"
                            alt="HEB Studios Logo"
                            width={48}
                            height={48}
                            className="mr-4"
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
                                if (mobileMenu.classList.contains('hidden')) {
                                    // Show menu with animation
                                    mobileMenu.classList.remove('hidden');
                                    // Use setTimeout to ensure the transition happens after display change
                                    setTimeout(() => {
                                        mobileMenu.style.maxHeight = '300px'; // Adjust based on content height
                                    }, 10);
                                } else {
                                    // Hide menu with animation
                                    mobileMenu.style.maxHeight = '0';
                                    // Wait for animation to complete before hiding
                                    setTimeout(() => {
                                        mobileMenu.classList.add('hidden');
                                    }, 300);
                                }
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
                    className="hidden absolute top-[calc(4rem+2rem)] left-0 right-0 bg-muted rounded-2xl mx-auto w-[16rem] p-6 shadow-lg z-40"
                    style={{
                        transition: "max-height 0.3s ease",
                        maxHeight: "0",
                        overflow: "hidden"
                    }}
                >
                    <div className="flex flex-col space-y-4 text-sm font-medium text-center">
                        <a
                            href="#about"
                            className="hover:text-foreground transition-colors py-2"
                            onClick={() => {
                                const mobileMenu = document.getElementById('mobile-menu');
                                if (mobileMenu) {
                                    // Hide menu with animation
                                    mobileMenu.style.maxHeight = '0';
                                    // Wait for animation to complete before hiding
                                    setTimeout(() => {
                                        mobileMenu.classList.add('hidden');
                                    }, 300);
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
                                    // Hide menu with animation
                                    mobileMenu.style.maxHeight = '0';
                                    // Wait for animation to complete before hiding
                                    setTimeout(() => {
                                        mobileMenu.classList.add('hidden');
                                    }, 300);
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
                                    // Hide menu with animation
                                    mobileMenu.style.maxHeight = '0';
                                    // Wait for animation to complete before hiding
                                    setTimeout(() => {
                                        mobileMenu.classList.add('hidden');
                                    }, 300);
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
                                    // Hide menu with animation
                                    mobileMenu.style.maxHeight = '0';
                                    // Wait for animation to complete before hiding
                                    setTimeout(() => {
                                        mobileMenu.classList.add('hidden');
                                    }, 300);
                                }
                            }}
                        >
                            Expertise
                        </a>
                        <a
                            href="#contact"
                            className="px-5 py-2 border border-foreground text-foreground rounded-full text-sm hover:bg-muted transition-colors mx-auto inline-block"
                            onClick={() => {
                                const mobileMenu = document.getElementById('mobile-menu');
                                if (mobileMenu) {
                                    // Hide menu with animation
                                    mobileMenu.style.maxHeight = '0';
                                    // Wait for animation to complete before hiding
                                    setTimeout(() => {
                                        mobileMenu.classList.add('hidden');
                                    }, 300);
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
                            <Image
                                src="/images/2-balls.png"
                                alt="Abstract two-ball graphic"
                                fill
                                className="object-cover"
                                data-oid="dk_etqf"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section - Add ref here */}
            <section ref={projectsSectionRef} id="projects" className="py-24 md:py-32 bg-[#d7d3d1] relative" data-oid=":w51yfz">
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" // Added pointer-events-none
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
                                className={`group relative rounded-lg overflow-hidden bg-card hover:bg-black/10 transition-all duration-300 h-[400px] cursor-pointer soft-shadow ${
                                    expandedProjects.includes(project.id) ? 'mobile-expanded' : ''
                                }`}
                                onClick={() => {
                                    // Only handle tap on mobile
                                    if (window.innerWidth < 768) {
                                        // Toggle expanded state for mobile
                                        setExpandedProjects(prev =>
                                            prev.includes(project.id)
                                                ? prev.filter(id => id !== project.id)
                                                : [...prev, project.id]
                                        );
                                    }
                                }}
                                onMouseEnter={() => {
                                    // Only handle hover on desktop
                                    if (window.innerWidth >= 768) {
                                        setHoveredProject(project.id);
                                        // Pause the specific video being hovered
                                        if (project.id === 'bananium') bananiumVideoRef.current?.pause();
                                        if (project.id === 'legend') legendVideoRef.current?.pause();
                                    }
                                    // Keep setActiveProject for potential other uses or remove if unused
                                    setActiveProject(project.id);
                                }}
                                onMouseLeave={() => {
                                    // Only handle hover on desktop
                                    if (window.innerWidth >= 768) {
                                        setHoveredProject(null);
                                        // Resume playing ONLY if the section is still visible
                                        if (isProjectsVisible) {
                                            if (project.id === 'bananium') bananiumVideoRef.current?.play();
                                            if (project.id === 'legend') legendVideoRef.current?.play();
                                        }
                                    }
                                     // Keep setActiveProject for potential other uses or remove if unused
                                    setActiveProject(null);
                                }}
                                data-oid="83usrlc"
                            >
                                {/* Video and Overlay Container */}
                                <div
                                    className="absolute inset-0 transition-opacity duration-300 pointer-events-none" // Removed opacity classes here
                                    data-oid="4i4na6a"
                                >
                                    {/* Gradient Overlay - Opacity changes based on state */}
                                    <div
                                        className={`absolute inset-0 z-10 transition-all duration-300 ${
                                            (expandedProjects.includes(project.id) || hoveredProject === project.id)
                                                ? 'bg-gradient-to-t from-white/80 via-white/50 to-transparent' // Stronger overlay when text visible
                                                : 'bg-gradient-to-t from-white/30 via-white/10 to-transparent' // Weaker overlay when playing
                                        }`}
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
                                            // Remove direct video hover handlers
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
                                            // Remove direct video hover handlers
                                        />
                                    ) : (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            data-oid=".ce2yxd"
                                        />
                                    )}
                                </div>

                                <div
                                    className="absolute inset-0 flex flex-col justify-end p-8 z-20"
                                    data-oid="pvjn_nq"
                                >
                                    {/* Title always visible at bottom */}
                                    <h3
                                        className="text-2xl font-semibold font-montserrat"
                                        data-oid="rpm9:iz"
                                    >
                                        {project.title}
                                    </h3>
                                    
                                    {/* Content that shows/hides based on state */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-out ${
                                        // Mobile Tapped State
                                        (expandedProjects.includes(project.id))
                                            ? 'max-h-[200px] opacity-100 mt-3'
                                        // Desktop Hovered State
                                        : (hoveredProject === project.id)
                                            ? 'md:max-h-[200px] md:opacity-100 md:mt-3 max-h-0 opacity-0 mt-0' // Apply desktop styles, ensure hidden on mobile unless tapped
                                        // Default Hidden State
                                        : 'max-h-0 opacity-0 mt-0'
                                    }`}>
                                        <p
                                            className="text-foreground mb-4" // Use foreground for better contrast on overlay
                                            data-oid=".3a4yzp"
                                        >
                                            {project.description}
                                        </p>
                                        
                                        {/* Button - visible when container is expanded */}
                                        <div className="flex">
                                            {project.id === 'bananium' ? (
                                                <a
                                                    href="https://bananium.ai/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 border border-foreground rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                                    // Prevent click propagation to parent div only on desktop
                                                    onClick={(e) => { if (window.innerWidth >= 768) e.stopPropagation(); }}
                                                >
                                                    View Project
                                                </a>
                                            ) : (
                                                <a
                                                    href="https://the-legend.io/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 border border-foreground rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                                    // Prevent click propagation to parent div only on desktop
                                                    onClick={(e) => { if (window.innerWidth >= 768) e.stopPropagation(); }}
                                                >
                                                    View Project
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    {/* Removed redundant desktop-only div */}
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
                            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-muted flex items-center justify-center relative">
                                <Image
                                    src="/images/solaris.png"
                                    alt={'Khalid "Solaris"'} // Corrected alt attribute using template literal
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3
                                className="text-xl font-semibold mb-2 font-montserrat"
                            >
                                Khalid &amp;quot;Solaris&amp;quot;
                            </h3>
                            <p className="text-muted-foreground font-light mb-4 group-hover:text-foreground transition-colors">
                                Operations Director & Studio Lead | Finance + UE5 Expert
                            </p>
                            <div className="w-12 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors"></div>
                        </div>

                        {/* Team Member 2 - Motion Design */}
                        <div
                            className="bg-card p-8 rounded-lg hover:bg-muted transition-colors soft-shadow flex flex-col items-center text-center group"
                        >
                            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-muted flex items-center justify-center relative">
                                <Image
                                    src="/images/max.png"
                                    alt="Max"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3
                                className="text-xl font-semibold mb-2 font-montserrat"
                            >
                                Max
                            </h3>
                            <p className="text-muted-foreground font-light mb-4 group-hover:text-foreground transition-colors">
                                Brand & Growth Director | UE5 Creator + Strategy
                            </p>
                            <div className="w-12 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors"></div>
                        </div>

                        {/* Team Member 3 - Game Design */}
                        <div
                            className="bg-card p-8 rounded-lg hover:bg-muted transition-colors soft-shadow flex flex-col items-center text-center group"
                        >
                            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-muted flex items-center justify-center relative">
                                <Image
                                    src="/images/hando.png"
                                    alt="Hando"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3
                                className="text-xl font-semibold mb-2 font-montserrat"
                            >
                                Hando
                            </h3>
                            <p className="text-muted-foreground font-light mb-4 group-hover:text-foreground transition-colors">
                                Technical Director | Web3 + Full-Stack Dev
                            </p>
                            <div className="w-12 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors"></div>
                        </div>

                        {/* Team Member 4 - Web3 Strategy & Tokenomics */}
                        <div
                            className="bg-card p-8 rounded-lg hover:bg-muted transition-colors soft-shadow flex flex-col items-center text-center group"
                        >
                            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-muted flex items-center justify-center relative">
                                <Image
                                    src="/images/drseverus.png"
                                    alt="DRSeverus"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3
                                className="text-xl font-semibold mb-2 font-montserrat"
                            >
                                DRSeverus
                            </h3>
                            <p className="text-muted-foreground font-light mb-4 group-hover:text-foreground transition-colors">
                                Blockchain Strategist | Product + Operations
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

            {/* Invest or Connect Section */}
            <section id="contact" className="py-24 md:py-32 bg-[#d7d3d1] relative" data-oid="-nmovkb">
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"
                    data-oid="wrduul6"
                ></div>

                <div className="max-w-7xl mx-auto px-6" data-oid="3e:rb1_">
                    {/* Use flexbox for layout: left (info), right (button) */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12" data-oid="czxxo0k">
                        {/* Left Area: Title, Company Info, Email */}
                        <div className="flex flex-col gap-4" data-oid=":5viq_p">
                            <h2
                                className="text-3xl md:text-4xl font-medium mb-2 font-montserrat" // Reduced bottom margin
                                data-oid="dd1xax:"
                            >
                                Invest or Connect
                            </h2>
                            <div className="text-foreground font-light" data-oid="company-info">
                                <p>HEB Studios Pte. Ltd.</p>
                                <p>Republic of Singapore</p>
                            </div>
                            <div data-oid="e6rzcfd">
                                <h4
                                    className="text-sm text-muted-foreground mb-1"
                                    data-oid=".w_99sp"
                                >
                                    Primary Contact
                                </h4>
                                <p className="text-foreground" data-oid="vt.kz1h">
                                    <a href="mailto:solaris@the-legend.io" className="hover:underline"> {/* Updated Email */}
                                        solaris@the-legend.io
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Right Area: Pitch Deck Button */}
                        <div className="flex-shrink-0 mt-2 md:mt-12" data-oid="pitch-deck-container"> {/* Increased desktop top margin */}
                            <a
                                href="/le-heb-pitchdeck-public/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out" // Larger button styles, updated hover
                                data-oid="pitch-deck-btn" // Added data-oid for potential tracking
                            >
                                View Pitch Deck
                            </a>
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
                                    <Image
                                        src="/images/elephant-logo.png"
                                        alt="HEB Studios Logo"
                                        width={40}
                                        height={40}
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
