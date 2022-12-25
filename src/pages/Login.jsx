import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

import styles from './pages.module.css';

export const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		loginPassword: '',
	});

	const { email, loginPassword } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth);

	useEffect(() => {
		if (isError) console.error(message);

		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isSuccess, isError, message, navigate, dispatch]);

	const handleChange = event => {
		const { name, value } = event.target;

		setFormData(prevData => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};

	const handleRegisterUser = () => {
		navigate('/register');
	};

	const handleSubmit = event => {
		event.preventDefault();

		console.log(`Email: ${email}\nPassword: ${loginPassword}`);

		const userData = {
			email,
			loginPassword,
		};

		dispatch(login(userData));
	};

	if (isLoading) return <Spinner />;

	return (
		<div className={styles.container}>
			<section className={styles.heading}>
				<h1>Login</h1>
			</section>
			<section>
				<form onSubmit={handleSubmit}>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						placeholder='Email'
						onChange={handleChange}
					/>
					<input
						type='password'
						name='loginPassword'
						id='loginPassword'
						value={loginPassword}
						placeholder='Password'
						autoComplete='password'
						onChange={handleChange}
					/>
				</form>
				<button className='btn-link' onClick={handleRegisterUser}>
					not yet registered?
				</button>
				<br />
				<br />
				<button type='button' className='button'>
					Login
				</button>
			</section>
		</div>
	);
};
