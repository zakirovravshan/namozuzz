import { Theme } from '../Theme/Theme';
import './Apps.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Apps = () => {
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
							Applications
						</p>
						<Link
							style={{ display: 'flex', alignItems: 'center' }}
							to={'/settings'}>
							<FiSettings size={'22px'} color='#fff' />
						</Link>
					</div>

					<ul className='qibla__list'>
						<motion.li
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1,
								delay: 0.01,
								ease: [0, 1, 0.2, 1.01],
							}}
							className='qibla__items'>
							<Link style={{ textDecoration: 'none' }} to='/morning'>
								<div className='card__app'>
									<h3 className='card__title'>Tongi Zikrlar</h3>
									<div className='card__arrow'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											height={15}
											width={15}>
											<path
												fill='#fff'
												d='M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z'
											/>
										</svg>
									</div>
								</div>
							</Link>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1,
								delay: 0.01,
								ease: [0, 1, 0.2, 1.01],
							}}
							className='qibla__items'>
							<Link style={{ textDecoration: 'none' }} to='/evening'>
								<div className='card__app'>
									<h3 className='card__title'>Tungi Zikrlar</h3>
									<div className='card__arrow'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											height={15}
											width={15}>
											<path
												fill='#fff'
												d='M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z'
											/>
										</svg>
									</div>
								</div>
							</Link>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1,
								delay: 0.01,
								ease: [0, 1, 0.2, 1.01],
							}}
							className='qibla__items'>
							<Link style={{ textDecoration: 'none' }} to='/hadis'>
								<div className='card__app'>
									<h3 className='card__title'>Kun Hadisi </h3>
									<div className='card__arrow'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											height={15}
											width={15}>
											<path
												fill='#fff'
												d='M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z'
											/>
										</svg>
									</div>
								</div>
							</Link>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1,
								delay: 0.01,
								ease: [0, 1, 0.2, 1.01],
							}}
							className='qibla__items'>
							<div className='card__app'>
								<h3 className='card__title'>Makka Live </h3>
								
							</div>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1,
								delay: 0.01,
								ease: [0, 1, 0.2, 1.01],
							}}
							className='qibla__items'>
							<Link style={{ textDecoration: 'none' }} to='/todo'>
								<div className='card__app'>
									<h3 className='card__title'>Rejalar </h3>
									<div className='card__arrow'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											height={15}
											width={15}>
											<path
												fill='#fff'
												d='M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z'
											/>
										</svg>
									</div>
								</div>
							</Link>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1,
								delay: 0.01,
								ease: [0, 1, 0.2, 1.01],
							}}
							className='qibla__items'>
							<Link style={{ textDecoration: 'none' }} to='/qibla'>
								<div className='card__app'>
									<h3 className='card__title'>Qiblani aniqlash </h3>
									<div className='card__arrow'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											height={15}
											width={15}>
											<path
												fill='#fff'
												d='M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z'
											/>
										</svg>
									</div>
								</div>
							</Link>
						</motion.li>
					</ul>
				</div>
			</div>
		</div>
	);
};
