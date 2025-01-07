
import React, { useEffect } from 'react';
import Hero from '../../components/Hero';
import Companion from '../../components/Companion';
import Adventure from '../../components/Adventure';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      '.hero',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 1,
        ease: 'power1.inOut',
      }
    );

    // Companion Section Animation
    gsap.from('.companion', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.companion',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Adventure Section Animation
    gsap.from('.adventure', {
      scale: 0.8,
      opacity: 0,
      duration: 2,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.adventure',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <>
      <div className="hero"><Hero /></div>
      <div className="companion"><Companion /></div>
      <div className="adventure"><Adventure /></div>
    </>
  );
};

export default Home;
