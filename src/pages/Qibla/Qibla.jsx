import React from 'react';
import './Qibla.css';

import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export const Qibla = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className='qibla'>
				<div className='quran'>
					<div className='quran__wrapper'>
						<div className='surah_header'>
							<button className='back__button' onClick={() => navigate(-1)}>
								<BiArrowBack color='white' size={'28px'} />
							</button>
							<p style={{ color: '#fff' }} className='surah__title'>
								Qibla Finder
							</p>
							<p style={{ color: 'transparent' }}>.</p>
						</div>

						<div className='qibla__frame'>
							{/* <iframe
								className='qibla__frame'
								src='https://qiblafinder.withgoogle.com/intl/en/onboarding'
								width='100%'
								height='100%'
								frameBorder={'none'}></iframe> */}
							<iframe
								width='560'
								height='315'
								src='https://www.youtube.com/embed/3loPeQnJKk4'
								title='YouTube video player'
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
