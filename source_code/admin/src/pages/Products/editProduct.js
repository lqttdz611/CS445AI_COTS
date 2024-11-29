import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs, Button } from "@mui/material";
import { FaHome } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import Chip from "@mui/material/Chip";
import { emphasize, styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IoMdRemove } from "react-icons/io";
import { PiImages } from "react-icons/pi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Rating from "@mui/material/Rating";
import {MyContext} from "../../App"
import { deleteData, editData, fetchAllDataFromAPI, fetchDataFromAPI, postData } from "../../utils/api";
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const EditProduct = () => {
  const history = useNavigate();
  let { id } = useParams();
  const context = useContext(MyContext);

  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  // for rating controlled
  const [valueRating, setValueRating] = useState("1");
  const [product, setProducts] = useState([]);
  const [categoryVal, setcategoryVal] = useState("");
  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    images: [],
    brand: "",
    price: 0,
    oldPrice: 0,
    category: "",
    countInStock: 0,
    rating: 0,
    isFeatured: false,
  });
  const [cateData, setCateData] = useState([]);
  const [isFeaturedValue, setisFeaturedValue] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    context.setProgress(20);

    fetchDataFromAPI(`/api/category`).then((res) => {
      console.log(
        "category", res
      )
      setCateData(res);
      context.setProgress(100)
    })

    fetchAllDataFromAPI(`/api/products/${id}`).then((res) => {
      setProducts(res);
      setFormFields({
        name: res.name,
        description: res.description,
        brand: res.brand,
        price: res.price,
        oldPrice: res.oldPrice,
        category: res.category,
        countInStock: res.countInStock,
        rating: res.rating,
        isFeatured: res.isFeatured,
        
      });
      setPreViewImg(res.images)
      console.log(res);
      setcategoryVal(res.category);
      setValueRating(res.rating);
      
      setisFeaturedValue(res.featured);
      context.setProgress(100);
    });
  }, []);

  //
  const [categoryItem, setCategoryItem] = useState("");
  const [categorySubItem, setCategorySubItem] = useState("");
  const [featuredSelect, setFeaturedSelect] = useState("");
  const [ramProduct, setRamProduct] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setCategoryItem(event.target.value);
    setFormFields({
      ...formFields,
      category:event.target.value,
    })
  };
  const handleSubChange = (event: SelectChangeEvent) => {
    setCategorySubItem(event.target.value);
  };
  const handleChangeisFeaturedValue = (event) => {
    setisFeaturedValue(event.target.value);
    setFormFields(() => ({
      ...formFields,
      isFeatured: event.target.value,
    }));
  };
  const handleRamChange = (event: SelectChangeEvent) => {
    setRamProduct(event.target.value);
  };


  const editProduct = (e) => {
    e.preventDefault();
    // console.log(formFields);

    formdata.append("name", formFields.name);
    formdata.append("description", formFields.description);
    formdata.append("brand", formFields.brand);
    formdata.append("price", formFields.price);
    formdata.append("oldPrice", formFields.oldPrice);
    // formdata.append("subCatId", formFields.subCatId);
    // formdata.append("catId", formFields.catId);
    // formdata.append("catName", formFields.catName);
    formdata.append("category", formFields.category);
    // formdata.append("subCat", formFields.subCat);
    formdata.append("countInStock", formFields.countInStock);
    formdata.append("rating", formFields.rating);
    formdata.append("isFeatured", formFields.isFeatured);
    // formdata.append("discount", formFields.discount);
    // formdata.append("productRam", formFields.productRam);
    // formdata.append("size", formFields.size);
    // formdata.append("productWeight", formFields.productWeight);
    // formdata.append("location", formFields.location);

    if (formFields.name === "") {
      // context.setAlertBox({
      //   open: true,
      //   msg: "please add product name",
      //   error: true,
      // });
      alert("plz add product name")
      return false;
    }
    if (formFields.description === "") {
      // context.setAlertBox({
      //   open: true,
      //   msg: "please add product description",
      //   error: true,
      // });
      alert("plz add product description")
      return false;
    }
    if (formFields.brand === "") {
      // context.setAlertBox({
      //   open: true,
      //   msg: "please add product brand",
      //   error: true,
      // });
      alert("please add product brand")
      return false;
    }
    if (formFields.price === null) {
      // context.setAlertBox({
      //   open: true,
      //   msg: "please add product price",
      //   error: true,
      // });
      alert("please add product price")
      return false;
    }
    if (formFields.oldPrice === null) {
      // context.setAlertBox({
      //   open: true,
      //   msg: "please add product oldPrice",
      //   error: true,
      // });
      alert("please add product oldPrice")
      return false;
    }
    if (formFields.category === "") {
      // context.setAlertBox({
      //   open: true,
      //   msg: "please select a category",
      //   error: true,
      // });
      alert("please select a category")
      return false;
    }
    if(isSelectedFiles === false) {
      alert("please select a category")
      return false;
    }
    editData(`/api/products/${id}`, formFields).then((res) => {
      context.setAlertBox({
        open:true,
        msg:"The product was uploaded!",
        error: false,

      })
      setIsLoading(false);
      
      history("/products");
    })
  };

  const inputChange = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const formdata = new FormData();
  const [files, setFiles] = useState([]);
  const [isSelectedFiles, setIsSelectedFiles] = useState(false);
  const [imgFiles, setImgFiles] = useState();
  const [previewImg, setPreViewImg] = useState();
  const onChangeFile = async (e, apiEndPoint) => {
    try {
      const imgArr = [];
      const files = e.target.files;

      for (var i = 0; i < files.length; i++) {
        // Validate file type
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          setImgFiles(e.target.files)
          const file = files[i];
            imgArr.push(file);
          formdata.append(`images`, file);
          }

          else {
          context.setAlertBox({
            open: true,
            error: true,
            msg: "Please select a valid JPG or PNG image file.",
          });

          
        }
      }

      setIsSelectedFiles(true);
      setFiles(imgArr);
      console.log(imgArr);
      postData(apiEndPoint, formdata).then((res) => {
        
      })
    } catch (error) {
      console.log(error);
    }

    
  };

  useEffect(() => {
    if(!imgFiles) return
    let tmp = []
    for(let i=0; i<imgFiles.length; i++) {
      tmp.push(URL.createObjectURL(imgFiles[i]))
    }

    const objectURLs = tmp;
    setPreViewImg(objectURLs);

    // free memory
    for(let i=0; i<objectURLs.length; i++) {
      return() => {
        URL.revokeObjectURL(objectURLs[i])
      }
    }
  },[imgFiles])



  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product Edit</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<FaHome fontSize="small" />}
            />
            <StyledBreadcrumb
              label="Products"
              component="a"
              href="/products"
              deleteIcon={<MdExpandMore />}
            />
            <StyledBreadcrumb
              label="Product Edit"
              deleteIcon={<MdExpandMore />}
            />
          </Breadcrumbs>
        </div>

        <form className="form" onSubmit={editProduct}>
          <div className="row">
            <div className="col-md-12">
              <div className="card p-4 mt-0">
                <h5 class="mb-4">Basic Information</h5>
                <div class="form-group">
                  <h6>PRODUCT NAME</h6>
                  <input value={formFields.name} type="text" name="name" onChange={inputChange} />
                </div>

                <div class="form-group">
                  <h6>DESCRIPTION</h6>
                  <textarea
                    value={formFields.description}
                    rows="5"
                    name="description"
                    onChange={inputChange}
                    cols="10"
                  ></textarea>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      {
                        categoryVal !== "" && (
                          <FormControl
                        // size="small"
                        className="w-100"
                        sx={{ m: 0, minWidth: 120 }}
                      >
                        <Select
                          name="category"
                          value={categoryVal}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {cateData?.categoryList?.length !== 0 &&
                            cateData?.categoryList?.map((cate, index) => {
                              return (
                                <MenuItem
                                  className="text-capitalize"
                                  value={cate.id}
                                >
                                  {cate.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                        )
                      }
                      
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>SUB CATEGORY</h6>
                      <FormControl
                        // size="small"
                        className="w-100"
                        sx={{ m: 0, minWidth: 120 }}
                      >
                        <Select
                          value={categorySubItem}
                          onChange={handleSubChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"JEANS"}>JEANS</MenuItem>
                          <MenuItem value={"SHIRTS"}>SHIRTS</MenuItem>
                          <MenuItem value={"BAGGY"}>BAGGY</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>PRICE</h6>
                      <input type="text" value={formFields.price} onChange={inputChange} name="price" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>OLD PRICE </h6>
                      <input type="text" value={formFields.oldPrice} name="oldPrice" onChange={inputChange} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>IS FEATURED?</h6>
                      <FormControl
                        // size="small"
                        className="w-100"
                        sx={{ m: 0, minWidth: 120 }}
                      >
                        <Select
                          name="isFeatured"
                          value={isFeaturedValue}
                          onChange={handleChangeisFeaturedValue}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={true}>True</MenuItem>
                          <MenuItem value={false}>False</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT STOCK </h6>
                      <input
                      value={formFields.countInStock}
                        type="text"
                        name="countInStock"
                        onChange={inputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div class="form-group">
                      <h6>BRAND</h6>
                      <input type="text" value={formFields.brand} name="brand" onChange={inputChange} />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <h6>DISCOUNT</h6>
                      <input type="text" name="discount" />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <h6>PRODUCT RAMS</h6>
                      <FormControl
                        // size="small"
                        className="w-100"
                        sx={{ m: 0, minWidth: 120 }}
                      >
                        <Select
                          value={ramProduct}
                          onChange={handleRamChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"4G"}>4G</MenuItem>
                          <MenuItem value={"8G"}>8G</MenuItem>
                          <MenuItem value={"16G"}>16G</MenuItem>
                          <MenuItem value={"32G"}>32G</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <h6>RATING</h6>
                      <Rating
                        name="rating"
                        value={valueRating}
                        onChange={(event, newValue) => {
                          setValueRating(newValue);
                          setFormFields({
                            ...formFields,
                            [event.target.name]: event.target.value,
                          })
                        }}
                      />
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          <div className="card p-4 mt-0">
            <div className="imagesUploadSec">
              <h5 className="mb-4">Media and Published</h5>
              <div className="imgUploadBox d-flex align-items-center">
              {
                      previewImg?.length !==0 && previewImg?.map((image, index) => {
                        return (
                          <div className="uploadBox" key={index}>
                          {
                            isSelectedFiles === true ? 
                            <img src={`${image}`} className="w-100" />
                            :
                            <img src={`${context.baseUrl}/uploads/productsUploaded/${image}`} className="w-100" />
                          }
                          
                          
                          </div>
                        );
                      })
                    }

                <div className="uploadBox">
                  <input type="file" multiple onChange={(e) =>
                          onChangeFile(e, "/api/products/upload")
                        } name="images" />
                         
                  <div className="info">
                    <PiImages />
                    <h5>image upload</h5>
                  </div>
                </div>

                <div className="uploadBox">
                  <input type="file" multiple="" name="images" />
                  <div className="info">
                    <PiImages />
                    <h5>image upload</h5>
                  </div>
                </div>


              </div>

              <br />
              <Button type="submit" className="btn-blue btn-lg btn-big w-100">
                <FaCloudUploadAlt />
                &nbsp;PUBLISH AND VIEW{" "}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
