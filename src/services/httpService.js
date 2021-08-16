import axios from 'axios';
const baseURL = "http://dbaccess.cashvance.com/index.php?query=SELECT%20*%20FROM%20merchant.CATEGORY_ACCOUNTS" //'https://gentle-mesa-34655.herokuapp.com/api/';

// sales data functions 
const getAllData = async () => {
    const response  = await axios.get(`https://gentle-mesa-34655.herokuapp.com/api/sales`);
    return response.data
}

// users 
const getUsers = async () => {
    const response  = await axios.get(`${baseURL}`);
    console.log(response);
    return response.data
}


export default { getAllData,getUsers}