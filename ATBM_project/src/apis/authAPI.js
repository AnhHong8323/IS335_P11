import instance from "./apiConfig";
const registerAPI = async (data) => {
  console.log("🚀 ~ registerAPI ~ data:", data);

  //   const response = await instance.post("/user", data);

  //   return response.data;
};
const loginAPI = async (data) => {
  console.log("🚀 ~ loginAPI ~ data:", data);
  const response = await instance.post("/auths/login", data);
  return response.data;
}
export const authAPI = {
  registerAPI,
  loginAPI
};
