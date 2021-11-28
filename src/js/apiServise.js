import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default {
  getAllTodo() {
    return axios.get(`/todos`);
  },
};
