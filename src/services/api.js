import axios from "axios"

const baseURL = "http://3.82.165.166/api/v1"

export const logoutUser = () => {
  localStorage.clear()
  location.href = '/login'
}

export const isAuthenticated = () => {
  return localStorage.getItem("accessToken") !== null
}

export const token = () => {
  return localStorage.getItem("accessToken")
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

export const retrieveUserInfo = async (accessToken) => {
  return await axios.get(`${baseURL}/profile/detail`, { headers: { Authorization: `Bearer ${accessToken}` } });
}

export const updateUserInfo = async (payload, accessToken) => {
  return await axios.post(`${baseURL}/profile/update`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
}


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