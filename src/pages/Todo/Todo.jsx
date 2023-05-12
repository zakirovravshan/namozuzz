import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './Todo.css';

export const Todo = () => {
	const navigate = useNavigate();
	return (
		<div className='qibla'>
			<div className='quran'>
				<div className='quran__wrapper'>
					<div className='surah_header'>
						<button className='back__button' onClick={() => navigate(-1)}>
							<BiArrowBack color='white' size={'28px'} />
						</button>
						<p style={{ color: '#fff' }} className='surah__title'>
							Kunlik hadis
						</p>
						<p style={{ color: 'transparent' }}>.</p>
					</div>

					<div
						style={{
							overflow: 'auto',
							height: '100VH',
							padding: '20px',
							paddingTop: '50px',
						}}
						className='qibla__frame'>
						<div style={{ width: '100%', borderRadius: '30px' }} id='checklist'>
							<input
								defaultChecked
								defaultValue='{1}'
								name='r'
								type='checkbox'
								id='{1}'
							/>
							<label htmlFor='{01}'>Bread</label>
							<input defaultValue='{2}' name='r' type='checkbox' id='{02}' />
							<label htmlFor='{02}'>Cheese</label>
							<input defaultValue='{3}' name='r' type='checkbox' id='{03}' />
							<label htmlFor='{03}'>Coffee</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
