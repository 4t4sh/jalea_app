import axios from 'axios';

export const getUsers = () =>
  axios.get('https://randomuser.me/api/?results=10', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
