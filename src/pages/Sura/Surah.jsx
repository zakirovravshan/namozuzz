import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Surah.css';
import bismillah from '../../assets/images/bismillah.svg';
import copy from '../../assets/icons/copy.svg';
import clipboardCopy from 'clipboard-copy';
import { Toaster, toast } from 'react-hot-toast';
import { MdOutlineLanguage } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { Audios } from '../../components/Audios';

export const Surah = () => {
	const { number } = useParams();
	const [modal, setModal] = useState(false);
	const [language, setLanguage] = useState(false);
	const [til, setTil] = useState('ru.kuliev');
	const [surah, setSurah] = useState({});
	const [translation, setTranslation] = useState({});
	const navigate = useNavigate();

	const getSurah = () => {
		axios
			.get(`https://api.alquran.cloud/v1/surah/${number}`)
			.then((res) => {
				setSurah(res.data.data);
			})
			.catch((error) => console.log(error));
	};
	// const handleTranslate = (number) => {
	// 	setModal(true);
	// 	getTranslation(number);
	// };

	const handleLanguage = () => {
		setLanguage(!language);
		if (language) {
			setTil('ru.kuliev');
		} else {
			setTil('uz.sodik');
		}
	};

	const getTranslation = () => {
		axios
			.get(`https://api.alquran.cloud/v1/surah/${number}/${til}`)
			.then((res) => {
				setTranslation(res.data.data.ayahs);
			})
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		getSurah();
		getTranslation();
	}, [til]);

	return (
		<div className='surah__page'>
			{surah ? (
				<div>
					<div className='surah_header'>
						<button className='back__button' onClick={() => navigate(-1)}>
							<BiArrowBack color='#03AA77' size={'28px'} />
						</button>

						<button
							className='bar__copy__button'
							onClick={() => handleLanguage()}>
							<MdOutlineLanguage
								className='lang__icon'
								size={'23px'}
								color='#03AA77'
							/>
							{language ? (
								<p className='text'>UZ</p>
							) : (
								<p className='text'>RU</p>
							)}
						</button>
					</div>
					<div className='surah__img'>
						<div className='surah__img__content'>
							<h2 className='surah__img__title'>{surah.englishName}</h2>
							<p className='surah__img__en'>{surah.englishNameTranslation}</p>
							<span className='line'></span>
							<p className=' surah__img__subtitle '>
								{surah.revelationType} • {surah.numberOfAyahs} oyat
							</p>
							<img className='bismillah' src={bismillah} alt='bismillah' />
						</div>
					</div>
					<div className='surah__list' >
						{surah?.ayahs?.map((el) => (
							<div key={el.number}>
								<div className='ayah__bar'>
									<div className='bar__number'>
										<p className='bar__text'>{el.numberInSurah}</p>
									</div>
									<div
										style={{
											width: '70px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
										}}>
										<Audios ayahnumber={1} />
										<button
											className='bar__copy__button'
											onClick={() => {
												toast.success('Copied');
												clipboardCopy(el.text);
											}}>
											<img src={copy} alt='playbutton' width={'20px'} />
										</button>
									</div>
								</div>
								<p className='bar__ar'>{el.text}</p>
								<p className='bar__tr' style={{ textAlign: 'justify' }}>
									{translation[el.numberInSurah - 1]?.text}
								</p>
							</div>
						))}
					</div>
				</div>
			) : (
				''
			)}
			<Toaster />
		</div>
	);
};
