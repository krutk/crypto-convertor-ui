import axios from 'axios';

const API_BASE_URL = 'https://crypto-convertor-ca2513a84157.herokuapp.com/api';

export const getCryptoList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cryptos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto list:', error);
    throw error;
  }
};

export const convertAmount = async (sourceCrypto, amount, targetCurrency) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/convert?sourceCrypto=${sourceCrypto}&amount=${amount}&targetCurrency=${targetCurrency}`
    );
    return response.data.convertedAmount;
  } catch (error) {
    console.error('Error converting amount:', error);
    throw error;
  }
};
