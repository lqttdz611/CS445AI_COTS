import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState, useRef } from "react";
import { Breadcrumbs, Button, colors } from "@mui/material";
import { FaHome } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import Chip from "@mui/material/Chip";
import { emphasize, styled } from "@mui/material/styles";
import { FaCloudUploadAlt } from "react-icons/fa";
import { postData } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import { MyContext } from "../../App";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarProvider, useSnackbar } from "notistack";
import LoadingBar from "react-top-loading-bar";
import { PiImages } from "react-icons/pi";

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
  const [previewImg, setPreViewImg] = useState();
  const [files, setFiles] = useState([]);
  const [imgFiles, setImgFiles] = useState();
  const [isSelectedFiles, setIsSelectedFiles] = useState(false);
  const formdata = new FormData();


const onChangeFile = async (e, apiEndPoint) => {
    try {
      const imgArr = [];
      const files = e.target.files;

      setImgFiles(e.target.files);

      for (var i = 0; i < files.length; i++) {
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

          setFiles(imgArr);
          context.setAlertBox({
            open: true,
            error: false,
            msg: "image uploaded",
          });

          setIsSelectedFiles(true);
          console.log(imgArr);
          postData(apiEndPoint,formdata).then((res) => {
            context.setAlertBox({
              open: true,
              error: false,
              msg: "image uploaded",
            })
          })
        } else {
          context.setAlertBox({
            open: true,
            error: true,
            msg: "Please select a valid JPG or PNG image file.",
          });

          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }

    
  };
  useEffect(() => {
    if (!imgFiles) return;
    let tmp = [];
    for (let i = 0; i < imgFiles.length; i++) {
      tmp.push(URL.createObjectURL(imgFiles[i]));
    }

    const objectURLs = tmp;
    setPreViewImg(objectURLs);

    // free memory
    for (let i = 0; i < objectURLs.length; i++) {
      return () => {
        URL.revokeObjectURL(objectURLs[i]);
      };
    }
  }, [imgFiles]);
  // for notification bottom left corner
  const { enqueueSnackbar } = useSnackbar();
  const [messageNoti, setMessageNoti] = useState("");
  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(messageNoti, { variant });
  };
  const context = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    description: "",
  });



  // submit form
  const addCategory = (e) => {
    e.preventDefault();
    formdata.append("name", formFields.name);
    formdata.append("description", formFields.description);

    console.log(formFields);
    if (formFields.name !== "" && formFields.description !== "" && isSelectedFiles !== false) {
      setIsLoading(true);
      postData(`/api/category/create`, formFields).then((res) => {
        setIsLoading(false);
        history("/categories");
        console.log("siuu");
      });
    } else {
      context.setAlertBox({
        msg: "Please fill all the details",
        color: "success",
        open: true,
      });
      return false;
    }
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
      <SnackbarProvider maxSnack={3}>
        <div className="right-content w-100">
          <div className="card shadow border-0 w-100 flex-row p-4">
            <h5 className="mb-0">Category Upload</h5>
            <Breadcrumbs
              aria-label="breadcrumb"
              className="ml-auto breadcrumbs_"
            >
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
              <div className="col-md-9">
                <div className="card p-4 mt-0">
                  <h5 class="mb-4">Basic Information</h5>

                  <div class="form-group">
                    <h6>CATEGORY NAME</h6>
                    <input type="text" name="name" onChange={changeInput} />
                  </div>

                  <div class="form-group">
                    <h6>CATEGORY DESCRIPTION</h6>
                    <input type="text" name="description" onChange={changeInput} />
                  </div>
                  <br />

                  <div className="imagesUploadSec">
                    <h5 className="mb-4">Media and Published</h5>
                    <div className="imgUploadBox d-flex align-items-center">
                      {previewImg?.length !== 0 &&
                        previewImg?.map((image, index) => {
                          return (
                            <div className="uploadBox" key={index}>
                              <img src={image} className="w-100" />
                            </div>
                          );
                        })}

                      <div className="uploadBox">
                        <input
                          type="file"
                          onChange={(e) =>
                            onChangeFile(e, "/api/category/upload")
                          }
                          name="images"
                        />

                        <div className="info">
                          <PiImages />
                          <h5>image upload</h5>
                        </div>
                      </div>

                      <div className="uploadBox">
                        <input type="file" name="images" />
                        <div className="info">
                          <PiImages />
                          <h5>image upload</h5>
                        </div>
                      </div>
                    </div>

                    <br />
                    <Button
                      type="submit"
                      className="btn-blue btn-lg btn-big w-100"
                    >
                      <FaCloudUploadAlt />
                      &nbsp;
                      {isLoading === true ? (
                        <CircularProgress color="inherit" className="loader" />
                      ) : (
                        "PUBLISH AND VIEW"
                      )}{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SnackbarProvider>
    </>
  );
};

export default CategoryUpload;
