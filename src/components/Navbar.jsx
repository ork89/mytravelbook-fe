import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import styles from './components.module.css';

export const Navbar = () => {
	return (
		<nav>
			<img src={Logo} className={styles.navbar_logo} alt='logo image' />
			<div className={styles.heading}>
				<h1 className={styles.headline}>My Travel Book</h1>
				<h5 className={styles.second_headline}>Your trip down memory lane</h5>
			</div>
			<div className={styles.top_navigation}>
				<ul className={styles.links}>
					<li className={styles.link}>
						<Link to='/'>Home</Link>
					</li>
					<li className={styles.link}>
						<Link to='/about'>About</Link>
					</li>
					<li className={styles.link}>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
