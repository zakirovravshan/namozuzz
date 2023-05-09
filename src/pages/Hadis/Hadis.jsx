import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';

export const Hadis = () => {
    const [random, setRandom] = useState(null);
    const [randomHadith, setRandomHadith] = useState(null);
  
    const getRandomHadith = () => {
      const today = moment().format('YYYYMMDD');
      const seed = parseInt(today);
      const randomNum = Math.floor(Math.random() * (3735 - 2932) + 2932);
  
      axios
        .get(`https://hadeethenc.com/api/v1/hadeeths/one/?language=ru&id=${randomNum}`)
        .then((res) => {
          if (res.status === 200) {
            setRandom(randomNum);
            setRandomHadith(res.data);
            console.log(res.data);
          } else {
            getRandomHadith();
          }
        })
        .catch((error) => console.log(error));
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

					<div className='qibla__frame'>
						{randomHadith ? (
							<div>
								<h4>Заголовок</h4>
								<p>{randomHadith.title}</p>
								<hr />
								<h4>Текст</h4>
								<p>{randomHadith.hadeeth}</p>
								<hr />
								<h4>Объяснение</h4>
								<p>{randomHadith.explanation}</p>
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
