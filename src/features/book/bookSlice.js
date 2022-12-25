import { ApiLevel } from '@testing-library/user-event/dist/types/utils';
import axios from 'axios';

const API_URL = './api/book/';

// Create a new book
const createBook = async (data, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(API_URL, data, config);
	return response.data;
};

// Get book
const getBook = async token => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL, config);
	return response.data;
};

// Update book
const updateBook = async (data, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.put(API_URL + data._id, data, config);
	return response.data;
};

// Delete book
const deleteBook = async (id, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(API_URL + id, config);
	return response.data;
};
