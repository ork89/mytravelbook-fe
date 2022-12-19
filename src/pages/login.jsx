import { useState, useEffect } from 'react';

export const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		loginPassword: '',
	});

	const handleChange = event => {
		const { name, value } = event.target;

		setFormData(prevData => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
	};

	return (
		<div className='container'>
			<section className='heading'>
				<h1>Login</h1>
			</section>
			<section className='form'>
				<form onSubmit={handleSubmit}>
					<input type='email' name='email' id='email' onChange={handleChange} />
					<input
						type='password'
						name='loginPassword'
						id='loginPassword'
						onChange={handleChange}
					/>
				</form>
			</section>
		</div>
	);
};
