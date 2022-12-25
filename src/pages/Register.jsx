import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

import styles from './pages.module.css';

export const Register = () => {
	const [formData, setFormData] = useState({
		userName: '',
		email: '',
		password: '',
		confPassword: '',
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isSuccess, isError, isLoading, message } = useSelector(state => state.auth);

	if (isLoading) return <Spinner />;

	return (
		<>
			<section className={styles.heading}>
				<h2>Welcome to My Travel Book</h2>
				<h3>Join and share your story</h3>
			</section>
			<section className={styles.form}>
				<form>
					<input type='text' name='userName' id='userName' placeholder='Name' />
					<input type='email' name='email' id='email' placeholder='Email' />
					<input type='password' name='password' id='password' placeholder='Password' />
					<div className='input_container'>
						<input
							type='password'
							name='confPassword'
							id='confPassword'
							placeholder='Confirm Password'
						/>
						<i className='fa fa-eye-slash'></i>
					</div>
				</form>
			</section>
		</>
	);
};
