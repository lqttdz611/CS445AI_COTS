import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaStar } from 'react-icons/fa';
import Header from "../../components/Layout/Header";
import bannerImage from "../../images/smartwatch-banner.jpg";





const SmartWatches = () => {
  // Sample product data - replace with your actual data
  const products = [
    {
      id: 1,
      name: "Apple Watch SE 2022 GPS + Cellular, 40mm - Silver",
      brand: "Apple", 
      price: 799.90,
      rating: 4.8,
      reviews: 156,
      image: "https://mobiviet.vn/upload/sanpham/large/dong-ho-thong-minh-apple-watch-se-2022-lte-44mm-1669348708-139aa4.jpg",
      discount: 15
    },
    {
      id: 2,
      name: "Apple Watch Series 8 41mm (GPS) Viền nhôm dây cao su - Chính hãng (VN/A)",
      brand: "Apple", 
      price: 599.90,
      rating: 5,
      reviews: 15,
      image: "https://cdn.xtmobile.vn/vnt_upload/product/10_2022/thumbs/600_apple_watch_series_8_41mm_gps_vien_nhom_day_cao_su_xtmobile.png",
      discount: 40
    },
    {
      id: 3,
      name: " Apple Watch Series 6 40mm (GPS) Viền Nhôm Bạc- Dây Cao Su Trắng",
      brand: "Apple", 
      price: 499.80,
      rating: 4.8,
      reviews: 390,
      image: "https://phucanhcdn.com/media/product/40880_watch_series_6_40mm_white_ha1.jpg",
      discount: 10
    },
    {
      id: 4,
      name: " SamSung Galaxy Watch4 Classic New Chính Hãng 46 mm - GPS - Trắng",
      brand: "SamSung", 
      price: 370.80,
      rating: 4.8,
      reviews: 500,
      image: "https://smartviets.com/upload/Galaxy%20Watch/Watch4%20Classic%2046mm%20trang.jpeg",
      discount: 10
    },
    {
      id: 5,
      name: " Galaxy Watch4 Classic",
      brand: "SamSung", 
      price: 599.80,
      rating: 4.9,
      reviews: 200,
      image: "https://images.samsung.com/vn/galaxy-watch4-classic/feature/galaxy-watch4-classic-silver-better-sleep.png",
      discount: 10
    },
    {
      id: 6,
      name: "  Samsung Galaxy Watch 4 Classic BT 46mm - (R890) - Chính hãng",
      brand: "SamSung", 
      price: 499.80,
      rating: 4.8,
      reviews: 390,
      image: "https://images.samsung.com/is/image/samsung/p6pim/vn/2108/gallery/vn-galaxy-watch4-classic-399161-sm-r890nzkaxxv-481166271?$650_519_PNG$",
      discount: 10
    },
    // Add more products...
  ];

  return (
    <>
      <Header />
    <div className="container-fluid py-4">
      {/* Hero Section */}
      {/* <div className="bg-primary text-white py-4 mb-4">
        <div className="container">
          <h1 className="display-4">Men's Watches</h1>
          <p className="lead">Discover our collection of premium timepieces for men</p>
        </div>
       
    </div> */}
      <img src={bannerImage} className="img-fluid h-48 w-full object-cover" alt="Smart_Watch" />


      <div className="container p-3">
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
                      Apple
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="brand2" />
                    <label className="form-check-label" htmlFor="brand2">
                      SamSung
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
    </>
  );
  
};

export default SmartWatches;