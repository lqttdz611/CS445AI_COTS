import React, { useState } from "react";
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
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from "@mui/material/Rating";
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

const ProductUpload = () => {
  // for rating controlled
  const [value, setValue] = useState(2);

  //
  const [categoryItem, setCategoryItem] = useState("");
  const [categorySubItem, setCategorySubItem] = useState("");
  const [featuredSelect, setFeaturedSelect] = useState("");
  const [ramProduct, setRamProduct] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setCategoryItem(event.target.value);
  };
  const handleSubChange = (event: SelectChangeEvent) => {
    setCategorySubItem(event.target.value);
  };
  const handleFeatureChange = (event: SelectChangeEvent) => {
    setFeaturedSelect(event.target.value);
  };
  const handleRamChange = (event: SelectChangeEvent) => {
    setRamProduct(event.target.value);
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product Upload</h5>
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
              label="Product Upload"
              deleteIcon={<MdExpandMore />}
            />
          </Breadcrumbs>
        </div>

        <div className="form">
          <div className="row">
            <div className="col-md-12">
              <div className="card p-4 mt-0">
                <h5 class="mb-4">Basic Information</h5>
                <div class="form-group">
                  <h6>PRODUCT NAME</h6>
                  <input type="text" name="name" />
                </div>

                <div class="form-group">
                  <h6>DESCRIPTION</h6>
                  <textarea rows="5" cols="10"></textarea>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <FormControl
                        // size="small"
                        className="w-100"
                        sx={{ m: 0, minWidth: 120 }}
                      >
                        <Select
                          value={categoryItem}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"MEN"}>Men</MenuItem>
                          <MenuItem value={"WOMEN"}>Women</MenuItem>
                          <MenuItem value={"KIDS"}>Kids</MenuItem>
                        </Select>
                      </FormControl>
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
                      <h6>CATEGORY</h6>
                      <input type="text" name="price" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>OLD PRICE </h6>
                      <input type="text" name="oldPrice" />
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
                          value={featuredSelect}
                          onChange={handleFeatureChange}
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
                      <input type="text" name="oldPrice" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div class="form-group">
                      <h6>BRAND</h6>
                      <input type="text" name="brand" />
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
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
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
                <div className="uploadBox">
                  <span className="remove">
                    <IoMdRemove />
                  </span>
                  <div className="box">
                    {/* <span className=" lazy-load-image-background blur lazy-load-image-loaded">
                      <img className="w=100" src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"></img>
                    </span> */}
                    <LazyLoadImage
                     alt={"image"}
                     effect="blur"
                     className='w-100'
                     src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                    />
                  </div>
                </div>

                <div className="uploadBox">
                  <input type="file" multiple="" name="images" />
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

                <div className="uploadBox">
                  <input type="file" multiple="" name="images" />
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
              <Button type="button" className="btn-blue btn-lg btn-big w-100">
                <FaCloudUploadAlt />
                &nbsp;PUBLISH AND VIEW{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductUpload;
