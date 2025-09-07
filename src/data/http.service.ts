import axios from 'axios';

export const getUsers = async() => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return users.data;
}