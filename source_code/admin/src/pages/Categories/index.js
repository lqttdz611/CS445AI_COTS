import { Breadcrumbs, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import Chip from "@mui/material/Chip";
import { emphasize, styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Pagination from "@mui/material/Pagination";

import { deleteData, editData, fetchDataFromAPI } from "../../utils/api";

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

const Categories = () => {
  const [page, setPage] = useState(1);

  const [cateData, setCateData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchDataFromAPI("/api/category").then((res) => {
      console.log(res);
      setCateData(res);
      
    });
  }, []);

  //for edit category
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  // change input in form (edit category)
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    description: "",
  });

  const changeInput = (e) => {
    e.preventDefault();
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const addImageURL = (e) => {
    const arr = [];
    arr.push(e.target.value);
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: arr,
    }));
  };

  // open button and set value for input form
  const editCategory = (id) => {
    setFormFields({
      name: "",
      images: "",
      description: "",
    });
    setOpen(true);

    setEditId(id);

    fetchDataFromAPI(`/api/category/${id}`).then((res) => {
      setFormFields({
        name: res.name,
        images: res.images,
        description: res.description,
      });
      console.log(res);
    });
  };

  // change value by using from API
  const updateValueCategory = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await editData(`/api/category/${editId}`, formFields);
      const newData = await fetchDataFromAPI("/api/category");
      setCateData(newData);
      setOpen(false);
    } catch (error) {
      console.error("Error updating category:", error);
      // Optionally show error to user
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteCate = (id) => {
    deleteData(`/api/category/${id}`).then((res) => {
      fetchDataFromAPI("/api/category").then((res) => {
        setCateData(res);
      });
    });
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow bordoer-0 w-100 flex-row p-4">
          <h5 className="mb-0">Category List</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<FaHome fontSize="small" />}
            />
            <StyledBreadcrumb
              label="Categories"
              deleteIcon={<MdExpandMore />}
            />
          </Breadcrumbs>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <div className="table-responsive mt-3">
            <table className="table table-bordered table-striped v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "100px" }}>IMAGE</th>
                  <th>CATEGORY</th>
                  <th>DESCRIPTION</th>

                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {cateData?.length !== 0 &&
                  cateData?.map((value, index) => {
                    return (
                      <tr>
                        <td>#{index + 1}</td>
                        <td>
                          <div className="d-flex align-items-center productBox">
                            <div className="imgWrapper">
                              <div className="img card shadow m-0">
                                <img
                                  src={`${value.images}`}
                                  alt="product test"
                                  className="w-100"
                                ></img>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td>{value.name} </td>
                        <td>
                          
                          {value.description}
                        </td>

                        <td>
                          <div className="actions d-flex align-items-center">
                            <Button
                              className="edit "
                              onClick={() => editCategory(value.id)}
                            >
                              <FaEdit />
                            </Button>

                            <Button
                              className="delete"
                              onClick={() => deleteCate(value.id)}
                            >
                              <MdDeleteForever />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <p>
                Showing <b>{page}</b> of <b>{cateData?.length}</b> results
              </p>

              <Pagination
                className="pagination "
                count={cateData?.length}
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
      <Dialog
        className="editModal"
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        BackdropProps={{
          style: {
            backgroundColor: "transparent", // This removes the black backdrop
          },
        }}
      >
        <DialogTitle> Edit Category</DialogTitle>
        <form>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Category Name"
              type="text"
              fullWidth
              value={formFields.name}
              onChange={changeInput}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="images"
              name="images"
              label="Image Link"
              type="text"
              fullWidth
              value={formFields.images}
              onChange={addImageURL}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              value={formFields.description}
              onChange={changeInput}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel {" "}
            </Button>
            <Button
              type="button"
              onClick={updateValueCategory}
              variant="contained"
            >
              {isLoading === true ? (
                <CircularProgress color="inherit" className="ml-3 loader" />
              ) : (
                "Submit"
              )}{" "}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Categories;
