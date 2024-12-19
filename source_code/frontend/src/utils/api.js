import axios from "axios";


export const fetchDataFromAPI = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:5000" + url);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const fetchAllDataFromAPI = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:5000" + url);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postData = async (url, formData) => {
  const { res } = await axios.post("http://localhost:5000" + url, formData);
  return res;
};

export const editData = async (url, updatedData) => {
  const { res } = await axios.put(`http://localhost:5000${url}`, updatedData);
  return res;
};

export const deleteData = async (url) => {
  const {res} = await axios.delete("http://localhost:5000" +url);
  return res
}

export const uploadImage = async (url, formData) => {
  const { res } = await axios.post(`http://localhost:5000${url}` , formData)
  return res;
}

export const deleteImages = async (url,image ) => {
  const { res } = await axios.delete(`http://localhost:5000${url}`,image);
  return res;
}