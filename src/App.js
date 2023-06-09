import Main from './pages/Main.js/Main';
import { Routes, Route, Router } from 'react-router-dom';
import { Bar } from './components/Bar/Bar';
import { Apps } from './components/Apps/Apps';
import { Quran } from './components/Quran/Quran';
import VibrationButton from './components/Vibration';
import { Surah } from './pages/Sura/Surah';
import { Morning } from './pages/Zikrs/Morning';
import { Evening } from './pages/Zikrs/Evening';
import { Qibla } from './pages/Qibla/Qibla';
import { Hadis } from './pages/Hadis/Hadis';
import { Todo } from './pages/Todo/Todo';
import Tasbeh from './pages/Tasbeh/Tasbeh';
import { Settings } from './pages/Settings/Settings';

function App() {
	return (
		<div>
			<input style={{ display: 'none' }} type='text' />
			<Routes>
				<Route index path='/' element={<Main />} />
				<Route path='/tasbeh' element={<Tasbeh />} />
				<Route path='/quran' element={<Quran />} />
				<Route path='/quran/surah/:number' element={<Surah />} />
				<Route path='/apps' element={<Apps />} />
				<Route path='/morning' element={<Morning />} />
				<Route path='/evening' element={<Evening />} />
				<Route path='/qibla' element={<Qibla />} />
				<Route path='/hadis' element={<Hadis />} />
				<Route path='/todo' element={<Todo />} />
				<Route path='/settings' element={ <Settings/>} />
			</Routes>
			<Bar />
		</div>
	);
}

export default App;
