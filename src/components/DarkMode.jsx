// src/components/App.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { Navbar, Header, About, Services, Work, Contact, Footer } from '.';

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const userTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(userTheme === 'dark' || (!userTheme && prefersDark));
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.removeItem('theme');
        }
    }, [isDarkMode]);

    return (
        <>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Header isDarkMode={isDarkMode} />
            <About isDarkMode={isDarkMode} />
            <Services isDarkMode={isDarkMode} />
            <Work isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </>
    );
}
