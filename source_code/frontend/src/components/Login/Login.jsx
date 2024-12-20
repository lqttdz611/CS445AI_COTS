import React, { useContext, useEffect, useState } from "react";
import image from "../../images/login-image.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const Login = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsHeaderAFooterShow(false);
  }, []);
    const [visible,setVisible] = useState(null);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 ">
        <div className="md:w-1/2 px-16">
          <div>
            <h2 className="text-2xl text-[#002D74]">Đăng Nhập</h2>
            <p className="text-sm mt-4 text-[#002D74]">
            Nếu bạn đã là thành viên, hãy đăng nhập
            </p>
          </div>
          <form action="" className="">
            <div className="mt-4">
              <label
                htmlFor="email"
                className="text-sm block font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="text-sm block font-medium text-gray-700"
                >
                  Mật Khẩu
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible? "text" : "password"}
                    name="password"
                    className="apprarance-none w-full px-3 py-2 border boder-gray-700 rounded-md shadow-sm  placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {visible? <AiOutlineEye className="absolute right-2 top-2 cursor-pointer" size={20}
                    onClick={() => setVisible(false)}/>:<AiOutlineEyeInvisible className="absolute right-2 top-2 cursor-pointer" size={20}
                    onClick={() => setVisible(true)}/>}
                </div>
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Nhớ Tài Khoản
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Quên Mật Khẩu ?
                </a>
              </div>
            </div>
            <button className="w-full py-2 bg-[#002D74] mt-5 rounded-xl text-[#fff] hover:scale-105 duration-300 text-sm">
              Đăng nhập
            </button>

            <div className="mt-10 grid grid-col-3 items-center text-gray-500">
                <hr className="border-gray-500"/>
                <p className="text-sm text-center">OR</p>
                <hr className="border-gray-500"/>
            </div>

            <button className="flex items-center justify-center bg-white border w-full py-2 rounded-xl mt-5 text-sm hover:scale-105 duration-300">
              <FcGoogle width={20} height={25} className="mr-3" />
              Đăng nhập với google
            </button>

            <div className="flex items-center justify-between text-sm mt-4">
                <p>Chưa có tài khoản?</p>
                <Link to="/sign-up">
                <button className="px-5 py-2 hover:scale-110 duration-300 bg-white rounded-xl border">Đăng kí ngay</button></Link>
            </div>
          </form>
        </div>
        <div className="w-1/2 md:block hidden">
          <img src={image} alt="" className="rounded-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
