import { React, useContext, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import image from "../../images/login-image.jpg";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";


const Signup = () => {
  const context = useContext(MyContext);
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleMatch = () => {
    if (password !== Confirmpassword) {
      setErrorMessage("Passwod and confirm password should be the same");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  };
  useEffect(() => {
    context.setIsHeaderAFooterShow(false);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-[#002D74] text-center">
            Đăng ký người dùng mới
          </h2>

          <form className="flex flex-col gap-4 mt-3" onClick={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Tên Người Dùng
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
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
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
                className="block text-sm font-medium text-gray-700"
              >
                Mật Khẩu
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={20}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={20}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Xác nhận mật khẩu
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={Confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visibleConfirm ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={20}
                    onClick={() => setVisibleConfirm(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={20}
                    onClick={() => setVisibleConfirm(true)}
                  />
                )}
                {errorMessage ? (
                  <p className="text-[#f65252] text-xs mt-2 font-medium">
                    {errorMessage}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>

                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Tải ảnh hồ sơ</span>
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

            <button
              className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 text-sm mt-2"
              onClick={handleMatch}
            >
              Đăng Ký
            </button>
          </form>

          <div className="mt-4 text-sm flex justify-between items-center">
            <p>Đã có một tài khoản?</p>
            <Link
              to="/login"
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
            >
              Đăng Nhập
            </Link>
          </div>
        </div>
        <div className="w-1/2 md:block hidden">
          <img className="rounded-2xl" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;

