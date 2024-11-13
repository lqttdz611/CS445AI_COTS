import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaMicrophone, FaShoppingBag } from "react-icons/fa";
import { navItems } from "../../static/data";

const Header = () => {
  return (
    <div className="min-h-100vh mt-2">
      <div className="w-11/12 flex items-center justify-end">
        {/* <div className="w-[40%] relative flex items-center">
        
        <button><AiOutlineSearch size={25} className="absolute top-1.5 ml-2 mr-2" /></button>
        <input
            type="text"
            placeholder="Tìm sản phẩm hoặc thương hiệu ..."
            className="h-[40px] w-full px-2 border-[2px] rounded-md border-[#3957db]"
          />
          <FaMicrophone
            size={30}
            className="absolute top-0 right-2 mt-1.5"
          />
        </div> */}
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
        <div className="relative p-3 ">
          <Link to="/cart">
            <FaShoppingBag size={25} className="ml-3" />
          </Link>
          <span className="absolute bg-red-700 rounded-full h-5 w-5 flex items-center justify-center text-white font-medium right-2 top-[30px]">
            2
          </span>
        </div>
      </div>

      <div className="flex py-4 justify-center items-center mx-auto mt-1 bg-[#3321c8] relative">
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt="Logo"
            />
          </Link>
        </div>
        {navItems && navItems.map((item, index) => (
          <div className="relative flex px-6 group" key={index}>
            <Link
              to={item.url}
              className="text-[#fff] font-[500] px-6 cursor-pointer text-lg"
            >
              {item.title}
            </Link>
            {/* Submenu */}
            {item.submenu && (
              <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded mt-2">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={subItem.url}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <Link to="/sign-in">
          <button className="w-[150px] bg-[#FFBB38] h-[50px] flex items-center justify-center rounded-xl cursor-pointer font-medium text-black text-lg">
            Đăng Nhập
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
// import React from "react";
// import { AiOutlineSearch } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { FaMicrophone, FaShoppingBag } from "react-icons/fa";
// import { navItems } from "../../static/data";

// const Header = () => {
//   return (
//     <div className="min-h-100vh mt-2">
//       <div className="w-11/12 flex items-center justify-end">
//         <div className="w-[50%] relative flex items-center">
//           <input
//             type="text"
//             placeholder="Tìm sản phẩm hoặc thương hiệu ..."
//             className="h-[40px] w-full px-2 border-[2px] rounded-md border-[#3957db]"
//           />
//           <AiOutlineSearch size={25} className="absolute top-1.5 ml-2" />
//           <FaMicrophone
//             size={30}
//             className="absolute top-1.5 right-2 mt-1.5"
//           />
//         </div>
//         <div className="relative p-3 ">
//           <Link to="/cart">
//             <FaShoppingBag size={25} className="ml-3" />
//           </Link>
//           <span className="absolute bg-red-700 rounded-full h-5 w-5 flex items-center justify-center text-white font-medium right-2 top-[30px]">
//             2
//           </span>
//         </div>
//       </div>

//       <div className="flex py-4 justify-center items-center mx-auto mt-1 bg-[#3321c8] relative">
//         <div>
//           <Link to="/">
//             <img
//               src="https://shopo.quomodothemes.website/assets/images/logo.svg"
//               alt="Logo"
//             />
//           </Link>
//         </div>
//         {navItems && navItems.map((item, index) => (
//           <div className="relative flex px-6 group" key={index}>
//             <Link
//               to={item.url}
//               className="text-[#fff] font-[500] px-6 cursor-pointer text-lg"
//             >
//               {item.title}
//             </Link>
//             {/* Submenu */}
//             {item.submenu && (
//               <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded mt-12 z-20 submenu-wrapper">
//                 {item.submenu.map((subItem, subIndex) => (
//                   <li key={subIndex}>
//                     <Link
//                       to={subItem.url}
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       {subItem.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//         <Link to="/sign-in">
//           <button className="w-[150px] bg-[#FFBB38] h-[50px] flex items-center justify-center rounded-xl cursor-pointer font-medium text-black text-lg">
//             Đăng Nhập
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;