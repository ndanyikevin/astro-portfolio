import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../public/assets/assets';


export default function Navbar({ isDarkMode, setIsDarkMode }) {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src={assets.header_bg_color} alt="background image" className="w-full" />
            </div>

            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
                    isScroll
                        ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
                        : ''
                }`}
            >
                <a href="#top">
                    <img
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        className="w-28 cursor-pointer mr-14"
                        alt="ndanyikevin"
                    />
                </a>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
                        isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
                    }`}
                >
                    <li className="font-ovo">
                        <a href="#top">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="font-ovo">
                            About Me
                        </a>
                    </li>
                    <li className="font-ovo">
                        <a href="#services">Services</a>
                    </li>
                    <li className="font-ovo">
                        <a href="#work">My Work</a>
                    </li>
                    <li className="font-ovo">
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode((prev) => !prev)}>
                        <img
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                            alt="toggle dark mode"
                            className="w-6"
                        />
                    </button>

                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-4 border border-gray-500 rounded-full ml-4 py-2.5 font-ovo dark:border-white/50"
                    >
                        Contact
                        <img
                            src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                            className="w-3"
                            alt="arrow icon"
                        />
                    </a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img
                            src={isDarkMode ? assets.menu_white : assets.menu_black}
                            alt="menu icon"
                            className="w-6"
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-150 dark:bg-darkHover dark:text-white"
                    ref={sideMenuRef}
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img
                            src={isDarkMode ? assets.close_white : assets.close_black}
                            alt="close menu"
                            className="w-5 cursor-pointer"
                        />
                    </div>
                    <li className="font-ovo" onClick={closeMenu}>
                        <a href="#top">Home</a>
                    </li>
                    <li onClick={closeMenu}>
                        <a href="#about" className="font-ovo">
                            About Me
                        </a>
                    </li>
                    <li className="font-ovo" onClick={closeMenu}>
                        <a href="#services">Services</a>
                    </li>
                    <li className="font-ovo" onClick={closeMenu}>
                        <a href="#mywork">My Work</a>
                    </li>
                    <li className="font-ovo" onClick={closeMenu}>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
