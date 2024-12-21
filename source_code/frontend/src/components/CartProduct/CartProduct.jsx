import React, { useContext, useEffect, useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import QuantityBox from "../QuantityBox";
import { IoBagCheckOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import { MyContext } from "../../App";
import Rating from "@mui/material/Rating";
import { deleteData, editData, fetchDataFromAPI } from "../../utils/api";
const CartProduct = () => {
  const context = useContext(MyContext);
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [cartFields, setCartFields] = useState({});
  const [changeQuantity, setChangeQuantity] = useState(0);

  const [productQuantity, setProductQuantity] = useState();
  const quantity = (number) => {
    setProductQuantity(number);
    setChangeQuantity(number)
  }

  useEffect(() => {
    
    fetchDataFromAPI("/api/cart").then((res) => {
      console.log("cart data + ", res)
      setCartData(res);
      // setProductQuantity(res.quantity);
      
    })
  },[])

  const selectedItem = (item, quantityVal) => {
    if(changeQuantity!==0) {
      setIsLoading(true);
    const user = JSON.parse(localStorage.getItem("user"))
      cartFields.productTitle= item?.productTitle
      cartFields.image= item?.image
      cartFields.rating= item?.rating
      cartFields.price= item?.price
      cartFields.quantity= quantityVal
      cartFields.subTotal= parseInt(item?.price*quantityVal);
      cartFields.productId= item?.productId
      cartFields.userId= user?.userId

      // console.log("cart field + ",cartFields);
      editData(`/api/cart/${item?._id}`, cartFields).then((res) => {
        fetchDataFromAPI("/api/cart").then((res) => {
          console.log("cart data + ", res)
          setCartData(res);
          // setProductQuantity(res.quantity);
        })
        setTimeout(() => {
          setIsLoading(false);
          
        }, 1000);
      })
    }
    
  }
  const removeItem = (id) => {
    deleteData(`/api/cart/${id}`).then((res) => {
      context.setAlertBox({
        open: true,
        error: false,
        msg: 'Item removed from CART!'
      })

      fetchDataFromAPI("/api/cart").then((response) => {
        setCartData(response);
      })

      context.getCartCount();
    })
  }

  return (
    <div>
      <div className="m-10">
      <div className="mb-3">
      <Link to="/" className="text-blue-600 text-lg font-semibold underline">Trang chủ / giỏ hàng</Link>
      </div>
        
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="row">
            
          <div className="col-md-9">
            <div className="table-responsive">
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
            {
              cartData?.length!==0 && cartData?.map((item,index) => {
                return(
                  <tbody>
              <tr class="">
                <th
                  scope="row"
                  class="px-6 py-4 border flex items-center justify-center"
                >
                  <img
                    alt=""
                    className=" rounded-lg"
                    src={item?.image}
                    width={80}
                  />
                </th>
                <td class="px-6 py-4 border">
                <Link to={`/product/${item.productId}`}>
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="info px-3">
                              <h6>{item.productTitle.substr(0,30)+'...'} </h6>
                              <Rating
                                className="mt-2 mb-2"
                                name="read-only"
                                value={`${item?.rating}`}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                </td>
                <td class="px-6 py-4 border">${item?.price}</td>
                <td class="px-6 py-4 border">
                  <QuantityBox quantity={quantity} item={item} productQuantity={productQuantity} selectedItem={selectedItem} value={item?.quantity} />
                </td>
                <td class="px-6 py-4 border">${parseInt(item.subTotal)}</td>
                <td class="px-6 py-4 border">
                  <button className="bg-red-500 px-2 text-white py-2 rounded-full" onClick={()=> {removeItem(item?._id)}}>
                    <MdOutlineDelete size={25} />
                  </button>
                </td>
              </tr>

            </tbody>
                )
              })
            }
            
          </table>
          </div>
          </div>

          <div className="col-md-3">
              <div className="card border p-3 cartDetails">
                <h4>CART TOTALS</h4>
                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ml-auto text-red font-weight-bold">
                    ${
                      cartData?.length!==0 && cartData?.map(item => parseInt(item.price) *item.quantity).reduce((total,value) => total + value, 0)
                  }
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Shipping</span>
                  <span className="ml-auto">
                    <b>Free</b>
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Estimate for</span>
                  <span className="ml-auto">
                    <b>Viet Nam</b>
                  </span>
                </div>
                <Divider />
                <div className="d-flex align-items-center mb-3">
                  <span>Total</span>
                  <span className="ml-auto text-red font-weight-bold">
                  ${
                      cartData?.length!==0 && cartData?.map(item => parseInt(item.price)*item.quantity).reduce((total,value) => total + value, 0)
                  }
                  </span>
                </div>
                
                <br />
                <Link to="/">
                  <Button className=" btn-blue bg-red btn-lg btn-big w-100">
                    <IoBagCheckOutline /> &nbsp; Checkout
                  </Button>
                </Link>
              </div>
              
            </div>
          </div>

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
         
         
        </div>
      </div>

    </div>
  );
};

export default CartProduct;
