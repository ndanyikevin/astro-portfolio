import React from 'react';
import {assets} from "../../public/assets/assets";

export default function Footer({ isDarkMode }) {
    return (
        <div className="mt-20">
            <div className="text-center">
                <img
                    src={isDarkMode ? assets.logo_dark : assets.logo}
                    alt="logo"
                    className="w-36 mx-auto mb-2"
                />
                <div className="w-max flex items-center gap-2 mx-auto">
                    <img
                        src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                        alt="email icon"
                        className="w-6"
                    />
                    info@ndanyikevin.dev
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>
                    &copy; {new Date().getFullYear()} Kevin Ndanyi. All rights reserved.
                </p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a href="https://github.com/ndanyikevin" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kevin-ndanyi-1b5966b4/" target="_blank" rel="noopener noreferrer">
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
