import axios from 'axios';

axios.defaults.baseURL =
  'https://64983b359543ce0f49e1c71a.mockapi.io/contacts/';

export const getContacts = async () => {
  const { data } = await axios.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await axios.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/${id}`);
  return data;
};
