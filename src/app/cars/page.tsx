import React from 'react';

const Cars = () => {
  // Data for Popular New Cars
  const popularCars = [
    { id: 1, name: 'Corolla', price: 5900000 , description: 'Luxury Car', image: '/corolla(1).jpg' },
    { id: 2, name: 'Alto', price: 3000000, description: 'Luxury Car', image: '/alto(2).jpg' },
    { id: 3, name: 'City', price: 5800000, description: 'Luxury Car', image: '/city(3).jpg' },
    { id: 4, name: 'Civic', price: 8900000, description: 'Luxury Car', image: '/civic(4).jpg' },
    { id: 5, name: 'Cultus', price: 3900000, description: 'Luxury Car', image: '/cultus(5).jpeg' },
    { id: 6, name: 'WagonR', price: 3500000, description: 'Luxury Car', image: '/wagonr(6).jpg' },
    { id: 7, name: 'Yaris', price: 4800000, description: 'Luxury Car', image: '/yaris(7).jpg' },
    { id: 8, name: 'Swift', price: 4500000, description: 'Luxury Car', image: '/swift(8).jpeg' },
  ];

  // Data for Newly Launched Cars
  const newlyLaunchedCars = [
    { id: 1, name: 'Kia EV 5', price: 20000000, description: 'Luxury Car', image: '/kia-ev5(91).jpg' },
    { id: 2, name: 'HYundai Elantra', price: 9700000, description: 'Luxury Car', image: 'elantra(10).jpg' },
    { id: 3, name: 'BYD seal', price: 10400000, description: 'Luxury Car', image: '/bydseal(11).png' },
    { id: 4, name: 'BYD atto', price: 9000000, description: 'Luxury Car', image: '/bydatto(12).jpeg' },
    { id: 5, name: 'Suzuki Every', price: 2800000, description: 'Luxury Car', image: '/every(13).jpeg' },
    { id: 6, name: 'ORA 07', price: 17500000, description: 'Luxury Car', image: '/ora07(14).png' },
    { id: 7, name: 'Deepal S07', price: 10500000, description: 'Luxury Car', image: '/deepal(152).png' },
    { id: 8, name: 'Deepal L07', price: 10400000, description: 'Luxury Car', image: '/deepal07(16).jpeg' },
  ];

  return (
    <div>
      {/* Popular New Cars Section */}
      <h1>Popular New Cars</h1>
      <div className="cars">
        {popularCars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <div>Rs {car.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Newly Launched Cars Section */}
      <h1>Newly Launched Cars</h1>
      <div className="cars">
        {newlyLaunchedCars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <div>Rs {car.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
