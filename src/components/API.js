import axios from 'axios';

axios.defaults.baseURL =
  'https://64958b71b08e17c9179245bf.mockapi.io/contacts/';

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
