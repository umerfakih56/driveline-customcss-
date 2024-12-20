import React from 'react';


const HomeContent = () => {
  return (
    <div>
      <section 
        className='hero' 
        style={{ backgroundImage: "url('/car-background.jpg')" }} // Path update for Next.js
      >
        <div className="hero-text">
          <h1 className="fade-in">Welcome to Drive Line</h1>
          <p>Your First Choice for Your Comfortable Ride</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </section>
    </div>
  );
}

export default HomeContent;

