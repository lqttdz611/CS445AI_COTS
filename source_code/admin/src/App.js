import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import ProductUpload from "./pages/ProductUpload";
import CategoryUpload from "./pages/CategoryUpload";
import Categories from "./pages/Categories";

const MyContext = createContext();
function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebar, setIsHideSidebar] = useState(false);
  const [themeMode, setThemeMode] = useState(()=>{
    return localStorage.getItem("themeMode") === "dark" ? false : true;
  });

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  const values = {
    setIsToggleSidebar,
    isToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebar,
    setIsHideSidebar,
    themeMode,
    setThemeMode,
  };

  useEffect(() => {}, []);
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {isHideSidebar !== true && <Header />}

          <div className="main d-flex">
            {isHideSidebar !== true && (
              <div
                className={`sidebarWrapper ${
                  isToggleSidebar === true ? "toggle" : ""
                }`}
              >
                <SideBar />
              </div>
            )}

            <div
              className={`content ${isHideSidebar === true ? "full" : ""} ${
                isToggleSidebar === true ? "toggle" : ""
              }`}
            >
              <Routes>
                <Route path={"/"} exact={true} element={<Dashboard />} />
                <Route
                  path={"/dashboard"}
                  exact={true}
                  element={<Dashboard />}
                />
                <Route path={"/login"} exact={true} element={<Login />} />
                <Route path={"/sign-up"} exact={true} element={<SignUp />} />
                <Route path={"/products"} exact={true} element={<Products />} />
                <Route path={"/product/upload"} exact={true} element={<ProductUpload />} />
                <Route path={"/categories/upload"} exact={true} element={<CategoryUpload />} />
                <Route path={"/categories"} exact={true} element={<Categories />} />
                <Route
                  path={"/product/details"}
                  exact={true}
                  element={<ProductDetails />}
                />
              </Routes>
            </div>
          </div>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };
