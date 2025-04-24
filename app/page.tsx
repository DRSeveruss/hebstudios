'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => {
        setIsLoaded(true);
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
            data-oid="2g90.-c"
        >
            {/* Texture Overlay */}
            <div
                className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"
                data-oid="n5gy99:"
            ></div>

            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                data-oid="51ld623"
            >
                <div
                    className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center"
                    data-oid="gs_bxob"
                >
                    <div className="flex items-center" data-oid="jag30er">
                        {/* Logo - Elephant shape inspired by the provided image */}
                        <div className="w-12 h-12 mr-4 relative" data-oid="jh9qeo1">
                            <div
                                className="absolute inset-0 bg-zinc-800 rounded-full shadow-lg flex items-center justify-center"
                                data-oid="jgzm31x"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-zinc-400"
                                    fill="currentColor"
                                    data-oid="r8wb03t"
                                >
                                    <path
                                        d="M19.5,9.5c-0.5-2.5-2.3-4.6-4.5-5.6c-0.7-0.3-1.4-0.5-2.1-0.6c-0.4-0.1-0.9-0.1-1.3-0.1c-0.4,0-0.9,0-1.3,0.1 c-0.7,0.1-1.4,0.3-2.1,0.6C6.3,4.9,4.5,7,4,9.5C3.7,10.8,3.8,12.2,4.4,13.4c0.5,1.1,1.4,2,2.5,2.5c0.5,0.2,1.1,0.4,1.7,0.4 c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.4c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.3-0.6,0.3-0.9c0-0.3-0.1-0.6-0.3-0.9 c-0.2-0.3-0.4-0.5-0.7-0.7c-0.3-0.2-0.6-0.3-0.9-0.4c-0.3-0.1-0.7-0.1-1-0.1c-0.6,0-1.2,0.1-1.7,0.4c-1.1,0.5-2,1.4-2.5,2.5 c-0.6,1.2-0.7,2.6-0.4,3.9c0.5,2.5,2.3,4.6,4.5,5.6c0.7,0.3,1.4,0.5,2.1,0.6c0.4,0.1,0.9,0.1,1.3,0.1c0.4,0,0.9,0,1.3-0.1 c0.7-0.1,1.4-0.3,2.1-0.6c2.2-1,4-3.1,4.5-5.6c0.3-1.3,0.2-2.7-0.4-3.9c-0.5-1.1-1.4-2-2.5-2.5c-0.5-0.2-1.1-0.4-1.7-0.4 c-0.3,0-0.7,0-1,0.1c-0.3,0.1-0.6,0.2-0.9,0.4c-0.3,0.2-0.5,0.4-0.7,0.7c-0.2,0.3-0.3,0.6-0.3,0.9c0,0.3,0.1,0.6,0.3,0.9 c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.7,0.1,1,0.1c0.6,0,1.2-0.1,1.7-0.4c1.1-0.5,2-1.4,2.5-2.5 C20.2,12.2,20.3,10.8,19.5,9.5z"
                                        data-oid="0w57:h3"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-xl font-medium tracking-tight" data-oid="5v6j5mt">
                            HEB Studios
                        </div>
                    </div>

                    <div
                        className="hidden md:flex space-x-8 text-sm font-medium"
                        data-oid="6y1mpzp"
                    >
                        <a
                            href="#about"
                            className="hover:text-white transition-colors"
                            data-oid="f-e.kzh"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-white transition-colors"
                            data-oid="424.5fx"
                        >
                            Projects
                        </a>
                        <a
                            href="#expertise"
                            className="hover:text-white transition-colors"
                            data-oid="gqx83il"
                        >
                            Expertise
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-white transition-colors"
                            data-oid="g_:2wpb"
                        >
                            Contact
                        </a>
                    </div>

                    <button
                        className="hidden md:block px-5 py-2 border border-zinc-700 rounded-full text-sm hover:bg-zinc-800 transition-colors"
                        data-oid="tiydqus"
                    >
                        Get in Touch
                    </button>

                    <button className="md:hidden text-2xl" data-oid="4i248-7">
                        ☰
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="min-h-screen flex items-center relative overflow-hidden"
                data-oid="t_yje8b"
            >
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,40,40,0.3),rgba(0,0,0,0))] pointer-events-none"
                    data-oid="wrwa148"
                ></div>

                <div
                    className={`max-w-7xl mx-auto px-6 py-24 md:py-32 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="6vgvy-_"
                >
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-4xl"
                        data-oid="xlg:5_l"
                    >
                        Building the future of{' '}
                        <span className="text-zinc-400" data-oid="nrogexn">
                            Web3 experiences
                        </span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12"
                        data-oid="fmn-3qn"
                    >
                        HEB Studios specializes in creating cutting-edge Web3 projects with AAA
                        quality design, Unreal Engine 5, and immersive storytelling.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4" data-oid="2o7-7c7">
                        <button
                            className="px-8 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors"
                            data-oid="x1nnorb"
                        >
                            Explore Our Work
                        </button>
                        <button
                            className="px-8 py-3 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors"
                            data-oid="illv-9n"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Abstract 3D shape inspired by the provided images */}
                <div
                    className="absolute right-[-10%] bottom-[-10%] md:right-[-5%] md:bottom-[-5%] w-[600px] h-[600px] opacity-20 pointer-events-none"
                    data-oid="gnte.k0"
                >
                    <div
                        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 blur-sm"
                        data-oid="13oguql"
                    ></div>
                    <div
                        className="absolute left-[100px] top-[50px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 blur-sm"
                        data-oid="_4so6ur"
                    ></div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 md:py-32 relative" data-oid="matsvx3">
                <div className="max-w-7xl mx-auto px-6" data-oid="ixu1zk7">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="3t54lf6">
                        <div data-oid="d9fkacf">
                            <h2 className="text-3xl md:text-4xl font-light mb-6" data-oid="7-:nnc8">
                                The Studio
                            </h2>
                            <p className="text-zinc-400 mb-6" data-oid="xav269x">
                                HEB Studios Pte. Ltd. is a Singapore-based creative technology
                                company specializing in building cutting-edge Web3 oriented projects
                                and experiences.
                            </p>
                            <p className="text-zinc-400 mb-6" data-oid="d8:ez16">
                                We leverage AAA quality design, Unreal Engine 5, compelling
                                storytelling, and immersive quality to create digital experiences
                                that push boundaries and set new standards.
                            </p>
                            <p className="text-zinc-400" data-oid="c0ybp0c">
                                Our mission is to bridge the gap between traditional digital
                                experiences and the emerging Web3 ecosystem, creating products that
                                are not only technologically advanced but also accessible and
                                engaging.
                            </p>
                        </div>

                        <div
                            className="relative h-[400px] rounded-lg overflow-hidden bg-zinc-900"
                            data-oid="058fkgm"
                        >
                            <div
                                className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]"
                                data-oid="glbyy:l"
                            ></div>
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                data-oid="ult2k9."
                            >
                                <div className="w-[200px] h-[200px] relative" data-oid="jxfl-ux">
                                    <div
                                        className="absolute w-[200px] h-[200px] rounded-full bg-zinc-800 shadow-xl"
                                        data-oid="c5xiewv"
                                    ></div>
                                    <div
                                        className="absolute left-[50px] top-[25px] w-[200px] h-[200px] rounded-full bg-zinc-700 shadow-xl"
                                        data-oid=":-_.xdc"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="py-24 md:py-32 bg-zinc-900 relative"
                data-oid="5uqc:on"
            >
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"
                    data-oid="fw_i67:"
                ></div>

                <div className="max-w-7xl mx-auto px-6" data-oid="me.j:hk">
                    <h2 className="text-3xl md:text-4xl font-light mb-16" data-oid="bd_vqsy">
                        Our Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="mypoj-p">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative rounded-lg overflow-hidden bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 h-[400px] cursor-pointer"
                                onMouseEnter={() => setActiveProject(project.id)}
                                onMouseLeave={() => setActiveProject(null)}
                                data-oid="k5m19qj"
                            >
                                <div
                                    className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity"
                                    data-oid="fgj.7vd"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"
                                        data-oid="j_8vag6"
                                    ></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        data-oid="8z6mz2."
                                    />
                                </div>

                                <div
                                    className="absolute inset-0 flex flex-col justify-end p-8 z-20"
                                    data-oid="rudwu5a"
                                >
                                    <h3 className="text-2xl font-medium mb-3" data-oid=":to3n50">
                                        {project.title}
                                    </h3>
                                    <p
                                        className="text-zinc-400 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="_nfzk-j"
                                    >
                                        {project.description}
                                    </p>
                                    <div
                                        className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        data-oid="1hz2-ng"
                                    >
                                        <button
                                            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-full text-sm transition-colors"
                                            data-oid="m98pnhv"
                                        >
                                            View Project
                                        </button>
                                        <button
                                            className="px-4 py-2 border border-zinc-600 rounded-full text-sm hover:bg-zinc-600 transition-colors"
                                            data-oid="txjz6dg"
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
            <section id="expertise" className="py-24 md:py-32 relative" data-oid="7n9wd80">
                <div className="max-w-7xl mx-auto px-6" data-oid="i01upmr">
                    <h2 className="text-3xl md:text-4xl font-light mb-16" data-oid="xfqz3z_">
                        Our Expertise
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="8m:i-_u">
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
                                className="bg-zinc-900 p-8 rounded-lg hover:bg-zinc-800 transition-colors"
                                data-oid="2k9ajxj"
                            >
                                <div className="text-3xl mb-4 text-zinc-500" data-oid="kmxjwyp">
                                    {expertise.icon}
                                </div>
                                <h3 className="text-xl font-medium mb-3" data-oid="koelfci">
                                    {expertise.title}
                                </h3>
                                <p className="text-zinc-400" data-oid="z0n5227">
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
                data-oid="8fqchlu"
            >
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"
                    data-oid="d6eydc9"
                ></div>

                <div className="max-w-7xl mx-auto px-6" data-oid="21jp2a:">
                    <div className="grid md:grid-cols-2 gap-12" data-oid="t:0r80u">
                        <div data-oid="7g.0gli">
                            <h2 className="text-3xl md:text-4xl font-light mb-6" data-oid="cya0ssp">
                                Get in Touch
                            </h2>
                            <p className="text-zinc-400 mb-8" data-oid=":fls1ud">
                                Interested in working with us or learning more about our services?
                                We'd love to hear from you.
                            </p>

                            <div className="space-y-4" data-oid="vlo5uay">
                                <div data-oid="9xj.efn">
                                    <h4 className="text-sm text-zinc-500 mb-1" data-oid="dcdf_85">
                                        Email
                                    </h4>
                                    <p data-oid="8styk3s">contact@hebstudios.com</p>
                                </div>
                                <div data-oid="1pcfm51">
                                    <h4 className="text-sm text-zinc-500 mb-1" data-oid=".j17yz1">
                                        Location
                                    </h4>
                                    <p data-oid="1a1de1f">Singapore</p>
                                </div>
                            </div>
                        </div>

                        <div data-oid="ysqs91v">
                            <form className="space-y-6" data-oid="aydnvp8">
                                <div data-oid="zm1z6xu">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm text-zinc-500 mb-2"
                                        data-oid="hon_r8k"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        data-oid="m20.0r-"
                                    />
                                </div>

                                <div data-oid="kzrisbz">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-zinc-500 mb-2"
                                        data-oid="kcapp2w"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        data-oid="lh4_ffp"
                                    />
                                </div>

                                <div data-oid="hx1m2p.">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm text-zinc-500 mb-2"
                                        data-oid="x28oky3"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        data-oid="lr26wlp"
                                    ></textarea>
                                </div>

                                <button
                                    className="w-full px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
                                    data-oid="m.ebq44"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-zinc-800" data-oid="fbbj:ax">
                <div className="max-w-7xl mx-auto px-6" data-oid="o6ake71">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="oqkkuz-"
                    >
                        <div className="flex items-center mb-6 md:mb-0" data-oid="ugdsid.">
                            <div className="w-10 h-10 mr-3 relative" data-oid="r2e7r9u">
                                <div
                                    className="absolute inset-0 bg-zinc-800 rounded-full shadow-lg flex items-center justify-center"
                                    data-oid="4lkeb11"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 text-zinc-400"
                                        fill="currentColor"
                                        data-oid="cnqiqoz"
                                    >
                                        <path
                                            d="M19.5,9.5c-0.5-2.5-2.3-4.6-4.5-5.6c-0.7-0.3-1.4-0.5-2.1-0.6c-0.4-0.1-0.9-0.1-1.3-0.1c-0.4,0-0.9,0-1.3,0.1 c-0.7,0.1-1.4,0.3-2.1,0.6C6.3,4.9,4.5,7,4,9.5C3.7,10.8,3.8,12.2,4.4,13.4c0.5,1.1,1.4,2,2.5,2.5c0.5,0.2,1.1,0.4,1.7,0.4 c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.4c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.3-0.6,0.3-0.9c0-0.3-0.1-0.6-0.3-0.9 c-0.2-0.3-0.4-0.5-0.7-0.7c-0.3-0.2-0.6-0.3-0.9-0.4c-0.3-0.1-0.7-0.1-1-0.1c-0.6,0-1.2,0.1-1.7,0.4c-1.1,0.5-2,1.4-2.5,2.5 c-0.6,1.2-0.7,2.6-0.4,3.9c0.5,2.5,2.3,4.6,4.5,5.6c0.7,0.3,1.4,0.5,2.1,0.6c0.4,0.1,0.9,0.1,1.3,0.1c0.4,0,0.9,0,1.3-0.1 c0.7-0.1,1.4-0.3,2.1-0.6c2.2-1,4-3.1,4.5-5.6c0.3-1.3,0.2-2.7-0.4-3.9c-0.5-1.1-1.4-2-2.5-2.5c-0.5-0.2-1.1-0.4-1.7-0.4 c-0.3,0-0.7,0-1,0.1c-0.3,0.1-0.6,0.2-0.9,0.4c-0.3,0.2-0.5,0.4-0.7,0.7c-0.2,0.3-0.3,0.6-0.3,0.9c0,0.3,0.1,0.6,0.3,0.9 c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.7,0.1,1,0.1c0.6,0,1.2-0.1,1.7-0.4c1.1-0.5,2-1.4,2.5-2.5 C20.2,12.2,20.3,10.8,19.5,9.5z"
                                            data-oid="t:_3l-u"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-sm" data-oid="rua60fl">
                                HEB Studios Pte. Ltd.
                            </div>
                        </div>

                        <div className="flex space-x-6 text-sm text-zinc-500" data-oid="hjrog0x">
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="yvf3jps"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="amw55eg"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                                data-oid="j:83xjc"
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
