import { FcMultipleInputs } from "react-icons/fc";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { Button } from "@mui/material";
import { FaProductHunt } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { MyContext } from "../../App";
const SideBar = () => {
  const [isActive, setIsActive] = useState(null);
  const [showProduct, setShowProduct] = useState(true);
  const [showCategory, setShowCategory] = useState(true);

  const context = useContext(MyContext);
  const handleActive = (index) => {
    setIsActive(index);
  };
  const handleProduct = () => {
    setShowProduct(!showProduct);
  };
  const handleCategory = () => {
    setShowCategory(!showCategory);
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={"/"}>
              <Button
                className={isActive === 0 ? "w-100 active" : "w-100"}
                onClick={() => handleActive(0)}
              >
                <span className="icon">
                  <RiDashboardHorizontalFill />
                </span>
                &nbsp;Dashboard
              </Button>
            </Link>
          </li>

          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${showProduct ? "active" : ""}`}
                onClick={() => {
                  handleProduct();
                  setIsActive(1);
                }}
              >
                {/* <Button className={isActive === 1 ? "w-100 active" : "w-100"} onClick={()=>{ handleActive(1);}} > */}
                <span className="icon">
                  <FaProductHunt />
                </span>
                &nbsp;Product
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
            <div
              className={`submenuWrapper ${
                showProduct ? "colapse" : "colapsed"
              }`}
            >
              {/* <div className={isActive === 1 ? "submenuWrapper colapse" : "submenuWrapper colapsed"}> */}
              <ul class="submenu">
                <li>
                  <a href="/products">Product List</a>
                </li>
                <li>
                  <a href="/product/details">Product View</a>
                </li>
                <li>
                  <a href="/product/upload">Product Upload</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to={"/"}>
              <Button
                className={`w-100 ${showCategory ? "active" : ""}`}
                onClick={() => {
                  handleCategory();
                  setIsActive(1);
                }}
              >
                {/* <Button className={isActive === 1 ? "w-100 active" : "w-100"} onClick={()=>{ handleActive(1);}} > */}
                <span className="icon">
                  <FcMultipleInputs />
                </span>
                &nbsp;Category
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
            <div
              className={`submenuWrapper ${
                showCategory ? "colapse" : "colapsed"
              }`}
            >
              {/* <div className={isActive === 1 ? "submenuWrapper colapse" : "submenuWrapper colapsed"}> */}
              <ul class="submenu">
                <li>
                  <a href="/categories">Category List</a>
                </li>

                <li>
                  <a href="/categories/upload">Category Upload</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to={"/"}>
              <Button
                className={isActive === 2 ? "w-100 active" : "w-100"}
                onClick={() => handleActive(2)}
              >
                <span className="icon">
                  <IoSettingsSharp />
                </span>
                &nbsp;Settings
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to={"/"}>
              <Button
                className={isActive === 3 ? "w-100 active" : "w-100"}
                onClick={() => handleActive(3)}
              >
                <span className="icon">
                  <FaUserEdit />
                </span>
                &nbsp;Users
              </Button>
            </Link>
          </li>
        </ul>
        <br />

        <div className="logoutWrapper">
          <div className="logoutBox">
            <Link to="/login">
              <Button variant="contained">
                <IoLogOutOutline />
                LOGOUT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
