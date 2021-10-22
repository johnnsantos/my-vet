import axios from "axios"

const baseURL = "api"

export const token = () => {
  return window.localStorage.getItem("authorizationToken")
}

export const requestTokenByEmail = async (email) => {
  try {
    let res = await axios.post(`${baseURL}/login`, email)
    window.localStorage.setItem("authorizationToken", res.data.userInfo.token)
    window.localStorage.setItem("email", res.data.userInfo.email)
    return (
      res.status === 201 && {
        data: res.data,
        message: "Login efetuado com sucesso",
      }
    );
  } catch (error) {
    return { message: "Houve um erro com o login" }
  }
};

export const requestEditProfile = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
    },
  };
  let res = await axios.put(`${baseURL}/profile`, data, config);
  return res.data;
};

export const createPet = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
    },
  };
  let res = await axios.post(`${baseURL}/pets`, data, config);
  return res;
};

export const requestEditPet = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
    },
  };
  let res = await axios.put(`${baseURL}/pets/${id}`, data, config);
  return res;
};