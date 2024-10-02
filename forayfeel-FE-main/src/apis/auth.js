import api from "./axiosMain";

export const registerUser = async (data) => {
  return await api.post("/api/auth/signup", data);
};
export const LoginUser = async (data) => {
  return await api.post("/api/auth/signin", data);
};

export const registerAdmin = async (data) => {
  data.roles = ["admin"];
  return await api.post("/api/auth/signup", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const LoginAdmin = async (data) => {
  return await api.post("/api/auth/signin", data);
};
