import axios from "axios"

const baseURL = "http://3.82.165.166:80/api/v1"

export const isAuthenticated = () => {
  return window.localStorage.getItem("authorizationToken") !== null
}

export const token = () => {
  return window.localStorage.getItem("authorizationToken")
}

export const requestTokenByEmail = async (email) => {
  let res = await axios.post(`${baseURL}/code-validation/send-invite`, email)
  console.log(res, 'aqui')
  window.localStorage.setItem("authorizationToken", res.data.userInfo.token)
  window.localStorage.setItem("email", res.data.token)
  return (
    res.status === 201 && {
      data: res.data.token,
      message: "Login efetuado com sucesso",
    }
  );
}

export const validateToken = async (token) => {
  let res = await axios.put(`${baseURL}/code-validation/validate`, token);
  return res.data;
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