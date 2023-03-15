import axios from "axios";

// const API_URL = "http://localhost:5000/api/transaction";

const API_URL = "https://bank-app-backend-ofp9.onrender.com/api/transaction";

const createTransaction = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, data, config);

  return response.data;
};

const getTransactions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const transactionService = {
  createTransaction,
  getTransactions,
};

export default transactionService;
