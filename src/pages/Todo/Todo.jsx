import React, { useState, useEffect } from 'react';
import './Todo.css';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { Loader } from '../../components/Loader/Loader';

export const Todo = () => {
	const navigate = useNavigate();

	const [todos, setTodos] = useState([]);

	// Получаем сохраненные данные из localStorage
	useEffect(() => {
		const storedTodos = localStorage.getItem('todos');
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []);

	// Сохраняем данные в localStorage при изменении списка дел
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	function addTodo() {
		const newTodo = prompt('Введите новое задание:');
		if (newTodo) {
			setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
		}
	}

	function toggleCompleted(id) {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	}

	function deleteTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	return (
		<div className='qibla'>
			<div className='quran'>
				<div className='quran__wrapper'>
					<div className='surah_header'>
						<button className='back__button' onClick={() => navigate(-1)}>
							<BiArrowBack color='white' size={'28px'} />
						</button>
						<p style={{ color: '#fff' }} className='surah__title'>
							Rejalar
						</p>
						<p style={{ color: 'transparent' }}>.</p>
					</div>

					<div
						style={{
							padding: '20px',
						}}
						className='qibla__frame'>
						<ul
							style={{
								width: '100%',
								borderRadius: '30px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'start',
								listStyle: 'none',
								maxHeight: '100vh',
								overflow: 'auto',
								paddingBottom: '210px',
							}}
							id='checklist'>
							{todos.length ? (
								todos.map((todo) => (
									<li
										key={todo.id}
										disabled={todo.completed}
										style={{
											width: '100%',
											display: 'flex',
											flexDirection: 'column',
											border: '0.5px solid #69d4ad',
											borderRadius: '16px',
											padding: '5px 10px',
											marginBottom: '5px',
										}}>
										<div
											style={{
												width: '100%',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between',
											}}>
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'startА',
												}}>
												<input
													onChange={() => toggleCompleted(todo.id)}
													defaultChecked={todo.completed}
													defaultValue={todo.id}
													name='r'
													type='checkbox'
													id={todo.id}
													disabled={todo.completed}
												/>
												<label htmlFor={todo.id}>{todo.text}</label>
											</div>
											<button
												style={{
													border: 'none',
													backgroundColor: 'transparent',
												}}
												onClick={() => deleteTodo(todo.id)}>
												<MdDeleteOutline size={'20px'} color='red' />
											</button>
										</div>
									</li>
								))
							) : (
								<Loader />
							)}
						</ul>

						<button
							style={{
								backgroundColor: '#69d4ad',
								fontSize: '24px',
								width: '50px',
								height: '50px',
								borderRadius: '50%',
								border: 'none',
								position: 'absolute',
								bottom: '20%',
								right: '5%',
								color: '#fff',
								boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px 0px',
							}}
							onClick={addTodo}>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
