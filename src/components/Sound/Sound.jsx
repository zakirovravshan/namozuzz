import React, { useEffect, useState } from 'react';
import '../../components/Theme/Theme.css';
import { AiOutlineSound } from 'react-icons/ai';
import { RiVolumeMuteLine } from 'react-icons/ri';

export const Sound = () => {
	const [isfalse, setIsfalse] = useState(
		localStorage.getItem('sound') === 'false',
	);
	function toggleTheme() {
		const newTheme = isfalse ? 'true' : 'false';
		setIsfalse(!isfalse);
		localStorage.setItem('sound', newTheme);
	}
	useEffect(() => {
		const body = document.querySelector('body');
		if (isfalse) {
			body.classList.add('false');
			localStorage.setItem('sound', 'false');
		} else {
			body.classList.remove('false');
			localStorage.setItem('sound', 'true');
		}
	}, [isfalse]);

	return (
		<div>
			<label className='switch'>
				<span className='sun'>
					<AiOutlineSound color="white" />
				</span>
				<span className='moon'>
					<RiVolumeMuteLine  /> 
				</span>
				<input
					onChange={toggleTheme}
					defaultChecked={localStorage.getItem('sound') === 'false'}
					type='checkbox'
					className='input'
				/>
				<span className='slider' />
			</label>
		</div>
	);
};
