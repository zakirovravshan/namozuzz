import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { color } from 'framer-motion';

export const Hadis = () => {
	const [random, setRandom] = useState(null);
	const [randomHadith, setRandomHadith] = useState(null);

	const getRandomHadith = () => {
		const today = moment().format('YYYYMMDD');
		const seed = parseInt(today);
		const randomNum = Math.floor(Math.random() * (11000 - 2932) + 2932);

		axios
			.get(
				`https://hadeethenc.com/api/v1/hadeeths/one/?language=ru&id=${randomNum}`,
			)
			.then((res) => {
				if (res.status === 200) {
					setRandom(randomNum);
					setRandomHadith(res.data);
					// console.log(res.data);
				}
			})
			.catch((error) => {
				if (error.response.status) {
					getRandomHadith();
				}
			});
	};

	useEffect(() => {
		getRandomHadith();
	}, []);
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
						{randomHadith ? (
							<div>
								<h4
									style={{
										color: '#333',
										fontFamily: 'Mulish',
										fontWeight: '700',
										fontSize: '18px',
										textAlign: 'center',
									}}>
									Хадис
								</h4>
								<h4
									style={{
										color: '#333',
										fontFamily: 'Mulish',
										fontWeight: '700',
										fontSize: '18px',
										marginBottom: '20px',
										textAlign: 'center',
									}}>
									{' '}
									{randomHadith.attribution}
								</h4>
								<p
									style={{
										position: 'absolute',
										top: '10px',
										right: '10px',
										border: '1px solid #66cea7',
										fontSize: '8px',
										padding: '5px',
										borderRadius: '10px',
										color: '#66cea7',
									}}>
									{randomHadith.grade}
								</p>
								<p
									style={{
										color: '#cc9e5e',
										paddingBottom: '20px',
										fontFamily: 'Mulish',
										textAlign: 'justify',
										marginBottom: '20px',
										borderBottom: '2px dotted #66cea7',
									}}>
									{randomHadith.hadeeth}
								</p>

								<h4
									style={{
										color: '#333',
										fontFamily: 'Mulish',
										fontWeight: '700',
										fontSize: '18px',
										marginBottom: '20px',
										textAlign: 'center',
									}}>
									{' '}
									Объяснение
								</h4>
								<p
									style={{
										color: '#777',
										fontFamily: 'Mulish',
										textAlign: 'justify',
										marginBottom: '210px',
									}}>
									{randomHadith.explanation}
								</p>
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
