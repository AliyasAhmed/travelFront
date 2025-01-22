import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="relative flex justify-center min-h-screen bg-cover bg-center text-white backdrop-blur-sm"
      style={{
        backgroundImage: "url(https://your-image-url.com)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20">
        <h1 className="flex justify-center text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="flex w-[50vw] justify-center text-justify text-lg md:text-xl leading-relaxed">
          Welcome to Web Involve, your leading digital solution company,
          headquartered in the gorgeous region of Kashmir, India. Our objective
          is to revolutionize the online presence of enterprises, companies, and
          others, including those in Kashmir, India and throughout the world. By
          providing cutting-edge technological solutions and unrivaled services
          that foster confidence, deliver quality, and generate high revenues
          and profits for our valued customers. At Web Involve, we recognize the
          importance of the digital landscape in today's corporate world, and we
          are dedicated to helping you to prosper in this dynamic environment.
          With years of experience in the digital marketing business and a
          devoted team of professionals, we are well-prepared to manage a wide
          range of services. At Web Involve, we are more than simply a
          professional team; we are a group of IT enthusiasts who are passionate
          about driving innovation and staying ahead of the competition. Our
          knowledge of social media platforms and cyber security helps us to
          navigate the digital arena with confidence and finesse. As a company,
          we are dedicated to our clients' success, and we think that their
          growth directly translates into our own growth. We judge our success
          based on the success stories of the businesses we support. We
          understand how important it is for you to build your business, which
          is why we provide personalized business growth consulting. Our team
          collaborates with yours to assess, strategize, and implement ideas
          that will take your company to new heights. Jasim Muzamil Javid, an
          expert tech specialist and imaginative tech geek, developed Web
          Involve. Driven by an unshakable passion for technology and a profound
          understanding of computer science, cyber security, business, and the
          digital landscape, Jasim set out to empower enterprises in India,
          especially in the captivating region of Kashmir, and bridge the
          digital divide. Possessing a vast amount of expertise in the field of
          ethical hacking and digital technology, Jasim identified a need in the
          market for comprehensive and superior digital solutions for
          enterprises, firms, or organizations of all kinds, particularly those
          in Kashmir. This insight stoked his desire to start his own business,
          and he eventually founded Web Involve. We at WebInvolve believe that
          building long-term relationships with our clients is the key to
          success. Our client-centered approach and great customer service
          ensure that you are always heard and that your objectives are
          prioritized. So, join forces with WebInvolve and together, we can
          dominate the digital universe as a whole. Let's go on this digital
          journey and see your business grow like never before! Remember that
          WebInvolve is more than simply a corporation; it is dedicated to your
          success. Together, let's make your aspirations a reality
        </p>
      </div>
    </div>
  );
};

export default About;
