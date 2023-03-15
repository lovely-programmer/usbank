import axios from "axios";

// const API_URL = "http://localhost:5000/api/users/";

const API_URL = "https://bank-app-backend-ofp9.onrender.com/api/users/";

// @Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// @Login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// @Login Admin
const loginAdmin = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("adminUser", JSON.stringify(response.data));
  }

  return response.data;
};

// @Get Login User detail
const getMe = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// @Get all User detail
const getAllUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "allusers", config);

  return response.data;
};

// @Get restricted User detail
const restrictedUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "restrictedUser", config);

  return response.data;
};

// @Restrict a user
const restrict = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    numberOfRestrictions: userData.numberOfRestriction,
  };

  const response = await axios.put(
    API_URL + "restrict/" + userData.id,
    data,
    config
  );

  return response.data;
};

// @Get Code
// @Restrict a user
const getCode = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    id: userData.id,
    codePrice: userData.codePrice,
  };

  const response = await axios.put(
    API_URL + "getCode/" + userData.codeType,
    data,
    config
  );

  return response.data;
};

// update Tcc
const updateTcc = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "updateTcc" + id, config);

  return response.data;
};

const updateImf = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "updateImf" + id, config);

  return response.data;
};

const updateTax = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "updateTax" + id, config);

  return response.data;
};

const editUser = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    name: userData.name,
    account_type: userData.account_type,
    balance: userData.balance,
  };

  const response = await axios.put(API_URL + userData.id, data, config);

  return response.data;
};

const deleteUser = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + "user/" + id, config);

  return response.data;
};

const authService = {
  register,
  login,
  loginAdmin,
  getMe,
  getAllUsers,
  editUser,
  deleteUser,
  restrictedUsers,
  restrict,
  getCode,
  updateTcc,
  updateImf,
  updateTax,
};

export default authService;
