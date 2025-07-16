import React, { useEffect } from 'react';
import myImage from './images/image.webp';
import Connect from './Connect';

export default function Home() {

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function loop() {
        const typedText = document.getElementById('typed-text');
        const phrases = ["Aspiring Web Developer", "B.Tech CSE Student", "A JavaScript Enthusiast", "Turning Code into Creation", "Frontend Focused, Future Full-Stack"];

        while (true) { // infinite loop to cycle through phrases
            for (let phrase of phrases) {
                // Typing effect
                for (let i = 0; i <= phrase.length; i++) {
                    typedText.textContent = phrase.substring(0, i);
                    await delay(100); // typing speed
                }

                await delay(1000); // pause after full phrase

                // Deleting effect
                for (let i = phrase.length; i >= 0; i--) {
                    typedText.textContent = phrase.substring(0, i);
                    await delay(50); // deleting speed
                }
                await delay(500); // pause before next phrase
            }
        }
    }

    useEffect(() => {
        loop(); // Run once on mount
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Connect />
            <section id="hero">
                <div className="hero-text">
                    <h1>Hi! I'm <span className="highlight">Adarsh Singh</span></h1>
                    <p><span id="typed-text"></span></p>
                </div>
                <div className='text-center'>
                    <img src={myImage} id="myPic" alt="MyImage" />
                </div>
            </section>
        </>
    )
}
