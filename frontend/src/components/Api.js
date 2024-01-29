import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/'; // Replace with your actual API base URL

export const fetchUserData = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}users/${userId}/`); // Adjust the endpoint as necessary
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Re-throw the error if you want to handle it in the component
    }
};

export const fetchPostData = async (postId) => {
    try {
        const response = await axios.get(`${BASE_URL}posts/${postId}/`); // Adjust the endpoint as necessary
        return response.data;
    } catch (error) {
        console.error('Error fetching post data:', error);
        throw error; // Re-throw the error if you want to handle it in the component
    }
};