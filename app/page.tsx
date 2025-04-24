'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null); // Ref for the hero section

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        // Add listener to the whole window for simplicity
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const projects = [
        {
            id: 'bananium',
            title: 'bananium.ai',
            description:
                'A cutting-edge Web3 platform leveraging artificial intelligence to create immersive digital experiences.',
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
            className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-gray-100 font-sans overflow-x-hidden"
            data-oid="fwfwc79"
        >
            {/* Texture Overlay */}
            <div
                className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"
                data-oid="-gb3dz0"
            ></div>

            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                data-oid="d3zim1q"
            >
                <div
                    className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center"
                    data-oid="ik7frmq"
                >
                    <div className="flex items-center" data-oid="3c0p3v4">
                        {/* Logo */}
                        <img
                            src="/images/elephant-logo.png"
                            alt="HEB Studios Logo"
                            className="w-12 h-12 mr-4"
                            data-oid="0p8kxms"
                        />

                        <div className="text-xl font-medium tracking-tight" data-oid=".:0k.br">
                            HEB Studios
                        </div>
                    </div>

                    <div
                        className="hidden md:flex space-x-8 text-sm font-medium"
                        data-oid="q73.3y3"
                    >
                        <a
                            href="#about"
                            className="hover:text-white transition-colors"
                            data-oid="xqrueqm"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-white transition-colors"
                            data-oid="vw0xdjh"
                        >
                            Projects
                        </a>
                        <a
                            href="#expertise"
                            className="hover:text-white transition-colors"
                            data-oid="3qjzj:8"
                        >
                            Expertise
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-white transition-colors"
                            data-oid="ot8_f7x"
                        >
                            Contact
                        </a>
                    </div>

                    <button
                        className="hidden md:block px-5 py-2 border border-zinc-700 rounded-full text-sm hover:bg-zinc-800 transition-colors"
                        data-oid="a_s4r4x"
                    >
                        Get in Touch
                    </button>

                    <button className="md:hidden text-2xl" data-oid=":98s_x:">
                        ☰
                    </button>
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
                data-oid="lqmr15d"
            >
                {/* Existing radial gradient overlay - keep or remove depending on desired blend */}
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,40,40,0.3),rgba(0,0,0,0))] pointer-events-none -z-10" // Ensure it's behind the mouse effect
                    data-oid="wqaqp2a"
                ></div>

                <div
                    className={`max-w-7xl mx-auto px-6 py-24 md:py-32 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="e6spa84"
                >
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl font-montserrat"
                        data-oid="vvgbkf3"
                    >
                        Building the future of{' '}
                        <span className="text-zinc-400" data-oid=".r6whpl">
                            Web3 experiences
                        </span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-light"
                        data-oid="bqlu936"
                    >
                        HEB Studios specializes in creating cutting-edge Web3 projects with AAA
                        quality design, Unreal Engine 5, and immersive storytelling.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4" data-oid="ka5owpj">
                        <button
                            className="px-8 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors"
                            data-oid="7modpst"
                        >
                            Explore Our Work
                        </button>
                        <button
                            className="px-8 py-3 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors"
                            data-oid="qou9e8s"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Abstract 3D shape inspired by the provided images */}
                <div
                    className="absolute right-[-10%] bottom-[-10%] md:right-[-5%] md:bottom-[-5%] w-[600px] h-[600px] opacity-20 pointer-events-none"
                    data-oid="5hq7:q6"
                >
                    <div
                        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 blur-sm"
                        data-oid="cs2hn17"
                    ></div>
                    <div
                        className="absolute left-[100px] top-[50px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 blur-sm"
                        data-oid="0haj8yl"
                    ></div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 md:py-32 relative" data-oid="ne2syxp">
                <div className="max-w-7xl mx-auto px-6" data-oid="9uv9r_6">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="3gexo:m">
                        <div data-oid="yj9-343">
                            <h2
                                className="text-3xl md:text-4xl font-medium mb-6 font-montserrat"
                                data-oid="-4svxyr"
                            >
                                The Studio
                            </h2>
                            <p className="text-zinc-400 mb-6 font-light" data-oid="vwgvb8o">
                                HEB Studios Pte. Ltd. is a Singapore-based creative technology
                                company specializing in building cutting-edge Web3 oriented projects
                                and experiences.
                            </p>
                            <p className="text-zinc-400 mb-6 font-light" data-oid="busj32x">
                                We leverage AAA quality design, Unreal Engine 5, compelling
                                storytelling, and immersive quality to create digital experiences
                                that push boundaries and set new standards.
                            </p>
                            <p className="text-zinc-400 font-light" data-oid="blkfh7c">
                                Our mission is to bridge the gap between traditional digital
                                experiences and the emerging Web3 ecosystem, creating products that
                                are not only technologically advanced but also accessible and
                                engaging.
                            </p>
                        </div>

                        <div
                            className="relative h-[400px] rounded-lg overflow-hidden"
                            data-oid="2g8-m1c"
                        >
                            <img
                                src="/images/2-balls.png"
                                alt="Abstract two-ball graphic"
                                className="w-full h-full object-cover"
                                data-oid="gyzs5ro"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="py-24 md:py-32 bg-zinc-900 relative"
                data-oid="h2s7_r_"
            >
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"
                    data-oid="ig7p4ud"
                ></div>

                <div className="max-w-7xl mx-auto px-6" data-oid="395c8lt">
                    <h2
                        className="text-3xl md:text-4xl font-medium mb-16 font-montserrat"
                        data-oid="6sur9ru"
                    >
                        Our Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="x_281x3">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative rounded-lg overflow-hidden bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 h-[400px] cursor-pointer soft-shadow"
                                onMouseEnter={() => setActiveProject(project.id)}
                                onMouseLeave={() => setActiveProject(null)}
                                data-oid="iijtvjx"
                            >
                                <div
                                    className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity"
                                    data-oid="60c1zf_"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"
                                        data-oid=".gbeemu"
                                    ></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        data-oid="jowdan:"
                                    />
                                </div>

                                <div
                                    className="absolute inset-0 flex flex-col justify-end p-8 z-20"
                                    data-oid="wphxaft"
                                >
                                    <h3
                                        className="text-2xl font-semibold mb-3 font-montserrat"
                                        data-oid="w2x_fxu"
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className="text-zinc-400 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid=".fs6qg_"
                                    >
                                        {project.description}
                                    </p>
                                    <div
                                        className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="lxgrc1v"
                                    >
                                        <button
                                            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-full text-sm transition-colors"
                                            data-oid="eio2g_3"
                                        >
                                            View Project
                                        </button>
                                        <button
                                            className="px-4 py-2 border border-zinc-600 rounded-full text-sm hover:bg-zinc-600 transition-colors"
                                            data-oid="j86baf1"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section id="expertise" className="py-24 md:py-32 relative" data-oid="y.5c.yb">
                <div className="max-w-7xl mx-auto px-6" data-oid="f1j-0zu">
                    <h2
                        className="text-3xl md:text-4xl font-medium mb-16 font-montserrat"
                        data-oid="wuo9.ke"
                    >
                        Our Expertise
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="ob-myya">
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
                                className="bg-zinc-900 p-8 rounded-lg hover:bg-zinc-800 transition-colors soft-shadow"
                                data-oid="rh263gz"
                            >
                                <div className="text-3xl mb-4 text-zinc-500" data-oid="suuj192">
                                    {expertise.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-3 font-montserrat"
                                    data-oid="vygrde4"
                                >
                                    {expertise.title}
                                </h3>
                                <p className="text-zinc-400 font-light" data-oid="x0i:ufq">
                                    {expertise.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-24 md:py-32 bg-zinc-900 relative"
                data-oid=":f2ev7i"
            >
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"
                    data-oid="t9_yhli"
                ></div>

                <div className="max-w-7xl mx-auto px-6" data-oid="0ftwjxi">
                    <div className="grid md:grid-cols-2 gap-12" data-oid="f0y1h:7">
                        <div data-oid="404w61-">
                            <h2
                                className="text-3xl md:text-4xl font-medium mb-6 font-montserrat"
                                data-oid="8r06v41"
                            >
                                Get in Touch
                            </h2>
                            <p className="text-zinc-400 mb-8 font-light" data-oid="giyr1nw">
                                Interested in working with us or learning more about our services?
                                We'd love to hear from you.
                            </p>

                            <div className="space-y-4" data-oid="33h-ivt">
                                <div data-oid="bddpif4">
                                    <h4 className="text-sm text-zinc-500 mb-1" data-oid="ifsng9l">
                                        Email
                                    </h4>
                                    <p data-oid="4jy5jtp">contact@hebstudios.com</p>
                                </div>
                                <div data-oid="7eyzg87">
                                    <h4 className="text-sm text-zinc-500 mb-1" data-oid="o0e4jp6">
                                        Location
                                    </h4>
                                    <p data-oid="0c_u-jw">Singapore</p>
                                </div>
                            </div>
                        </div>

                        <div data-oid="qrr-q8v">
                            <form className="space-y-6" data-oid="yjxfkiv">
                                <div data-oid="_n_b3mt">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm text-zinc-500 mb-2"
                                        data-oid="rt6jxoy"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        data-oid="yq233qd"
                                    />
                                </div>

                                <div data-oid="qo4qt6-">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-zinc-500 mb-2"
                                        data-oid="o4jyzne"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        data-oid="uun7yjy"
                                    />
                                </div>

                                <div data-oid="q-6jfp7">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm text-zinc-500 mb-2"
                                        data-oid="e_-x2k7"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        data-oid="xz8vka2"
                                    ></textarea>
                                </div>

                                <button
                                    className="w-full px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
                                    data-oid="urf4mnz"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-zinc-800" data-oid="ek9rl5p">
                <div className="max-w-7xl mx-auto px-6" data-oid="tpz:8.x">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="syz.loa"
                    >
                        <div className="flex items-center mb-6 md:mb-0" data-oid="aq:zgy_">
                            <div className="w-10 h-10 mr-3 relative" data-oid="dhpi6h:">
                                <div
                                    className="absolute inset-0 bg-zinc-800 rounded-full shadow-lg flex items-center justify-center"
                                    data-oid="e_udkvb"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 text-zinc-400"
                                        fill="currentColor"
                                        data-oid="aen1w2i"
                                    >
                                        <path
                                            d="M19.5,9.5c-0.5-2.5-2.3-4.6-4.5-5.6c-0.7-0.3-1.4-0.5-2.1-0.6c-0.4-0.1-0.9-0.1-1.3-0.1c-0.4,0-0.9,0-1.3,0.1 c-0.7,0.1-1.4,0.3-2.1,0.6C6.3,4.9,4.5,7,4,9.5C3.7,10.8,3.8,12.2,4.4,13.4c0.5,1.1,1.4,2,2.5,2.5c0.5,0.2,1.1,0.4,1.7,0.4 c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.4c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.3-0.6,0.3-0.9c0-0.3-0.1-0.6-0.3-0.9 c-0.2-0.3-0.4-0.5-0.7-0.7c-0.3-0.2-0.6-0.3-0.9-0.4c-0.3-0.1-0.7-0.1-1-0.1c-0.6,0-1.2,0.1-1.7,0.4c-1.1,0.5-2,1.4-2.5,2.5 c-0.6,1.2-0.7,2.6-0.4,3.9c0.5,2.5,2.3,4.6,4.5,5.6c0.7,0.3,1.4,0.5,2.1,0.6c0.4,0.1,0.9,0.1,1.3,0.1c0.4,0,0.9,0,1.3-0.1 c0.7-0.1,1.4-0.3,2.1-0.6c2.2-1,4-3.1,4.5-5.6c0.3-1.3,0.2-2.7-0.4-3.9c-0.5-1.1-1.4-2-2.5-2.5c-0.5-0.2-1.1-0.4-1.7-0.4 c-0.3,0-0.7,0-1,0.1c-0.3,0.1-0.6,0.2-0.9,0.4c-0.3,0.2-0.5,0.4-0.7,0.7c-0.2,0.3-0.3,0.6-0.3,0.9c0,0.3,0.1,0.6,0.3,0.9 c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.7,0.1,1,0.1c0.6,0,1.2-0.1,1.7-0.4c1.1-0.5,2-1.4,2.5-2.5 C20.2,12.2,20.3,10.8,19.5,9.5z"
                                            data-oid="wawddb0"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-sm" data-oid="z:lalc4">
                                HEB Studios Pte. Ltd.
                            </div>
                        </div>

                        <div className="flex space-x-6 text-sm text-zinc-500" data-oid="ms7-oz9">
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="dlpcjek"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="gxqgrrm"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="la_lwkn"
                            >
                                © 2023 HEB Studios
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
