import React from 'react';
import './sports.css'

const SportsWatch = () => {
  const watches = [
    {
      id: 1,
      name: 'GOAAAL vinyl record clock',
      image: '/images/goaaal-watch.png',
      originalPrice: '39.00 €',
      salePrice: '32.00 €',
      category: 'Sport'
    },
    {
      id: 2,
      name: 'BICYCLE RACE vinyl record clock',
      image: '/images/bicycle-race-watch.png',
      originalPrice: '39.00 €',
      salePrice: '32.00 €',
      category: 'Sport'
    },
    {
      id: 3,
      name: 'MTB vinyl record clock',
      image: '/images/mtb-watch.png',
      originalPrice: '39.00 €',
      salePrice: '32.00 €',
      category: 'Sport'
    },
    {
      id: 4,
      name: 'MOTOGP vinyl record clock',
      image: '/images/motogp-watch.png',
      originalPrice: '39.00 €',
      salePrice: '32.00 €',
      category: 'Sport'
    },
    {
      id: 5,
      name: 'TENNIS vinyl record clock',
      image: '/images/tennis-watch.png',
      originalPrice: '39.00 €',
      salePrice: '32.00 €',
      category: 'Sport'
    },
    {
      id: 6,
      name: 'BASKETBALL vinyl record clock',
      image: '/images/basketball-watch.png',
      originalPrice: '39.00 €',
      salePrice: '32.00 €',
      category: 'Sport'
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="category-header">
        <div className="breadcrumb">
          <a href="/">Home</a> / <span>Sport</span>
        </div>
        <h1>Sport</h1>
      </div>

      <div className="container">
        <div className="filter-section">
          <div className="showing-results">
            Showing all {watches.length} results
          </div>
          <div className="sort-options">
            <select className="sort-select">
              <option value="default">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="latest">Sort by latest</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
            </select>
          </div>
        </div>

        <div className="watchGrid">
          {watches.map((watch) => (
            <div key={watch.id} className="watchCard">
              <div className="imageWrapper">
                <img src="https://www.discoclock.com/wp-content/uploads/2020/11/DOC155-GOAAAL.jpg" alt={watch.name} className="watchImage" />
                <div className="overlay">
                  <button className="quickView">Quick View</button>
                </div>
                <span className="sale-badge">Sale!</span>
              </div>
              <div className="category-tag">{watch.category}</div>
              <h3 className="watchName">{watch.name}</h3>
              <div className="priceContainer">
                <span className="originalPrice">{watch.originalPrice}</span>
                <span className="salePrice">{watch.salePrice}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="shipping-info">
          <div className="info-box">
            <h3>5 DAYS DELIVERY in EU WITH GLS</h3>
            <p>FREE SHIPPING FROM 59€</p>
          </div>
          <div className="payment-methods">
            <h3>PAY SAFELY WITH</h3>
            <div className="payment-icons">
              <img src="/images/visa.png" alt="Visa" />
              <img src="/images/mastercard.png" alt="Mastercard" />
              <img src="/images/paypal.png" alt="PayPal" />
              <img src="/images/bank-transfer.png" alt="Bank Transfer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsWatch;