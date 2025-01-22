import { section } from 'framer-motion/client'
import gsap from 'gsap';
import React, { useEffect } from 'react'

const PackagePdfGenContent = () => {
    // gsap inside useEffect
    useEffect(() => {
        // GSAP Animation
        gsap.fromTo(
            ".pdfSection", 
            { scale: 1.5 }, // Initial state
            {
                scale: 1, // Final state
                duration: 1, // Animation duration
                ease: "power2.out", // Easing function
                delay:1,
            }
        );
    }, []); // Run only on component mount
    return (
        <section className="h-full flex justify-center items-center mr-3 pdfSection ]">
            <div className="mx-auto">
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] font-bold text-4xl p-3'>Generating PDF</h1>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-gray-50 via-gray-600 to-black text-2xl'>Hold on your second, your pdf is in progress.....</p>
            </div>

        </section>
    )
}

export default PackagePdfGenContent