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
            data-oid="lgzdk24"
        >
            {/* Texture Overlay */}
            <div
                className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"
                data-oid=":.mp-mr"
            ></div>

            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                data-oid="par:858"
            >
                <div
                    className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center"
                    data-oid="p:2xadb"
                >
                    <div className="flex items-center" data-oid="q_sn_rs">
                        {/* Logo */}
                        <img
                            src="/images/elephant-logo.png"
                            alt="HEB Studios Logo"
                            className="w-12 h-12 mr-4"
                            data-oid="bq6h59y"
                        />

                        <div className="text-xl font-medium tracking-tight" data-oid="_jjvbtg">
                            HEB Studios
                        </div>
                    </div>

                    <div
                        className="hidden md:flex space-x-8 text-sm font-medium"
                        data-oid="t2klnts"
                    >
                        <a
                            href="#about"
                            className="hover:text-white transition-colors"
                            data-oid="s-uc0b3"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-white transition-colors"
                            data-oid="jjw0__c"
                        >
                            Projects
                        </a>
                        <a
                            href="#expertise"
                            className="hover:text-white transition-colors"
                            data-oid="o4z62:u"
                        >
                            Expertise
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-white transition-colors"
                            data-oid="fnclwnr"
                        >
                            Contact
                        </a>
                    </div>

                    <button
                        className="hidden md:block px-5 py-2 border border-zinc-700 rounded-full text-sm hover:bg-zinc-800 transition-colors"
                        data-oid="eqgaf8u"
                    >
                        Get in Touch
                    </button>

                    <button className="md:hidden text-2xl" data-oid="tsjk:6b">
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
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl font-montserrat"
                        data-oid="cxklf6i"
                    >
                        Building the future of{' '}
                        <span className="text-zinc-400" data-oid="llrm2wd">
                            Web3 experiences
                        </span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-light"
                        data-oid="89pqiqt"
                    >
                        HEB Studios specializes in creating cutting-edge Web3 projects with AAA
                        quality design, Unreal Engine 5, and immersive storytelling.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4" data-oid="bx5mj9r">
                        <button
                            className="px-8 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors"
                            data-oid="tchawxp"
                        >
                            Explore Our Work
                        </button>
                        <button
                            className="px-8 py-3 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors"
                            data-oid="t5al:wq"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Abstract 3D shape inspired by the provided images */}
                <div
                    className="absolute right-[-10%] bottom-[-10%] md:right-[-5%] md:bottom-[-5%] w-[600px] h-[600px] opacity-20 pointer-events-none"
                    data-oid="64-qurd"
                >
                    <div
                        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 blur-sm"
                        data-oid="3uak0vr"
                    ></div>
                    <div
                        className="absolute left-[100px] top-[50px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 blur-sm"
                        data-oid="wcwc09b"
                    ></div>
                </div>
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
                            <p className="text-zinc-400 mb-6 font-light" data-oid="u29li6v">
                                HEB Studios Pte. Ltd. is a Singapore-based creative technology
                                company specializing in building cutting-edge Web3 oriented projects
                                and experiences.
                            </p>
                            <p className="text-zinc-400 mb-6 font-light" data-oid="tnt1p6m">
                                We leverage AAA quality design, Unreal Engine 5, compelling
                                storytelling, and immersive quality to create digital experiences
                                that push boundaries and set new standards.
                            </p>
                            <p className="text-zinc-400 font-light" data-oid="nghz5bn">
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
            <section
                id="projects"
                className="py-24 md:py-32 bg-zinc-900 relative"
                data-oid=":w51yfz"
            >
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
                                className="group relative rounded-lg overflow-hidden bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 h-[400px] cursor-pointer soft-shadow"
                                onMouseEnter={() => setActiveProject(project.id)}
                                onMouseLeave={() => setActiveProject(null)}
                                data-oid="83usrlc"
                            >
                                <div
                                    className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity"
                                    data-oid="4i4na6a"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"
                                        data-oid="6nupe40"
                                    ></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        data-oid=".ce2yxd"
                                    />
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
                                        className="text-zinc-400 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid=".3a4yzp"
                                    >
                                        {project.description}
                                    </p>
                                    <div
                                        className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="yvy71p9"
                                    >
                                        <button
                                            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-full text-sm transition-colors"
                                            data-oid="h600ff6"
                                        >
                                            View Project
                                        </button>
                                        <button
                                            className="px-4 py-2 border border-zinc-600 rounded-full text-sm hover:bg-zinc-600 transition-colors"
                                            data-oid="0hx8b5k"
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
            <section id="expertise" className="py-24 md:py-32 relative" data-oid="kctwt2e">
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
                                className="bg-zinc-900 p-8 rounded-lg hover:bg-zinc-800 transition-colors soft-shadow"
                                data-oid="k7963rf"
                            >
                                <div className="text-3xl mb-4 text-zinc-500" data-oid="yi8nt9g">
                                    {expertise.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-3 font-montserrat"
                                    data-oid="joc25oe"
                                >
                                    {expertise.title}
                                </h3>
                                <p className="text-zinc-400 font-light" data-oid="mxf2ai5">
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
                data-oid="-nmovkb"
            >
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
                            <p className="text-zinc-400 mb-8 font-light" data-oid="z3xwyaq">
                                Interested in working with us or learning more about our services?
                                We'd love to hear from you.
                            </p>

                            <div className="space-y-4" data-oid="6e1mq1m">
                                <div data-oid="e6rzcfd">
                                    <h4 className="text-sm text-zinc-500 mb-1" data-oid=".w_99sp">
                                        Email
                                    </h4>
                                    <p data-oid="vt.kz1h">contact@hebstudios.com</p>
                                </div>
                                <div data-oid="64gm9z3">
                                    <h4 className="text-sm text-zinc-500 mb-1" data-oid=":pxyr6w">
                                        Location
                                    </h4>
                                    <p data-oid="-_ml_9e">Singapore</p>
                                </div>
                            </div>
                        </div>

                        <div data-oid="wdat431">
                            <form className="space-y-6" data-oid="k.7vtz5">
                                <div data-oid="1s3oacy">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm text-zinc-500 mb-2"
                                        data-oid="kh1ygn1"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        data-oid="ao06tg7"
                                    />
                                </div>

                                <div data-oid="vyydc0_">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-zinc-500 mb-2"
                                        data-oid="r70j_x."
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        data-oid="i_wutpk"
                                    />
                                </div>

                                <div data-oid=".-lcp21">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm text-zinc-500 mb-2"
                                        data-oid="j.u1odx"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        data-oid="osdc-hd"
                                    ></textarea>
                                </div>

                                <button
                                    className="w-full px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
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
            <footer className="py-12 border-t border-zinc-800" data-oid="5az3i3m">
                <div className="max-w-7xl mx-auto px-6" data-oid="7ncm7cg">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="2pkvyzr"
                    >
                        <div className="flex items-center mb-6 md:mb-0" data-oid="pk7vof2">
                            <div className="w-10 h-10 mr-3 relative" data-oid="zi4.7cq">
                                <div
                                    className="absolute inset-0 bg-zinc-800 rounded-full shadow-lg flex items-center justify-center"
                                    data-oid="bnl_arf"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 text-zinc-400"
                                        fill="currentColor"
                                        data-oid="5e8v:up"
                                    >
                                        <path
                                            d="M19.5,9.5c-0.5-2.5-2.3-4.6-4.5-5.6c-0.7-0.3-1.4-0.5-2.1-0.6c-0.4-0.1-0.9-0.1-1.3-0.1c-0.4,0-0.9,0-1.3,0.1 c-0.7,0.1-1.4,0.3-2.1,0.6C6.3,4.9,4.5,7,4,9.5C3.7,10.8,3.8,12.2,4.4,13.4c0.5,1.1,1.4,2,2.5,2.5c0.5,0.2,1.1,0.4,1.7,0.4 c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.4c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.3-0.6,0.3-0.9c0-0.3-0.1-0.6-0.3-0.9 c-0.2-0.3-0.4-0.5-0.7-0.7c-0.3-0.2-0.6-0.3-0.9-0.4c-0.3-0.1-0.7-0.1-1-0.1c-0.6,0-1.2,0.1-1.7,0.4c-1.1,0.5-2,1.4-2.5,2.5 c-0.6,1.2-0.7,2.6-0.4,3.9c0.5,2.5,2.3,4.6,4.5,5.6c0.7,0.3,1.4,0.5,2.1,0.6c0.4,0.1,0.9,0.1,1.3,0.1c0.4,0,0.9,0,1.3-0.1 c0.7-0.1,1.4-0.3,2.1-0.6c2.2-1,4-3.1,4.5-5.6c0.3-1.3,0.2-2.7-0.4-3.9c-0.5-1.1-1.4-2-2.5-2.5c-0.5-0.2-1.1-0.4-1.7-0.4 c-0.3,0-0.7,0-1,0.1c-0.3,0.1-0.6,0.2-0.9,0.4c-0.3,0.2-0.5,0.4-0.7,0.7c-0.2,0.3-0.3,0.6-0.3,0.9c0,0.3,0.1,0.6,0.3,0.9 c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.7,0.1,1,0.1c0.6,0,1.2-0.1,1.7-0.4c1.1-0.5,2-1.4,2.5-2.5 C20.2,12.2,20.3,10.8,19.5,9.5z"
                                            data-oid="h7:kdg9"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-sm" data-oid="9vh74cb">
                                HEB Studios Pte. Ltd.
                            </div>
                        </div>

                        <div className="flex space-x-6 text-sm text-zinc-500" data-oid="x2nf_ix">
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="w4u_:6e"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="tgzu78b"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="h7ae:--"
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
