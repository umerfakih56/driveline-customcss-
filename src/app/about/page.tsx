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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 fade-in">About Us</h2>
            <p className="text-sm md:text-lg max-w-3xl mx-auto md:mx-0">
              Welcome to <strong>Drive Line</strong>, your premier destination for everything automotive. Discover the latest car models, in-depth reviews, and expert insights to help you make informed decisions. Whether you're searching for your dream ride, exploring the newest trends, or seeking tips for maintenance, we have got you covered. With a sleek design and user-friendly experience, Drive Line brings the thrill of the road to your fingertips. Start your journey with us today and experience the passion for driving like never before!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
