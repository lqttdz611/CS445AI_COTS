import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import ProductZoom from "../../components/ProductZoom";
import Button from "@mui/material/Button";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import QuantityBox from "../../components/QuantityBox";
import { IoMdCart } from "react-icons/io";
import Stack from "@mui/material/Stack";
import RelatedProduct from "./RelatedProduct";

const ProductDetails = () => {
  const getTime = new Date().toLocaleDateString();
  const [activeSize, setActiveSize] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  };

  const [activeTabs, setActiveTabs] = useState(0);

  // const isActiveTab = (index) => {
  //   setActiveTabs(index);
  // }
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom />
            </div>
            <div className="col-md-7">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>

              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-lighter mr-2">Brands: </span>
                    <span>Welch's</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      className="mr-2"
                      name="read-only size-small"
                      value={4}
                      size="small"
                      precision={0.5}
                      readOnly
                    />
                    <span className="text-lighter cursor">1 REVIEW</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">SKU: </span>
                    <span>ZU49VOR</span>
                  </div>
                </li>
              </ul>

              <div class="d-flex info mb-3">
                <span class="oldPrice ">$20.00</span>
                <span class="netPrice text-danger ml-2">$14.00</span>
              </div>

              <span class="badge bg-success">IN STOCK</span>

              <p className="mt-3 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Tom
                lai la 2 chai coca nhu moi khi trong tuan!
              </p>

              <div className="productSize d-flex align-items-center">
                <span> Size: </span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""} `}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      200g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      300g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      500g
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round ml-2 btnActions">
                  {" "}
                  <IoMdCart />
                  &nbsp;Add to Cart
                </Button>
                <Tooltip title="Add to Wishlist" placement="top-start">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                    <FaRegHeart />
                  </Button>
                </Tooltip>

                <Tooltip title="Add to Compare" placement="top-start">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                    <HiOutlineArrowsUpDown />
                  </Button>
                </Tooltip>
              </div>

              {/* <div className="d-flex align-items-center mt-5 actions">
              <Button variant="outlined" className="btn-round btn-sml text-lighter"><FaRegHeart /> &nbsp; ADD TO WISHLIST</Button>
              <Button variant="text" className="btn-round btn-sml ml-4 text-lighter nonOutline"><HiOutlineArrowsUpDown /> &nbsp; COMPARE</Button>

            </div> */}
            </div>
          </div>

          <br />

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional Info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews (5)
                  </Button>
                </li>
              </ul>
              <br />
              <div className="tabContent">
                <div
                  className={
                    activeTabs === 0 ? "content active-content" : "content"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Tom lai la 2 chai coca nhu moi khi trong tuan!
                </div>

                <div
                  className={
                    activeTabs === 1 ? "content active-content" : "content"
                  }
                >
                  <div className="tab-responsive">
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr class="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5″L x 18.5″W x 16.5″H</p>
                          </td>
                        </tr>
                        <tr class="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5″L x 24″W x 18.5″H</p>
                          </td>
                        </tr>
                        <tr class="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr class="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr class="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr class="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr class="width">
                          <th>Width</th>
                          <td>
                            <p>24″</p>
                          </td>
                        </tr>
                        <tr class="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45″</p>
                          </td>
                        </tr>
                        <tr class="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12″ air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr class="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5″</p>
                          </td>
                        </tr>
                        <tr class="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25″</p>
                          </td>
                        </tr>
                        <tr class="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr class="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className={
                    activeTabs === 2 ? "content active-content" : "content"
                  }
                >
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br />

                      <div className="reviewBox mb-4 border-bottom">
                        <div className="info">
                          <div className="d-flex align-items-center w-100">
                            <h5>
                              <b>Thresh</b>
                            </h5>
                            <div className="ml-auto">
                              <Rating
                                name="read-only"
                                value={5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                          <h6 className="text-light">{getTime}</h6>
                          <p>Test about comment</p>
                        </div>
                      </div>

                      <div className="reviewBox mb-4 border-bottom">
                        <div className="info">
                          <div className="d-flex align-items-center w-100">
                            <h5>
                              <b>Leesin</b>
                            </h5>
                            <div className="ml-auto">
                              <Rating
                                name="read-only"
                                value={5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                          <h6 className="text-light">{getTime}</h6>
                          <p>Your will, my hands</p>
                        </div>
                      </div>

                      <div className="reviewBox mb-4 border-bottom">
                        <div className="info">
                          <div className="d-flex align-items-center w-100">
                            <h5>
                              <b>Yasuo</b>
                            </h5>
                            <div className="ml-auto">
                              <Rating
                                name="read-only"
                                value={5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                          <h6 className="text-light">{getTime}</h6>
                          <p>Death is like the wind, always by my side</p>
                        </div>
                      </div>

                      <div className="reviewBox mb-4 border-bottom">
                        <div className="info">
                          <div className="d-flex align-items-center w-100">
                            <h5>
                              <b>Rammus</b>
                            </h5>
                            <div className="ml-auto">
                              <Rating
                                name="read-only"
                                value={5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                          <h6 className="text-light">{getTime}</h6>
                          <p>OK!</p>
                        </div>
                      </div>
                      <br />

                      <form className="reviewForm">
                        <h4>Add a review</h4>
                        <div className="form-group">
                          <textarea
                            className="form-control shadow"
                            placeholder="Write a Review"
                            name="revew"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <Stack spacing={1}>
                                <Rating
                                  name="half-rating"
                                  defaultValue={1}
                                  precision={1}
                                />
                              </Stack>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group btn btn-blue btn-lg btn-big btn-round">
                          <Button>Submit Review</Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <br />
          <RelatedProduct />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
