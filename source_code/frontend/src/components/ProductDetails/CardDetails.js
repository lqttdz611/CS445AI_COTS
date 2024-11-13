import React from "react";

import { GoClockFill } from "react-icons/go";import { RiShoppingCartFill } from "react-icons/ri";
import Rating from "@mui/material/Rating";
import { MdAttachMoney } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "@mui/material";
import { FaShareAlt } from "react-icons/fa";
import Header from "../Layout/Header";
import { PiSealCheckBold } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";
import RelatedProduct from "../../pages/ProductDetails/RelatedProduct";
const CardDetails = () => {
  return (
    <>
      <Header />
      <section className="app-ecommerce-details mt-4">
        <div className="container">
          <div className="row ">
            <div className="col-md-4">
              <div>
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/w/a/watch_se_44.png"
                  alt="product-image"
                ></img>
              </div>
            </div>

            <div className="col-md-7 ml-4 app-ecommerce-details">
              <h4>Apple Watch Series 5</h4>
              <span class="card-text item-company">
                By{" "}
                <a href="#" class="company-name">
                  Apple
                </a>
              </span>
              <div className="ecommerce-details-price d-flex flex-wrap mt-1">
                <h4 class="item-price me-1">$499.99</h4>
                <Rating name="read-only" value={4} readOnly />
              </div>

              <p class="card-text">
                Available - <span class="text-success">In stock</span>
              </p>
              <p class="card-text">
                GPS, Always-On Retina display, 30% larger screen, Swimproof, ECG
                app, Electrical and optical heart sensors, Built-in compass,
                Elevation, Emergency SOS, Fall Detection, S5 SiP with up to 2x
                faster 64-bit dual-core processor, watchOS 6 with Activity
                trends, cycle tracking, hearing health innovations, and the App
                Store on your wrist
              </p>

              <ul className="product-features list-unstyled">
                <li>
                  <RiShoppingCartFill className="feather feather-dollar-sign" />{" "}
                  <span> Free Shipping</span>
                </li>

                <li>
                  <MdAttachMoney className="feather feather-dollar-sign" />{" "}
                  <span>EMI options available</span>
                </li>
              </ul>
              <hr />
              <div class="product-color-options">
                <h6>Colors</h6>
                <ul class="list-unstyled mb-0">
                  <li class="d-inline-block selected mr-2">
                    <div class="color-option b-primary">
                      <div class="filloption bg-primary"></div>
                    </div>
                  </li>
                  <li class="d-inline-block mr-2">
                    <div class="color-option b-success">
                      <div class="filloption bg-success"></div>
                    </div>
                  </li>
                  <li class="d-inline-block mr-2">
                    <div class="color-option b-danger">
                      <div class="filloption bg-danger"></div>
                    </div>
                  </li>
                  <li class="d-inline-block mr-2">
                    <div class="color-option b-warning">
                      <div class="filloption bg-warning"></div>
                    </div>
                  </li>
                  <li class="d-inline-block mr-2">
                    <div class="color-option b-info">
                      <div class="filloption bg-info"></div>
                    </div>
                  </li>
                </ul>
              </div>

              <hr />

              <div className="d-flex flex-column flex-sm-row pt-1">
                <Button className="btn btn-primary btn-cart me-0 me-sm-1 mb-1 mb-sm-0 waves-effect waves-float waves-light">
                  <RiShoppingCartFill /> &nbsp; Add to card
                </Button>

                <Button
                  variant="outlined"
                  className="btn btn-outline-secondary btn-wishlist me-0 me-sm-1 mb-1 mb-sm-0 waves-effect ml-4"
                >
                  <FaRegHeart /> &nbsp; Whishlist
                </Button>

                <div className="ml-4 btn-group dropdown-icon-wrapper btn-share">
                  <Button className="btn btn-icon hide-arrow btn-outline-secondary dropdown-toggle waves-effect">
                    <FaShareAlt />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="item-features">
            <div className="row text-center">
              {/* <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="w-75 mx-auto">
                <PiSealCheckBold className="feather feather-award"/>
                <h4 class="mt-2 mb-1">100% Original</h4>
                <p class="card-text">Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah.</p>
                </div>
              </div> */}
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="w-75 mx-auto text-center d-flex flex-column align-items-center">
                  <PiSealCheckBold className="feather feather-award" />
                  <h4 className="mt-2 mb-1">100% Original</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Tom lai la 2 chai coca nhu moi khi trong tuan!
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="w-75 mx-auto text-center d-flex flex-column align-items-center">
                  <GoClockFill className="feather feather-award" />
                  <h4 className="mt-2 mb-1">10 Day Replacement</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Tom lai la 2 chai coca nhu moi khi trong tuan!
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="w-75 mx-auto text-center d-flex flex-column align-items-center">
                  <FaShieldAlt className="feather feather-award" />
                  <h4 className="mt-2 mb-1">100% Original</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Tom lai la 2 chai coca nhu moi khi trong tuan!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <RelatedProduct />
        </div>
      </section>
    </>
  );
};

export default CardDetails;
