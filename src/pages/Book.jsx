import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

export const Book = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, []);

	return <h1>Home</h1>;
};
