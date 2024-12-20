
import React, { useState, useEffect, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaMicrophone, FaShoppingBag } from "react-icons/fa";
import { navItems, productData } from "../../static/data";
import { MyContext } from "../../App";
import { fetchDataFromAPI } from "../../utils/api";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@mui/material";
const Header = () => {
  const context = useContext(MyContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [categoryData, setCategoryData]= useState([])
  useEffect(() => {
    fetchDataFromAPI("/api/category/all").then((res) => {
      console.log("data header :", res)
      setCategoryData(res);
    })

  },[])

  // Handle scroll event to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up scroll listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <div className="w-11/12 flex items-center justify-end">
          {/* Search Bar */}
          <div className="relative w-[40%]">
            <input
              type="text"
              placeholder="Tìm sản phẩm hoặc thương hiệu ..."
              className="h-[40px] w-full pl-10 pr-10 border-[2px] rounded-md border-[#3957db]"
            />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <AiOutlineSearch size={20} />
            </button>
            <FaMicrophone
              size={30}
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
            />
          </div>

          {/* Cart Icon */}
          <div className="relative p-3">
            <Link to="/cart">
              <FaShoppingBag size={25} className="ml-3" />
            </Link>
            <span className="absolute bg-red-700 rounded-full h-5 w-5 flex items-center justify-center text-white font-medium right-2 top-[30px]">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Header with background change */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-white shadow-md" : "bg-[#3321c8]"
        } w-full`}
      >
        <div className="flex py-4 justify-center items-center mx-auto w-full">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          {categoryData?.length!==0 &&
            categoryData?.map((item, index) => (
              <div className="relative flex px-6 group" key={index}>
                <Link
                  to={`/category/${item.id}`}
                  className="text-[#fff] font-[500] px-6 cursor-pointer text-lg"
                >
                  {item.name}
                </Link>
              </div>
            ))}

          {/* Sign-in Button */}
          {
            context.isLogin !== true ? (<Link to="/sign-in">
              <button className="w-[150px] bg-[#FFBB38] h-[50px] flex items-center justify-center rounded-xl cursor-pointer font-medium text-black text-lg">
                Đăng Nhập
              </button>
            </Link>) : (<Button className="circleButton mr-3">
                    <FaRegUser />
                  </Button>)
          }
          
        </div>
      </div>
    </>
  );
};

export default Header;
