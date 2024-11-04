import { React, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiDashboard2Fill, RiBillFill } from "react-icons/ri";
import { IoBagAdd } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { GiStoneTablet } from "react-icons/gi";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { BiMessageRoundedDots } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { chartProduct, productDataShow } from "../../static/data";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { Line } from "react-chartjs-2";
import {
  Chart as CharJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

CharJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [active, setActive] = useState(0);

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="min-h-100vh">
      <div className="w-full bg-[#FFFFFF] h-[80px] flex items-center justify-between">
        <div className="ml-7 w-[50%]">
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="flex items-center ">
          <div className="relative p-5">
            <FaRegBell size={22} />
            <span className="h-5 w-5 rounded-full bg-[#17C964] text-white flex justify-center items-center absolute top-2 right-2.5 text-sm font-medium">
              3
            </span>
          </div>

          <div className="relative p-4">
            <BiMessageRoundedDots size={24} />
            <span className="h-5 w-5 rounded-full bg-[#FF0000] text-white flex justify-center items-center absolute top-1.5 right-2.5 text-sm font-medium">
              2
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="h-full flex">
        <div className="w-[25%] bg-[#1B1B29] py-6 ">
          <div className="flex text-white items-center justify-center mt-4">
            <div className="mr-3">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTh8o04Djg3MW53sdpvd-DfYT38ql30vQ5xZPaED_HIg&s"
                width={50}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="font-medium text-xl text-blue-600">Admin Shop</h2>
              <p className="text-sm italic">Welcome Admin</p>
            </div>
          </div>
          <div className="w-full relative justify-center flex items-center mt-5">
            <input
              type="text"
              placeholder="  Gõ để tìm kiếm..."
              className="h-[40px] w-[95%] px-2 border rounded-md bg-transparent"
            />
            <AiOutlineSearch
              size={25}
              className="absolute top-1.5 right-2 text-gray-500 mr-2"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <div
              className={`${
                active === 0 ? "text-blue-600" : "text-[#ffffff]"
              } flex items-center justify-start w-[80%] py-4 mb-2`}
              onClick={() => setActive(0)}
            >
              <RiDashboard2Fill size={25} className="mr-3" />
              <Link className="text-lg font-medium ">Trang Chủ</Link>
            </div>
            <div
              className={`${
                active === 1 ? "text-blue-600" : "text-[#ffffff]"
              } flex items-center justify-start w-[80%] py-4 mb-2`}
              onClick={() => setActive(1)}
            >
              <GiStoneTablet size={25} className="mr-3" />
              <Link
                className="text-lg font-medium "
                onClick={() => setActive(1)}
              >
                Xem Sản Phẩm
              </Link>
            </div>
            <div
              className={`${
                active === 2 ? "text-blue-600" : "text-[#ffffff]"
              } flex items-center justify-start w-[80%] py-4 mb-2`}
              onClick={() => setActive(2)}
            >
              <IoBagAdd size={25} className="mr-3" />
              <Link className="text-lg font-medium ">Quản Lý Sản Phẩm</Link>
            </div>
            <div
              className={`${
                active === 3 ? "text-blue-600" : "text-[#ffffff]"
              } flex items-center justify-start w-[80%] py-4 mb-2`}
              onClick={() => setActive(3)}
            >
              <IoGiftSharp size={25} className="mr-3" />
              <Link className="text-lg font-medium ">Tạo Khuyến Mãi</Link>
            </div>
            <div
              className={`${
                active === 4 ? "text-blue-600" : "text-[#ffffff]"
              } flex items-center justify-start w-[80%] py-4 mb-2`}
              onClick={() => setActive(4)}
            >
              <RiBillFill size={25} className="mr-3" />
              <Link className="text-lg font-medium ">Hóa Đơn</Link>
            </div>
            <div
              className={`${
                active === 5 ? "text-blue-600" : "text-[#ffffff]"
              } flex items-center justify-start w-[80%] py-4 mb-2`}
              onClick={() => setActive(5)}
            >
              <FaUserPlus size={25} className="mr-3" />
              <Link className="text-lg font-medium ">Quản Lý Tài Khoản</Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-20">
            <div className=" text-[#ffffff] flex items-center justify-start w-[80%] py-4 mb-2">
              <IoMdSettings size={25} className="mr-3" />
              <Link className="text-lg font-medium ">Cài đặt</Link>
            </div>
            <div className=" text-[#ffffff] flex items-center justify-start w-[80%] py-4 mb-2">
              <LuLogOut size={25} className="mr-3" />
              <Link className="text-lg font-medium ">Đăng Xuất</Link>
            </div>
          </div>
        </div>

        <div className="bg-[#E8EFF9] w-[75%] flex items-center">
          {active === 0 ? (
            <div className="w-11/12 mx-auto bg-white h-[90%] flex flex-col  ">
            <h1 className="text-center font-medium text-2xl mt-[50px] mb-6">THỐNG KÊ DOANH THU THU ĐƯỢC</h1>
              <div className="flex justify-between mr-2 ml-2 items-center  mb-20">
                
                <div className="flex px-3 py-5 w-[30%] bg-blue-600 rounded-md text-white items-center justify-center">
                  <RiAlignItemBottomFill size={30}/>
                  <span className="ml-2 font-medium">Đã Bán:  420 đơn</span>
                </div>

                <div className="flex px-3 py-3 w-[30%] bg-blue-600 rounded-md text-white items-center justify-center">
                  <GiTakeMyMoney  size={30}/>
                  <span className="ml-2 font-medium">Doanh Thu: <br></br>349.000.000 ₫</span>
                </div>

                <div className="flex px-3 py-3 w-[30%] bg-blue-600 rounded-md text-white items-center justify-center">
                  <GiMoneyStack size={30}/>
                  <span className="ml-3 font-medium">Số Vốn: <br></br>140.000.000 ₫</span>
                </div>
                
              </div>

              <Line options={options} data={chartProduct} />
            </div>
          ) : null}
          {active === 2 ? (
            <div className="w-11/12 mx-auto bg-white h-[90%] flex flex-col justify-center items-center">
              <div className="w-[50%] ">
                <h2 className="text-center text-2xl font-medium mt-5">
                  THÊM MỚI SẢN PHẨM
                </h2>
                <form className="flex flex-col gap-4 mt-3">
                  <div className="mt-4">
                    <label
                      htmlFor="fullName"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Tên Sản Phẩm
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Giá
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Mô tả
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-8 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="avatar"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-md overflow-hidden">
                        {avatar ? (
                          <img
                            src={avatar}
                            alt="avatar"
                            className="h-full w-full object-cover rounded-sm"
                          />
                        ) : (
                          <CiImageOn className="h-12 w-12" />
                        )}
                      </span>

                      <label
                        htmlFor="file-input"
                        className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <span>Tải ảnh sản phẩm</span>
                        <input
                          type="file"
                          name="avatar"
                          id="file-input"
                          accept=".jpg,.jpeg,.png"
                          onChange={handleFileInputChange}
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>

                  <button className="bg-[#002D74] text-white py-2 rounded-xl font-medium hover:scale-105 duration-300 text-md mt-4">
                    Tạo Sản Phẩm
                  </button>
                </form>
              </div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7 w-[95%] mb-8">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3 border">
                        Ảnh sản phẩm
                      </th>
                      <th scope="col" class="px-6 py-3 border">
                        Tên sản phẩm
                      </th>
                      <th scope="col" class="px-6 py-3 border">
                        Giá bán
                      </th>
                      <th scope="col" class="px-6 py-3 border">
                        Mô tả
                      </th>

                      <th scope="col" class="px-6 py-3 border">
                        Chức năng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 border flex items-center justify-center"
                      >
                        <img
                          alt=""
                          className=" rounded-lg"
                          src="https://cdn.tgdd.vn/Products/Images/7077/314938/apple-watch-ultra-lte-49mm-vien-titanium-day-alpine-size-s-nau-thumb-3-600x600.jpg"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">
                        Đồng hồ thông minh Apple Watch Ultra 2 GPS + Cellular
                        49mm viền Titanium
                      </td>
                      <td class="px-6 py-4 border">20.990.000₫</td>

                      <td class="px-6 py-4 border">20.990.000₫</td>
                      <td class="px-6 py-4 border col-span-2">
                        <button className="bg-[#FF00FF] px-2 text-white py-2 rounded-sm flex items-center ">
                          <FaRegEdit size={20} className="mr-1" />{" "}
                          <span className="text-sm font-medium">Sửa</span>
                        </button>
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">Xóa</span>
                        </button>
                      </td>
                    </tr>

                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 border flex items-center justify-center"
                      >
                        <img
                          alt=""
                          className=" rounded-lg"
                          src="https://cdn.tgdd.vn/Products/Images/7077/289798/apple-watch-se-2022-44mm-vien-nhom-trang-thumbn-600x600.jpg"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">
                        Đồng hồ thông minh Apple Watch SE 2022 GPS 44mm viền
                        nhôm dây thể thao
                      </td>
                      <td class="px-6 py-4 border">10.790.000 ₫</td>

                      <td class="px-6 py-4 border">21.580.000 ₫</td>
                      <td class="px-6 py-4 border">
                        <button className="bg-[#FF00FF] px-2 text-white py-2 rounded-sm flex items-center ">
                          <FaRegEdit size={20} className="mr-1" />{" "}
                          <span className="text-sm font-medium">Sửa</span>
                        </button>
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">Xóa</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
          {active === 1 ? (
            <div className="w-11/12 bg-white mx-auto h-[90%] items-center flex flex-col">
              <h1 className="font-medium text-2xl mt-5 mb-5">
                CÁC SẢN PHẨM SHOP
              </h1>
              <div className="grid grid-cols-4 gap-6 mx-auto w-[90%]">
                {productDataShow &&
                  productDataShow.map((i, index) => (
                    <div className="border p-2 rounded-md shadow-lg hover:scale-105 duration-300">
                      <img alt="" src={i.image_Url[0].url} width={150} />
                      <h2 className="font-medium mt-2 mb-2">{i.name}</h2>
                      <span className="text-gray-600">{i.price} ₫</span>
                    </div>
                  ))}
              </div>
            </div>
          ) : null}
          {active === 3 ? (
            <div className="w-11/12 mx-auto bg-white h-[90%] flex flex-col justify-center items-center">
              <div className="w-[50%] ">
                <h2 className="text-center text-2xl font-medium mt-2 text-[#c48b20]">
                  THÊM SẢN PHẨM KHUYẾN MÃI
                </h2>
                <form className="flex flex-col gap-4 mt-2">
                  <div className="mt-4">
                    <label
                      htmlFor="fullName"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Tên Sản Phẩm
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Giá
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Mã Khuyến Mãi
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Mô tả
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        name="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Ngày bắt đầu
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="date"
                        name="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="appearance-none block  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Ngày kết thúc
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="date"
                        name="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="appearance-none block  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="avatar"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-md overflow-hidden">
                        {avatar ? (
                          <img
                            src={avatar}
                            alt="avatar"
                            className="h-full w-full object-cover rounded-sm"
                          />
                        ) : (
                          <CiImageOn className="h-12 w-12" />
                        )}
                      </span>

                      <label
                        htmlFor="file-input"
                        className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <span>Tải ảnh sản phẩm</span>
                        <input
                          type="file"
                          name="avatar"
                          id="file-input"
                          accept=".jpg,.jpeg,.png"
                          onChange={handleFileInputChange}
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>

                  <button className="bg-[#002D74] text-white py-2 rounded-xl font-medium hover:scale-105 duration-300 text-md mt-4">
                    Tạo Sản Phẩm
                  </button>
                </form>
              </div>
            </div>
          ) : null}
          {active === 4 ? (
            <div className="w-11/12 bg-white mx-auto  h-[90%] items-center overflow-y-auto">
              <div class=" relative  shadow-md sm:rounded-lg mt-7 w-[95%] mb-8 mx-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3 border">
                        Profile
                      </th>
                      <th scope="col" class="px-6 py-3 border">
                        Địa Chỉ Email
                      </th>
                      <th scope="col" class="px-6 py-3 border">
                        Địa Chỉ
                      </th>
                      <th scope="col" class="px-6 py-3 border">
                        Sản Phẩm
                      </th>

                      <th scope="col" class="px-6 py-3 border">
                        Ngày mua
                      </th>

                      <th scope="col" class="px-6 py-3 border">
                        Số Lượng
                      </th>

                      <th scope="col" class="px-6 py-3 border">
                        Tổng Tiền
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border ">
                      <th scope="row" class="px-6 py-4">
                        <img
                          alt=""
                          className="h-12 w-12 rounded-full"
                          src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/436358151_2054959381571004_3929613974705056896_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHFB4_jhTIdX6UDY4YmmPjINEZYtVniJlU0Rli1WeImVf6uJuVLl583xB8M1pHfc2TiRqU-lqmCREYwBUE_Sxzx&_nc_ohc=e69RVZkxWbcQ7kNvgHM_dpw&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYBZqugN-bDRYmVLga6pOk7-uFrL5s_lgsD8nvHVn_l1sw&oe=6649157C"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">daothihau1234@gmail.com</td>
                      <td class="px-6 py-4 border">Nho Linh, Thừa Thiên Huế</td>

                      <td class="px-6 py-4 border">
                        Đồng hồ thông minh Apple Watch ...
                      </td>

                      <td class="px-6 py-4 border">24/05/2024</td>
                      <td class="px-6 py-4 border">2</td>
                      <td class="px-6 py-4 border">24.000.000₫</td>
                    </tr>

                    <tr class="border">
                      <th scope="row" class="px-6 py-4">
                        <img
                          alt=""
                          className="h-12 w-12 rounded-full"
                          src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/436464294_955241156064919_1003122566755316905_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEaQ5bchpLU0kt-C-n_mj24OaRfDzDMHo85pF8PMMwej2Z74uDyFkSDjm3x3af_In_mgY_B9spLqmJOPmCZ9xj0&_nc_ohc=DhByY-U0NMYQ7kNvgFzPR-B&_nc_ht=scontent.fsgn2-3.fna&oh=03_Q7cD1QFGAguVboJ14ptT55e5PHPGovnfjUvLJsQexYsrNvclLQ&oe=666AAD80"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">DuongVanToan03@gmail.com</td>
                      <td class="px-6 py-4 border">
                        Quảng Điền, Thừa Thiên Huế
                      </td>

                      <td class="px-6 py-4 border">
                        Đồng hồ thông minh Apple Watch ...
                      </td>

                      <td class="px-6 py-4 border">20/5/2024</td>
                      <td class="px-6 py-4 border">1</td>
                      <td class="px-6 py-4 border">12.000.000₫</td>
                    </tr>

                    <tr class="border">
                      <th scope="row" class="px-6 py-4">
                        <img
                          alt=""
                          className="h-12 w-12 rounded-full"
                          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/294686343_1638080546585409_1038644036624992658_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHhGziBVW4NIrAAOJa7Q8552U6keDM8AtjZTqR4MzwC2CcFLmRbzgiVI1ASwxvYdVsk23R1WBJoE3DZlBcBkKZ8&_nc_ohc=85M342MpZW4Q7kNvgGTwp1u&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYCrCNu2gWW7s2aW7p2FyUY9JsjUVg7PP2lb6cvLYd92vw&oe=664914F5"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">
                        lqtrongtinh6969@gmail.com
                      </td>
                      <td class="px-6 py-4 border">
                        Quảng điền, Thừa Thiên Huế
                      </td>

                      <td class="px-6 py-4 border">
                        Đồng hồ thông minh Apple Watch ...
                      </td>

                      <td class="px-6 py-4 border">19/5/2024</td>
                      <td class="px-6 py-4 border">4</td>
                      <td class="px-6 py-4 border">31.960.000₫</td>
                    </tr>

                    <tr class="border">
                      <th scope="row" class="px-6 py-4">
                        <img
                          alt=""
                          className="h-12 w-12 rounded-full"
                          src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/62459947_719082575178096_8158908089538445312_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE5Ncr8hXo8ak2YFceJSJ828iPW8WiWq0vyI9bxaJarS54gtiKXSoT9GSouSf_EiJrPA1vz4lNz09VKFKKj7ZLd&_nc_ohc=zVHF6dWIpToQ7kNvgGNKQle&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBglSojgPIGGkITL6PRU15rfT-ma30XYkaXMxslMMe5qQ&oe=666ADDE2"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">anhthoo1006@gmail.com</td>
                      <td class="px-6 py-4 border">615 Tam Phước, Phú Ninh</td>

                      <td class="px-6 py-4 border">
                        Đồng hồ thông minh Apple Watch ...
                      </td>

                      <td class="px-6 py-4 border">17/05/2024</td>
                      <td class="px-6 py-4 border">6</td>
                      <td class="px-6 py-4 border">72.000.000₫</td>
                    </tr>

                    <tr class="">
                      <th scope="row" class="px-6 py-4">
                        <img
                          alt=""
                          className="h-12 w-12 rounded-full"
                          src="https://file.tinnhac.com/resize/360x-/2021/07/09/20210709135019-0459.jpeg"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">quymuivippro03@gmail.com</td>
                      <td class="px-6 py-4 border">Điện Bàn, Quảng Nam</td>

                      <td class="px-6 py-4 border">Đồng hồ thông minh...</td>

                      <td class="px-6 py-4 border">19/05/2024</td>
                      <td class="px-6 py-4 border">3</td>
                      <td class="px-6 py-4 border">62.970.000₫</td>
                    </tr>

                    <tr class="border">
                      <th scope="row" class="px-6 py-4">
                        <img
                          alt=""
                          className="h-12 w-12 rounded-full"
                          src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/436610008_1143235093661223_2518760151183976359_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFW_AHTKcGYkKccRjP1RBAHIcaBEQdHeZ8hxoERB0d5n_BcX5FklpoANHVpRLdP3YQkjI7Ec9UDtqIbcAgtvMCZ&_nc_ohc=Eaj9R471tK0Q7kNvgF2Bgdq&_nc_ht=scontent.fsgn2-5.fna&oh=03_Q7cD1QGiM7zk3JDqiKqP9yAGSv-huVxruDXHvWNwvPe_ZGZrlQ&oe=666AB9DB"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">
                        quangduiganh2thang2003@gmail.com
                      </td>
                      <td class="px-6 py-4 border">61 Hoàng Diệu Tp Đà Nẵng</td>

                      <td class="px-6 py-4 border">
                        Đồng hồ thông minh Apple Watch ...
                      </td>

                      <td class="px-6 py-4 border">12/04/2024</td>
                      <td class="px-6 py-4 border">2</td>
                      <td class="px-6 py-4 border">41.980.000 ₫</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
          {active === 5 ? (
            <div className="w-11/12 bg-white mx-auto  h-[90%] items-center overflow-y-auto">
              <div class="relative overflow-y-auto shadow-md sm:rounded-lg mt-7 w-[95%] mb-8 mx-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3 border">
                        Profile
                      </th>
                      <th scope="col" class="px-6 py-3 border">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3 border">
                        Password
                      </th>
                      <th scope="col" class="px-6 py-3 border">
                        Ngày Tạo
                      </th>

                      <th scope="col" class="px-6 py-3 border">
                        Chức năng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center justify-center border"
                      >
                        <img
                          alt=""
                          className=" rounded-full h-12 w-12"
                          src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/436358151_2054959381571004_3929613974705056896_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHFB4_jhTIdX6UDY4YmmPjINEZYtVniJlU0Rli1WeImVf6uJuVLl583xB8M1pHfc2TiRqU-lqmCREYwBUE_Sxzx&_nc_ohc=e69RVZkxWbcQ7kNvgHM_dpw&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYBZqugN-bDRYmVLga6pOk7-uFrL5s_lgsD8nvHVn_l1sw&oe=6649157C"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">daothihau1234@gmail.com</td>
                      <td class="px-6 py-4 border">dnuwh#3jdjdihhfaik</td>

                      <td class="px-6 py-4 border">10/02/2023</td>
                      <td class="px-6 py-4 border col-span-2">
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">
                            Xóa Tài Khoản
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center justify-center border"
                      >
                        <img
                          alt=""
                          className=" rounded-full h-12 w-12"
                          src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/436464294_955241156064919_1003122566755316905_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEaQ5bchpLU0kt-C-n_mj24OaRfDzDMHo85pF8PMMwej2Z74uDyFkSDjm3x3af_In_mgY_B9spLqmJOPmCZ9xj0&_nc_ohc=DhByY-U0NMYQ7kNvgFzPR-B&_nc_ht=scontent.fsgn2-3.fna&oh=03_Q7cD1QFGAguVboJ14ptT55e5PHPGovnfjUvLJsQexYsrNvclLQ&oe=666AAD80"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">DuongVanToan03@gmail.com</td>
                      <td class="px-6 py-4 border">dnuwh#3jdjdih%djhfaik</td>

                      <td class="px-6 py-4 border">12/03/2024</td>
                      <td class="px-6 py-4 border col-span-2">
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">
                            Xóa Tài Khoản
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center justify-center border"
                      >
                        <img
                          alt=""
                          className=" rounded-full h-12 w-12"
                          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/294686343_1638080546585409_1038644036624992658_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHhGziBVW4NIrAAOJa7Q8552U6keDM8AtjZTqR4MzwC2CcFLmRbzgiVI1ASwxvYdVsk23R1WBJoE3DZlBcBkKZ8&_nc_ohc=85M342MpZW4Q7kNvgGTwp1u&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYCrCNu2gWW7s2aW7p2FyUY9JsjUVg7PP2lb6cvLYd92vw&oe=664914F5"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">lqtrongtinh6969@gmail.com</td>
                      <td class="px-6 py-4 border">dnuwsh#3jdjdihhfaik</td>

                      <td class="px-6 py-4 border">12/02/2024</td>
                      <td class="px-6 py-4 border col-span-2">
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">
                            Xóa Tài Khoản
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center justify-center border"
                      >
                        <img
                          alt=""
                          className=" rounded-full h-12 w-12"
                          src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/62459947_719082575178096_8158908089538445312_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE5Ncr8hXo8ak2YFceJSJ828iPW8WiWq0vyI9bxaJarS54gtiKXSoT9GSouSf_EiJrPA1vz4lNz09VKFKKj7ZLd&_nc_ohc=zVHF6dWIpToQ7kNvgGNKQle&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBglSojgPIGGkITL6PRU15rfT-ma30XYkaXMxslMMe5qQ&oe=666ADDE2"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">anhthoo1006@gmail.com</td>
                      <td class="px-6 py-4 border">dnuwh#3jdjdyyihhfaik</td>

                      <td class="px-6 py-4 border">12/02/2024</td>
                      <td class="px-6 py-4 border">
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">
                            Xóa Tài Khoản
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center justify-center border"
                      >
                        <img
                          alt=""
                          className=" rounded-full h-12 w-12"
                          src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/436610008_1143235093661223_2518760151183976359_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFW_AHTKcGYkKccRjP1RBAHIcaBEQdHeZ8hxoERB0d5n_BcX5FklpoANHVpRLdP3YQkjI7Ec9UDtqIbcAgtvMCZ&_nc_ohc=Eaj9R471tK0Q7kNvgF2Bgdq&_nc_ht=scontent.fsgn2-5.fna&oh=03_Q7cD1QGiM7zk3JDqiKqP9yAGSv-huVxruDXHvWNwvPe_ZGZrlQ&oe=666AB9DB"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">quangduiganh2thang2003@gmail.com</td>
                      <td class="px-6 py-4 border">dnuwh#3ssjdjdihhfaik</td>

                      <td class="px-6 py-4 border">14/02/2024</td>
                      <td class="px-6 py-4 border">
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">
                            Xóa Tài Khoản
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center justify-center border"
                      >
                        <img
                          alt=""
                          className=" rounded-full h-12 w-12"
                          src="https://file.tinnhac.com/resize/360x-/2021/07/09/20210709135019-0459.jpeg"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">quymuivippro03@gmail.com</td>
                      <td class="px-6 py-4 border">dnuwh#3jdjdihhfaik</td>

                      <td class="px-6 py-4 border">12/04/2024</td>
                      <td class="px-6 py-4 border">
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">
                            Xóa Tài Khoản
                          </span>
                        </button>
                      </td>
                    </tr>

                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center justify-center border"
                      >
                        <img
                          alt=""
                          className=" rounded-full h-12 w-12"
                          src="https://htmediagroup.vn/wp-content/uploads/2021/07/anh-profile-nam-min.jpg"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">atoni2932@gmail.com</td>
                      <td class="px-6 py-4 border">dnuwfdh#3jdjdihhfaik</td>

                      <td class="px-6 py-4 border">12/05/2024</td>
                      <td class="px-6 py-4 border">
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">
                            Xóa Tài Khoản
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center justify-center border"
                      >
                        <img
                          alt=""
                          className=" rounded-full h-12 w-12"
                          src="https://www.lavender.com.vn/wp-content/uploads/chup-anh-profile-ca-nhan-lam-quang-cao-o-tphcm-92.jpg"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">anhxuimap9293@gmail.com</td>
                      <td class="px-6 py-4 border">dncccuwh#3jdccjdihhfaik</td>

                      <td class="px-6 py-4 border">22/03/2024</td>
                      <td class="px-6 py-4 border">
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">
                            Xóa Tài Khoản
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr class="">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center justify-center border"
                      >
                        <img
                          alt=""
                          className=" rounded-full h-12 w-12"
                          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                          width={80}
                        />
                      </th>
                      <td class="px-6 py-4 border">anhthobeo1006@gmail.com</td>
                      <td class="px-6 py-4 border">dnuwh#3jdjdihhfaik</td>

                      <td class="px-6 py-4 border">12/02/2024</td>
                      <td class="px-6 py-4 border">
                        <button className="bg-red-500 px-2 text-white py-2 rounded-sm flex items-center mt-2">
                          <MdOutlineDelete size={22} className="mr-1" />{" "}
                          <span className="text-sm font-medium">
                            Xóa Tài Khoản
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const options = {};
const data = {};

export default CreateProduct;
