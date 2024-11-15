import { Breadcrumbs, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import Chip from "@mui/material/Chip";
import { emphasize, styled } from "@mui/material/styles";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import MenuItem from "@mui/material/MenuItem";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Pagination from "@mui/material/Pagination";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { MyContext } from "../../App";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const Products = () => {
  const context = useContext(MyContext);

 


  const [age, setAge] = React.useState("");
  const [category, setCategory] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const handleCateChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow bordoer-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product List</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<FaHome fontSize="small" />}
            />
            <StyledBreadcrumb label="Products" deleteIcon={<MdExpandMore />} />
          </Breadcrumbs>
        </div>

        <div className="row dashboardBoxWrapperRow dashboardBoxWrapperRowV2">
          <div className="col-md-12">
            <div className="dashboardBoxWrapper d-flex">
              <Button
                className="dashboardBox"
                style={{
                  backgroundImage: `linear-gradient(to right, #1da256,#48d483)`,
                }}
              >
                <span className="chart">
                  <TrendingUpIcon />
                </span>
                <div className="d-flex w-100">
                  <div className="col1">
                    <h4 className="text-white mb-1">Total Users</h4>
                    <span className="text-white">277</span>
                  </div>
                  <div className="ml-auto">
                    <span span className="icon">
                      <RxAvatar />
                    </span>
                  </div>
                </div>
              </Button>

              <Button
                className="dashboardBox"
                style={{
                  backgroundImage: `linear-gradient(to right, #c012e2,#eb64fe)`,
                }}
              >
                <span className="chart">
                  <TrendingDownIcon />
                </span>
                <div className="d-flex w-100">
                  <div className="col1">
                    <h4 className="text-white mb-1">Total Users</h4>
                    <span className="text-white">277</span>
                  </div>
                  <div className="ml-auto">
                    <span span className="icon">
                      <HiOutlineShoppingCart />
                    </span>
                  </div>
                </div>
              </Button>

              <Button
                className="dashboardBox"
                style={{
                  backgroundImage: `linear-gradient(to right, #2c75e5,#60aff5)`,
                }}
              >
                <span className="chart">
                  <TrendingUpIcon />
                </span>
                <div className="d-flex w-100">
                  <div className="col1">
                    <h4 className="text-white mb-1">Total Users</h4>
                    <span className="text-white">277</span>
                  </div>
                  <div className="ml-auto">
                    <span span className="icon">
                      <IoBagHandleOutline />
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>
          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl
                size="small"
                className="w-100"
                sx={{ m: 1, minWidth: 120 }}
              >
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>CATEGORY BY</h4>
              <FormControl
                size="small"
                className="w-100"
                sx={{ m: 1, minWidth: 120 }}
              >
                <Select
                  value={category}
                  onChange={handleCateChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="table-responsive mt-3">
            <table className="table table-bordered table-striped v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Link to="/product/details">
                        <Button className="view ">
                          <FaEye />
                        </Button>
                      </Link>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#2</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="view ">
                        <FaEye />
                      </Button>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#3</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="view ">
                        <FaEye />
                      </Button>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#4</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="view ">
                        <FaEye />
                      </Button>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#5</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="view ">
                        <FaEye />
                      </Button>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#6</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="view ">
                        <FaEye />
                      </Button>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#7</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="view ">
                        <FaEye />
                      </Button>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#8</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="view ">
                        <FaEye />
                      </Button>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#9</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="view ">
                        <FaEye />
                      </Button>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#10</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="product test"
                            className="w-100"
                          ></img>
                        </div>
                      </div>

                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans </td>
                  <td>Richman</td>
                  <td style={{ width: "70px" }}>
                    <del class="old">$21.00</del>
                    <span class="new text-danger">$21.00</span>
                  </td>
                  <td>
                    <Rating name="read-only" size="small" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="view ">
                        <FaEye />
                      </Button>
                      <Button className="edit ">
                        <FaEdit />
                      </Button>
                      <Button className="delete">
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <p>
                Showing <b>10</b> of <b>60</b> results
              </p>

              <Pagination
                className="pagination "
                count={10}
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
