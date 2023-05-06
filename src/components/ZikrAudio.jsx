import React, { useState, useRef, useEffect } from 'react';
import play from '../assets/icons/play.svg';
import { BsPauseFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

export const ZikrAudio = ({ mp3 }) => {
	const [audio, setAudio] = useState(mp3);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

	const handleEnded = () => {
		setIsPlaying(false); // обновление состояния после окончания воспроизведения
	};

	// useEffect(() => {
	// 	getAudio(ayahnumber);
	// }, []);

	const handleButtonClick = async () => {
		if (isPlaying) {
			audioRef.current.pause(); // приостановка воспроизведения аудио
			setIsPlaying(false); // обновление состояния
		} else {
			audioRef.current.play(); // воспроизведение аудио
			setIsPlaying(true); // обновление состояния
		}
		console.log(mp3);
	};

	return (
		<div className='play__btn__div'>
			<button
				style={{ margin: '0 auto' }}
				onClick={() => handleButtonClick()}
				className='bar__copy__button'>
				{isPlaying ? (
					<BsPauseFill size={'25px'} color='#fff' />
				) : (
					<FaPlay size={'20px'} color='#fff' />
				)}
			</button>
			<audio ref={audioRef} src={audio} onEnded={handleEnded} />
		</div>
	);
};
