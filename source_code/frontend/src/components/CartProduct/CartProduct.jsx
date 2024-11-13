import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";

const CartProduct = () => {
  return (
    <div>
      <Header />
      <div className="m-10">
      <div className="mb-3">
      <Link to="/" className="text-blue-600 text-lg font-semibold underline">Trang chủ / giỏ hàng</Link>
      </div>
        

      

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                  Số lượng
                </th>
                <th scope="col" class="px-6 py-3 border">
                  Tạm tính
                </th>
                <th scope="col" class="px-6 py-3 border">
                  Xoá
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
                  Đồng hồ thông minh Apple Watch Ultra 2 GPS + Cellular 49mm
                  viền Titanium
                </td>
                <td class="px-6 py-4 border">20.990.000 ₫</td>
                <td class="px-6 py-4 border">
                  <div className="flex items-center justify-start">
                    <span className="px-4 py-1 rounded-sm text-lg bg-black text-white flex items-center justify-center cursor-pointer">
                      -
                    </span>
                    <p className="px-4 py-1.5 border">1</p>
                    <span className="px-3 py-1 rounded-sm text-xl bg-black text-white flex items-center justify-center cursor-pointer">
                      +
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 border">20.990.000 ₫</td>
                <td class="px-6 py-4 border">
                  <button className="bg-red-500 px-2 text-white py-2 rounded-full">
                    <MdOutlineDelete size={25} />
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
                  Đồng hồ thông minh Apple Watch SE 2022 GPS 44mm viền nhôm dây
                  thể thao
                </td>
                <td class="px-6 py-4 border">10.790.000 ₫</td>
                <td class="px-6 py-4 border">
                  <div className="flex items-center justify-start">
                    <span className="px-4 py-1 rounded-sm text-lg bg-black text-white flex items-center justify-center cursor-pointer">
                      -
                    </span>
                    <p className="px-4 py-1.5 border">2</p>
                    <span className="px-3 py-1 rounded-sm text-xl bg-black text-white flex items-center justify-center cursor-pointer">
                      +
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 border">21.580.000 ₫</td>
                <td class="px-6 py-4 border">
                  <button className="bg-red-500 px-2 text-white py-2 rounded-full">
                    <MdOutlineDelete size={25} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="flex justify-between  mt-2">
        <div className="mt-4 ">
        <Link
            to="/"
            className="py-2 px-4 border rounded-md shadow-lg font-medium hover:bg-blue-600 hover:text-white duration-300"
          >
            Tiếp tục mua hàng
          </Link>
        </div>
         
          <div className="flex flex-col mt-1">
            <span className="py-2 w-[220px] pl-2 mr-20 border rounded-md shadow-lg font-medium ">
              Tổng tiền: 42.570.000 ₫
            </span>

            <button className="w-[150px] bg-blue-600 text-white font-medium h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer mt-5">
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartProduct;
