import Tooltip from "@mui/material/Tooltip";
import React, { useContext, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import ProductZoom from "../../components/ProductZoom";
import Button from "@mui/material/Button";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import QuantityBox from "../../components/QuantityBox";
import { IoMdCart } from "react-icons/io";
import Stack from "@mui/material/Stack";
import RelatedProduct from "./RelatedProduct";
import { MyContext } from "../../App";
import { fetchDataFromAPI, postData } from "../../utils/api";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const context = useContext(MyContext);

  const getTime = new Date().toLocaleDateString();
  const [activeSize, setActiveSize] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  };

  const [activeTabs, setActiveTabs] = useState(0);

  // const isActiveTab = (index) => {
  //   setActiveTabs(index);
  // }
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [relatedProductData, setRelatedProductData] = useState([]);
  const [recentlyViewData, setRecentlyViewData] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveSize(null);
    fetchDataFromAPI(`/api/products/${id}`).then((res) => {
      setProductData(res);
      console.log("data...", res);

      fetchDataFromAPI(`/api/products?cateId=${res?.cateId}`).then((resp) => {
        const filteredData = resp?.productList?.filter(
          (item) => item._id !== id
        );
        setRelatedProductData(filteredData);
      });

      // if (!recentlyViewData.some((product) => product._id === id)) {
      // Gọi API thêm sản phẩm

      postData("/api/products/relatedProducts", res).then(() => {
        // fetchDataFromAPI(`/api/products/recentlyView`).then((response) => {
        //   setRecentlyViewData(response?.productList);
        //   console.log("recently viewwww",response);
        // });
      });

      // }
    });
  }, [id]);

  let [cartFields, setCartFields] = useState({});
  const [productQuantity, setProductQuantity] = useState();
  const quantity = (number) => {
    setProductQuantity(number);

  };
  const addToCart = () => {
    
      const user = JSON.parse(localStorage.getItem("user"));
      cartFields.productTitle = productData?.name;
      cartFields.image = productData?.images[0];
      cartFields.rating = productData?.rating;
      cartFields.price = productData?.price;
      cartFields.quantity = productQuantity;
      cartFields.subTotal = parseInt(productQuantity * productData?.price);
      cartFields.productId = productData?.id;
      cartFields.userId = user?.userId;
      context.addToCart(cartFields);
      console.log("data card field: ", cartFields);
    
  };
  const selectedItem = () => {};

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom
                images={productData?.images}
                discount={productData?.discount}
              />
            </div>
            <div className="col-md-7">
              <h2 className="hd text-capitalize">{productData?.name}</h2>

              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-lighter mr-2">Brands: </span>
                    <span>{productData?.brand}</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      className="mr-2"
                      name="read-only size-small"
                      value={`${productData?.rating}`}
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
                <span class="oldPrice ">${productData?.oldPrice}</span>
                <span class="netPrice text-danger ml-2">
                  ${productData?.price}
                </span>
              </div>

              <span class="badge bg-success">{`${
                productData?.countInStock >= 1
                  ? "In stock (" + productData?.countInStock + ")"
                  : "Sold out"
              } `}</span>

              <p className="mt-3 mb-4">{productData?.description}</p>

              <div className="d-flex align-items-center mt-3">
                <QuantityBox quantity={quantity} selectedItem={selectedItem}  />
                <Button className="btn-blue btn-lg btn-big btn-round ml-2 btnActions" onClick={()=> addToCart()}>
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
          {relatedProductData?.length !== 0 && (
            <RelatedProduct
              title="RELATED PRODUCTS"
              relatedProduct={relatedProductData}
            />
          )}
          <RelatedProduct
            title="RECENTLY VIEWS PRODUCTS"
            // itemView={"recentlyView"}
            // relatedProduct={recentlyViewData}
          />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;