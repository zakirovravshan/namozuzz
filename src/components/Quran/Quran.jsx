import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Quran.css';
import { motion } from 'framer-motion';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back.svg';
import { BiSearchAlt } from 'react-icons/bi';
import { BiArrowBack } from 'react-icons/bi';
import { Search } from '../Search/Search';

export const Quran = () => {
	const [randomNumber, setRandomNumber] = useState(
		Math.floor(Math.random() * 6226) + 1,
	);

	const [quran, setQuran] = useState({});
	const [surah, setSurah] = useState({});
	const [all, setAll] = useState({});
	

	// const getQuran = (number) => {
	// 	axios
	// 		.get(
	// 			`https://api.alquran.cloud/v1/ayah/${number}/editions/quran-madina,uz.sodik,ru.kuliev`,
	// 		)
	// 		.then((res) => {
	// 			setQuran(res.data.data);
	// 		})
	// 		.catch((error) => console.log(error));
	// };
	// const generateRandomNumber = () => {
	// 	const newRandomNumber = Math.floor(Math.random() * 6226) + 1;
	// 	setRandomNumber(newRandomNumber);
	// };

	const getSurah = () => {
		axios
			.get('https://api.alquran.cloud/v1/surah')
			.then((res) => {
				setSurah(res.data.data);
				setAll(res.data.data);
			})
			.catch((error) => console.log(error));
	};

	const filterSurah = (evt) => {
		console.log(evt.target.value);
		const filteredSurahs = surah.filter(
			(surah) =>
				surah.name.toLowerCase().includes(evt.target.value.toLowerCase()) ||
				surah.englishName
					.toLowerCase()
					.includes(evt.target.value.toLowerCase()) ||
				surah.englishNameTranslation
					.toLowerCase()
					.includes(evt.target.value.toLowerCase()),
		);
		if (evt.target.value.length > 0) {
			setSurah(filteredSurahs);
		} else {
			setSurah(all);
		}
	};

	useEffect(() => {
		getSurah();
	}, []);
	const navigate = useNavigate();

	return (
		<div className='quran'>
			<div className='quran__wrapper'>
				<div className='surah_header'>
					<button className='back__button' onClick={() => navigate(-1)}>
						<BiArrowBack color='white' size={'28px'} />
					</button>
					<p style={{ color: '#fff' }} className='surah__title'>
						Al-Quran
					</p>
					<div className='input-container'>
						<input
							placeholder='Search Sura...'
							className='input'
							name='text'
							type='text'
							onChange={(e) => filterSurah(e)}
						/>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							className='icon'>
							<g strokeWidth={0} id='SVGRepo_bgCarrier' />
							<g
								strokeLinejoin='round'
								strokeLinecap='round'
								id='SVGRepo_tracerCarrier'
							/>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<rect fill='white' />{' '}
								<path
									d='M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z'
									clipRule='evenodd'
									fillRule='evenodd'
								/>{' '}
							</g>
						</svg>
					</div>
				</div>

				<ul className='quran__list'>
					<li className='quran__img'>
						<div style={{ display: 'flex', marginBottom: '20px' }}>
							<p className='surah__number'>{1}</p>
							<p className='quran__img__title'>Al-Fatiha</p>
						</div>
						<p className='text  ' style={{ marginBottom: '10px' }}>
							Last Read
						</p>
						<p className='surah__rel'>20 Apr 2023</p>
					</li>
					{surah.length
						? surah.map((el) => (
								<Link
									onClick={(evt) => {
										console.log(evt.target.matches('.quran__item'));
									}}
									key={el.number}
									className='quran__item__link'
									to={`/quran/surah/${el.number}`}>
									<motion.li
										initial={{ opacity: 0, scale: 0.5 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 1,
											delay: 0.1,
											ease: [0, 1, 0.2, 1.01],
										}}
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
										}}
										key={el.number}
										className='quran__item'>
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<p className='surah__number'>{el.number}</p>
											<div>
												<p className='surah__name__en'>{el.englishName}</p>
												<p className='surah__rel'>{el.revelationType}</p>
											</div>
										</div>
										<p className='surah__name'>{el.name}</p>
									</motion.li>
								</Link>
						  ))
						: ''}
				</ul>
			</div>
		</div>
	);
};
