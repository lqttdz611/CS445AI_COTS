import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaStar } from 'react-icons/fa';

const MensWatches = () => {
  // Sample product data - replace with your actual data
  const products = [
    {
      id: 1,
      name: "Rolex Submariner",
      price: 999.99,
      rating: 4.8,
      reviews: 156,
      image: "https://example.com/rolex-submariner.jpg",
      discount: 15
    },
    // Add more products...
  ];

  return (
    <div className="container-fluid py-4">
      {/* Hero Section */}
      <div className="bg-primary text-white py-4 mb-4">
        <div className="container">
          <h1 className="display-4">Men's Watches</h1>
          <p className="lead">Discover our collection of premium timepieces for men</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Filters Sidebar */}
          <div className="col-lg-3 mb-4">
            <div className="card">
              <div className="card-header bg-white">
                <h5 className="mb-0 d-flex align-items-center">
                  <FaFilter className="me-2" /> Filters
                </h5>
              </div>
              <div className="card-body">
                {/* Price Range */}
                <div className="mb-4">
                  <h6 className="fw-bold">Price Range</h6>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="price1" />
                    <label className="form-check-label" htmlFor="price1">
                      Under $100
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="price2" />
                    <label className="form-check-label" htmlFor="price2">
                      $100 - $500
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="price3" />
                    <label className="form-check-label" htmlFor="price3">
                      $500 - $1000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="price4" />
                    <label className="form-check-label" htmlFor="price4">
                      Over $1000
                    </label>
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-4">
                  <h6 className="fw-bold">Brands</h6>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="brand1" />
                    <label className="form-check-label" htmlFor="brand1">
                      Rolex
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="brand2" />
                    <label className="form-check-label" htmlFor="brand2">
                      Omega
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="brand3" />
                    <label className="form-check-label" htmlFor="brand3">
                      Tag Heuer
                    </label>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h6 className="fw-bold">Features</h6>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="feature1" />
                    <label className="form-check-label" htmlFor="feature1">
                      Water Resistant
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="feature2" />
                    <label className="form-check-label" htmlFor="feature2">
                      Chronograph
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="feature3" />
                    <label className="form-check-label" htmlFor="feature3">
                      Automatic
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-lg-9">
            {/* Sort Options */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <span className="me-2">Sort by:</span>
                <select className="form-select form-select-sm d-inline-block w-auto">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
              <div className="text-muted">
                Showing 1-12 of 36 products
              </div>
            </div>

            {/* Products */}
            <div className="row g-4">
              {products.map((product) => (
                <div key={product.id} className="col-md-4">
                  <div className="card h-100 product-card">
                    {product.discount && (
                      <div className="badge bg-danger position-absolute top-0 end-0 m-2">
                        -{product.discount}%
                      </div>
                    )}
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        className="card-img-top p-3"
                        alt={product.name}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="price-block">
                          <span className="fs-5 fw-bold text-primary">${product.price}</span>
                          {product.discount && (
                            <span className="text-muted text-decoration-line-through ms-2">
                              ${(product.price * (1 + product.discount/100)).toFixed(2)}
                            </span>
                          )}
                        </div>
                        <div className="rating-block">
                          <FaStar className="text-warning" />
                          <span className="ms-1">{product.rating}</span>
                          <span className="text-muted ms-1">({product.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensWatches;