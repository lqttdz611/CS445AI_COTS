import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import { Button } from "@mui/material";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const ProductItem = (props) => {


  const context= useContext(MyContext);
  const viewProductDetail = (id) => {
      context.setIsOpenProductModal(true);
  }

  

return (
  <>
    <div className={`productItem ${props.itemView}`}>
      <div className="imgWrapper">
        <Link to={`/product/${props?.dataProduct?._id}`}>
        <img
          src={props?.dataProduct?.images[0]}
          className="w-100"
        ></img></Link>
        <span className="badge badge-primary">{props?.dataProduct?.discount}%</span>
        <div className="actions">
          <Button onClick={() => viewProductDetail(1)}>
            <TfiFullscreen />
          </Button>
          <Button>
            <IoMdHeartEmpty style={{ fontSize: "20px" }} />
          </Button>
        </div>
        
      </div>
      <div className="info">
          <h4>{props?.dataProduct?.name}</h4>
          <span className="text-success d-block">{`${
            props?.dataProduct?.countInStock >= 1
              ? "In stock (" + props?.dataProduct?.countInStock + ")"
              : "Sold out"
          } `}</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={props?.dataProduct?.rating}
            size="small"
            precision={0.5}
            readOnly
          />
          <div className="d-flex">
            <span className="oldPrice ">${props?.dataProduct?.oldPrice}</span>
            <span className="netPrice text-danger ml-2">${props?.dataProduct?.price}</span>
          </div>
        </div>
    </div>
    
    
  </>
);
}
export default ProductItem;