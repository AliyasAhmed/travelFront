import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a192f3a] text-white">
      {/* Hero Section */}
      <div className="text-center p-12 md:p-20">
        <h1 className="text-6xl font-extrabold uppercase">webinvolve</h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Software Company
        </p>
      </div>

      {/* About Section */}
      <div className=" px-10 md:px-20 py-10 bg-[#00000065] text-center">
        <h2 className="text-4xl font-bold text-white">WHAT WE DO</h2>
        <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
          Technology-driven, music distribution, record label, and rights management.
        </p>
      </div>

      {/* Artists Section */}
      <div className="px-10 md:px-20 py-10 text-center">
        <h2 className="text-4xl font-bold">EVERY Design IS DIFFERENT</h2>
        <div className="flex justify-center gap-10 mt-8 mx-auto">
          <img src=".\src\assets\maizbaanLogo.png" alt="Design" className="invert[1] w-[20rem] rot" />
        </div>
      </div>

      {/* Data & Analytics Section */}
      <div className="px-10 md:px-20 py-10 bg-[#00000065] text-center">
        <h2 className="text-4xl font-bold text-white">About Us</h2>
        <p className="text-justify text-lg md:text-xl leading-relaxed mb-6 text-gray-200">
          Welcome to Web Involve, your leading digital solution company,
          headquartered in the gorgeous region of Kashmir, kashmir. Our
          objective is to revolutionize the online presence of enterprises,
          companies, and others, including those in Kashmir and throughout the
          world. By providing cutting-edge technological solutions and unrivaled
          services that foster confidence, deliver quality, and generate high
          revenues and profits for our valued customers. At Web Involve, we
          recognize the importance of the digital landscape in today's corporate
          world, and we are dedicated to helping you to prosper in this dynamic
          environment. With years of experience in the digital marketing
          business and a devoted team of professionals, we are well-prepared to
          manage a wide range of services. At Web Involve, we are more than
          simply a professional team; we are a group of IT enthusiasts who are
          passionate about driving innovation and staying ahead of the
          competition. Our knowledge of social media platforms and cyber
          security helps us to navigate the digital arena with confidence and
          finesse. As a company, we are dedicated to our clients' success, and
          we think that their growth directly translates into our own growth. We
          judge our success based on the success stories of the businesses we
          support. We understand how important it is for you to build your
          business, which is why we provide personalized business growth
          consulting. Our team collaborates with yours to assess, strategize,
          and implement ideas that will take your company to new heights. Jasim
          Muzamil Javid, an expert tech specialist and imaginative tech geek,
          developed Web Involve. Driven by an unshakable passion for technology
          and a profound understanding of computer science, cyber security,
          business, and the digital landscape, Jasim set out to empower
          enterprises in kashmir, especially in the captivating region of
          Kashmir, and bridge the digital divide. Possessing a vast amount of
          expertise in the field of ethical hacking and digital technology,
          Jasim identified a need in the market for comprehensive and superior
          digital solutions for enterprises, firms, or organizations of all
          kinds, particularly those in Kashmir. This insight stoked his desire
          to start his own business, and he eventually founded Web Involve. We
          at WebInvolve believe that building long-term relationships with our
          clients is the key to success. Our client-centered approach and great
          customer service ensure that you are always heard and that your
          objectives are prioritized. So, join forces with WebInvolve and
          together, we can dominate the digital universe as a whole. Let's go on
          this digital journey and see your business grow like never before!
          Remember that WebInvolve is more than simply a corporation; it is
          dedicated to your success. Together, let's make your aspirations a
          reality
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-semibold">Join Our Revolution</h2>
        <p className="text-gray-800 mt-4 max-w-lg mx-auto">
          Want to be part of something big? Let’s make history together.
        </p>

       
        <div className="flex justify-center mt-6 px-6 py-3 w-[15rem] mx-auto bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition">
          <a href='/contact' >
            Contact Us
          </a>
          </div>
      </div>
    </div>
  );
};

export default About;