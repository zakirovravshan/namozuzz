import React, { useEffect, useState } from 'react';
import './Theme.css';

export const Theme = () => {
	const [isDark, setIsDark] = useState(
		localStorage.getItem('theme') === 'dark',
	);
	function toggleTheme() {
		const newTheme = isDark ? 'light' : 'dark';
		setIsDark(!isDark);
		localStorage.setItem('theme', newTheme);
	}
	useEffect(() => {
		const body = document.querySelector('body');
		if (isDark) {
			body.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			body.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [isDark]);

	return (
		<div
			>
			<label className='switch'>
				<input
					type='checkbox'
					onChange={toggleTheme}
					defaultChecked={localStorage.getItem('theme') === 'dark'}
				/>
				<span className='slider' />
			</label>
		</div>
	);
};
