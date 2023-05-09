import React, { useState, useRef, useEffect } from 'react';
import play from '../assets/icons/play.svg';
import { BsPauseFill } from 'react-icons/bs';

export const Audios = () => {
	const [audio, setAudio] = useState(
		`https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3	`,
	);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

	// const getAudio = () => {
	// 	setAudio(``);
	// };

	const handleEnded = () => {
		setIsPlaying(false); // обновление состояния после окончания воспроизведения
	};
	const handleButtonClick = async () => {
		console.log(audioRef.current);
		if (isPlaying) {
			audioRef.current.pause(); // приостановка воспроизведения аудио
			setIsPlaying(false); // обновление состояния
		} else {
			audioRef.current.play(); // воспроизведение аудио
			setIsPlaying(true); // обновление состояния
		}
	};

	useEffect(() => {}, []);

	return (
		<div>
			<button onClick={() => handleButtonClick()} className='bar__copy__button'>
				{isPlaying ? (
					<BsPauseFill size={'20px'} color='#03AA77' />
				) : (
					<img src={play} alt='playbutton' width={'15px'} />
				)}
			</button>
			<audio ref={audioRef} src={audio} onEnded={handleEnded} />
		</div>
	);
};
