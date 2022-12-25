import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Book, Login, Landing, Register, About, Contact } from './pages/index';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Book />} />
				<Route path='/landing' element={<Landing />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
