import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaStar } from 'react-icons/fa';
import Header from "../../components/Layout/Header";
import bannerImage from "../../images/donghonambanner.jpg";





const MensWatches = () => {
  // Sample product data - replace with your actual data
  const products = [
    {

      id: 1,
      name: "Rolex - Nam M228238-0005",
      brand: "Rolex",
      price: 699.99,
      rating: 4.8,
      reviews: 106,
      image: "https://www.watchstore.vn/images/products/others/2024/large/m228238-0005-1712663256.jpg",
      discount: 10
    },
    {
      id: 2,
      name: "Rolex Datejust 41 Mặt Số Chocolate 126331-0002",
      brand: "Rolex",
      price: 450,
      rating: 4.9,
      reviews: 156,
      image: "https://empireluxury.vn/wp-content/uploads/2022/06/dong-ho-rolex-datejust-41-126331-0002-mat-so-chocolate-day-deo-jubilee-thep-vang-hong-4.jpg",
      
    },
    {
      id: 3,
      name: "Nam Rolex GMT Master II 126718GRNR-001 Yellow Gold Màu Vàng Gold",
      brand: "Rolex",
      price: 820,
      rating: 4.9,
      reviews: 110,
      image: "https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2024/02/dong-ho-nam-rolex-gmt-master-ii-126718grnr-001-yellow-gold-mau-vang-gold-jpg-1708506767-21022024161247.jpg",
      
    },
    {
      id: 4,
      name: "Omega Constellation Globemaster Co-Axial Master Chronometer Annual Calendar",
      brand: "Omega",
      price: 999.99,
      rating: 4.9,
      reviews: 16,
      image: "https://24kara.com/files/sanpham/26125/1/jpg/dong-ho-omega-constellation-globemaster-co-axial-master-chronometer-annual-calendar-130-53-41-22-99-002-13053412299002.jpg",
      discount: 10
    },
    {
      id: 5,
      name: "Omega Constellation 130.93.41.22.99.002 Globemaster 41",
      brand: "Omega",
      price: 850,
      rating: 4.9,
      reviews: 30,
      image: "https://cdn.luxshopping.vn/Thumnails/Uploads/News/omega-130-93-41-22-99-002-constellation-globemaster-watch-41mm.png_980_980.webp",
      discount: 10
    },
    {
      id: 6,
      name: "Omega Constellation Globemaster Co-Axial Master Chronometer",
      brand: "Omega",
      price: 850,
      rating: 4.9,
      reviews: 20,
      image: "https://24kara.com/files/sanpham/26122/1/jpg/dong-ho-omega-constellation-globemaster-co-axial-master-chronometer-130-93-39-21-99-001-13093392199001.jpg",
      discount: 10
    },
    {
      id: 7,
      name: "Tag Heuer Formula 1 Watch Chronograph",
      brand: "Tag Heuer",
      price: 350,
      rating: 4.7,
      reviews: 100,
      image: "https://m.media-amazon.com/images/I/71mfdLFXQXL._AC_SL1500_.jpg",
      discount: 0.0
    },
    {
      id: 8,
      name: "TAG Heuer Monaco Calibre 11 Automatic",
      brand: "Tag Heuer",
      price: 899.99,
      rating: 4.9,
      reviews: 122,
      image: "https://product.hstatic.net/1000332793/product/caw211p_master.png",
      discount: 10
    },
    {
      id: 9,
      name: "TAG HEUER Aquaracer Professional 300",
      brand: "Tag Heuer",
      price: 350,
      rating: 4.9,
      reviews: 200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6mmJpnP3YGg5gc5DXkU2kRLv6Dv3stbH1w&s",
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
      <img src={bannerImage} className="img-fluid h-48 w-full object-cover" alt="Men's Watches" />


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
    </>
  );
  
};

export default MensWatches;