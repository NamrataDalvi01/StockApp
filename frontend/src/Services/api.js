import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getStock = async (symbol) => {
  const response = await api.get(`/stock/${symbol}`);
  return response.data;
};

export const getChart = async (symbol) => {
  const response = await api.get(`/chart/${symbol}`);
  return response.data;
};

export default api;