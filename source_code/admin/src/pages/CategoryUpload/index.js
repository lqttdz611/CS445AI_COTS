import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Breadcrumbs, Button } from "@mui/material";
import { FaHome } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import Chip from "@mui/material/Chip";
import { emphasize, styled } from "@mui/material/styles";
import { FaCloudUploadAlt } from "react-icons/fa";
import { postData } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";

// for breadcrumbs
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

const CategoryUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    description: "",
  });

  const addImageURL = (e) => {
    const arr = [];
    arr.push(e.target.value);
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: arr,
    }));
  };

  // submit form
  const addCategory = (e) => {
    e.preventDefault();
    console.log(formFields);
    setIsLoading(true);
    postData("/api/category/create/", formFields).then((res) => {
      setIsLoading(false);
      history("/categories");
    });
    // fetchDataFromAPI("/api/category").then(res => {
    //   console.log(res)
    // })
  };

  const changeInput = (e) => {
    e.preventDefault();
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Category Upload</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<FaHome fontSize="small" />}
            />
            <StyledBreadcrumb
              label="Categories"
              component="a"
              href="/products"
              deleteIcon={<MdExpandMore />}
            />
            <StyledBreadcrumb
              label="Category Upload"
              deleteIcon={<MdExpandMore />}
            />
          </Breadcrumbs>
        </div>

        <form className="form cateForm" onSubmit={addCategory}>
          <div className="row">
            <div className="col-md-12">
              <div className="card p-4 mt-0">
                <h5 class="mb-4">Basic Information</h5>

                <div class="form-group">
                  <h6>CATEGORY NAME</h6>
                  <input type="text" name="name" onChange={changeInput} />
                </div>

                <div class="form-group">
                  <h6>CATEGORY IMAGE</h6>
                  <input type="text" name="images" onChange={addImageURL} />
                </div>
                <div class="form-group">
                  <h6>CATEGORY DESCRIPTION</h6>
                  <input type="text" name="description" onChange={changeInput} />
                </div>
                <br />
                <Button type="submit" className="btn-blue btn-lg btn-big w-100">
                  <FaCloudUploadAlt />
                  &nbsp;{" "}
                  {isLoading === true ? (
                    <CircularProgress color="inherit" className="ml-3 loader" />
                  ) : (
                    "PUBLISH AND VIEW"
                  )}{" "}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryUpload;
