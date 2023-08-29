import axios from 'axios';
// const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkmate: () => false,
    checkValue: (x) => x, 
    checkUser: () => {
        const user = { firstName: 'Vamshi' };
        user['lastName'] = 'Hanumanthu';
        return user;
    },
    fetchUser: async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            return res.data;
        } catch (err) {
            throw err; 
        }
    }    
};

export default functions;
