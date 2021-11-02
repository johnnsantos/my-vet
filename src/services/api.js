import axios from "axios"

const baseURL = "http://3.82.165.166/api/v1"

export const isAuthenticated = () => {
  return window.localStorage.getItem("accessToken") !== null
}

export const token = () => {
  return window.localStorage.getItem("accessToken")
}

export const requestTokenByEmail = async (email) => {
  return await axios.post(`${baseURL}/code-validation/send-invite`, email)
}

export const validateEmailToken = async (token) => {
  return await axios.post(`${baseURL}/code-validation/validate`, { token: token })
}

export const retrieveAnimals = async (accessToken) => {
  return await axios.get(`${baseURL}/animal/my-list`, { headers: { Authorization: `Bearer ${accessToken}` } });
}

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