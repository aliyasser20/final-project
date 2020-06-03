import cloudinaryAxios from "../../../axiosInstances/cloudinaryAxios";
import backendAxios from "../../../axiosInstances/backendAxios";

const uploadUrl = "/raw/upload/";

export const saveModelToCloude = files => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("tags", "rocket");
  formData.append("upload_preset", process.env.REACT_APP_MODEL_UPLOAD_PRESET); // Replace the preset name with your own
  formData.append("api_key", process.env.REACT_APP_API_KEY); // Replace API key with your own Cloudinary key
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return cloudinaryAxios
    .post(uploadUrl, formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    })
    .then(res => res.data.secure_url);
};

export const createNewProject = projectData =>
  backendAxios
    .post("/api/projects", projectData)
    .then(data => data.data)
    .catch(err => console.log(err));
