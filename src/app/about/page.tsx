import React from 'react';

const About = () => {
  return (
    <div>
      <section
        className="about bg-cover bg-center py-20 md:py-32"
        style={{ backgroundImage: "url(about-background.jpg)" }}
      >
        <div className="container mx-auto px-4">
          <div className="about-content text-white text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 opacity-0 animate-fadeIn">
              About Us
            </h2>
            <p className="text-sm md:text-lg max-w-3xl mx-auto md:mx-0 transition-opacity duration-700 opacity-0 animate-fadeIn">
              Welcome to <strong className="font-semibold text-yellow-500">Drive Line</strong>, your premier destination for everything automotive. Discover the latest car models, in depth reviews, and expert insights to help you make informed decisions. Whether you are searching for your dream ride, exploring the newest trends, or seeking tips for maintenance, we have got you covered. With a sleek design and user-friendly experience, Drive Line brings the thrill of the road to your fingertips. Start your journey with us today and experience the passion for driving like never before!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
