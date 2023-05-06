import React, { useState, useEffect } from 'react';
import moment from 'moment';

const prayerTimes = {
	fajr: '05:30',
	dhuhr: '12:30',
	asr: '15:45',
	maghrib: '18:30',
	isha: '21:00',
};

function Time() {
	const [nextPrayer, setNextPrayer] = useState('fajr');
	const [nextPrayerTime, setNextPrayerTime] = useState(moment());
	const [timeDiff, setTimeDiff] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const { prayer, time, timeDiff } = getNextPrayer(prayerTimes);
			setNextPrayer(prayer);
			setNextPrayerTime(moment(time));
			setTimeDiff(timeDiff);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	function formatTime(date) {
		return date.format('HH:mm');
	}

	function formatTimeDiff(minutes) {
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		return `${hours} ч. ${mins} мин.`;
	}

	const nextPrayerTimeFormatted = formatTime(nextPrayerTime);
	const timeDiffFormatted = formatTimeDiff(timeDiff);

	return (
		<div>
			<p>
				Следующий намаз: {nextPrayer} в {nextPrayerTimeFormatted}
			</p>
			<p>Осталось до намаза: {timeDiffFormatted}</p>
		</div>
	);
}

function getNextPrayer(prayerTimes) {
	const currentTime = moment();
	const prayerTimesArray = Object.entries(prayerTimes);

	// Ищем следующий намаз
	for (let i = 0; i < prayerTimesArray.length; i++) {
		const prayerTime = moment(prayerTimesArray[i][1], 'HH:mm');
		if (prayerTime.isAfter(currentTime)) {
			const timeDiff = prayerTime.diff(currentTime, 'minutes');
			return {
				prayer: prayerTimesArray[i][0],
				time: prayerTime,
				timeDiff: timeDiff,
			};
		}
	}

	// Если текущее время позже времени иша, то следующий намаз - фаджр следующего дня
	const nextPrayerTime = moment(prayerTimesArray[0][1], 'HH:mm').add(1, 'day');
	const timeDiff = nextPrayerTime.diff(currentTime, 'minutes');
	return {
		prayer: prayerTimesArray[0][0],
		time: nextPrayerTime,
		timeDiff: timeDiff,
	};
}
