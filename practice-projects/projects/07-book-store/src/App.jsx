import { useState } from 'react';
import Book from './components/Book';
import useBooks from './hooks/useBooks';
import ComboBox from './components/ComboBox';
import useFilters from './hooks/useFilters';

function App() {
	const { addToReadingList, removeFromReadingList } = useBooks();
	const [toggleReadingList, setToggleReadingList] = useState(false);
	const { filteredAvailableBooks, filteredReadingBooks, possibleGenres, setFilters } = useFilters({ genre: 'All' }, false);

	const filterGenre = (g) => {
		setFilters(f => ({ ...f, genre: g }));
	};

	return (
		<div className='relative min-h-screen px-8'>
			<div className="flex justify-between py-6">
				<h1 className='text-center font-bold text-6xl'>Reading List</h1>
				<button className={`z-50 ${toggleReadingList ? 'text-white' : ''}`} onClick={() => setToggleReadingList(t => !t)}>
					{
						toggleReadingList
							? <svg xmlns="http://www.w3.org/2000/svg" className="aspect-square w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M9 9v10a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-14" />
								<path d="M8 4a1 1 0 0 1 1 1" />
								<path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" />
								<path d="M13 13v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-10" />
								<path d="M5 8h3" />
								<path d="M9 16h4" />
								<path d="M14.254 10.244l-1.218 -4.424a1.02 1.02 0 0 1 .634 -1.219l.133 -.041l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.236 11.75" />
								<path d="M19.585 19.589l-1.572 .38c-.562 .136 -1.133 -.19 -1.282 -.731l-.952 -3.458" />
								<path d="M14 9l4 -1" />
								<path d="M19.207 15.199l.716 -.18" />
								<path d="M3 3l18 18" />
							</svg>
							: <svg xmlns="http://www.w3.org/2000/svg" className="aspect-square w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
								<path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
								<path d="M5 8h4" />
								<path d="M9 16h4" />
								<path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
								<path d="M14 9l4 -1" />
								<path d="M16 16l3.923 -.98" />
							</svg>
					}

				</button>
			</div>
			<div className="flex items-center my-6 gap-4">
				<input
					className='w-96 border-[1px] border-black p-1'
					type="text"
					name="title"
					id="title"
					placeholder='Harry Potter, 1984 or 978-0618640157 ...'
				/>

				<ComboBox
					id='genre-filter'
					label='Genre:'
					onChangeSelection={filterGenre}
					options={possibleGenres}
				/>
				<strong className='rounded-full p-3 bg-blue-400 text-white aspect-square'>{filteredAvailableBooks.length}</strong>
			</div>
			<main className="m-auto grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
				{
					filteredAvailableBooks?.map(b => {
						return <Book onClick={() => addToReadingList(b)} key={b.isbn} {...b} />;
					})
				}
			</main>
			<aside className={`flex flex-col gap-4 absolute top-0 right-0 w-96 px-12 pt-20 bg-black h-full overflow-y-scroll ${toggleReadingList ? '' : 'hidden'}`}>
				<strong className='rounded-full p-2 bg-red-400 text-white aspect-square ml-auto text-center'>{filteredReadingBooks.length}</strong>
				{
					filteredReadingBooks?.map(b => {
						return <Book onClick={() => removeFromReadingList(b)} key={b.isbn} {...b} reading={true} />;
					})
				}
			</aside>
		</div>
	);
}

export default App;
