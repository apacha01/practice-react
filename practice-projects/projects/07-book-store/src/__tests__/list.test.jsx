import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../App.jsx';

describe('reading list book tests', async () => {
	it('adds a book to reading list', async () => {
		// render app
		render(<App />);

		// get add to list buttons on every book
		const buttons = await screen.findAllByText('Add to list');

		// check counters
		expect(screen.getByRole('available-books-counter').innerHTML).toBe('13');
		expect(screen.getByRole('reading-books-counter').innerHTML).toBe('0');

		// first book in list when first render
		expect(screen.getByRole('available-list').innerHTML).toContain('El Señor de los Anillos');
		expect(screen.getByRole('reading-list').innerHTML).not.toContain('El Señor de los Anillos');

		// press one (the first) button
		await userEvent.click(buttons[0]);

		// check updated counters
		expect(screen.getByRole('available-books-counter').innerHTML).toBe('12');
		expect(screen.getByRole('reading-books-counter').innerHTML).toBe('1');

		// check updated lists
		expect(screen.getByRole('available-list').innerHTML).not.toContain('El Señor de los Anillos');
		expect(screen.getByRole('reading-list').innerHTML).toContain('El Señor de los Anillos');
	});

	it('removes a book from reading list', async () => {
		// render app
		render(<App />);

		// get add to list buttons on every book
		const buttons = await screen.findAllByText('Remove from list');

		// check counters
		expect(screen.getByRole('available-books-counter').innerHTML).toBe('12');
		expect(screen.getByRole('reading-books-counter').innerHTML).toBe('1');

		// first book in list when first render
		expect(screen.getByRole('available-list').innerHTML).not.toContain('El Señor de los Anillos');
		expect(screen.getByRole('reading-list').innerHTML).toContain('El Señor de los Anillos');

		// press one (the first) button
		await userEvent.click(buttons[0]);

		// check updated counters
		expect(screen.getByRole('available-books-counter').innerHTML).toBe('13');
		expect(screen.getByRole('reading-books-counter').innerHTML).toBe('0');

		expect(screen.getByRole('available-list').innerHTML).toContain('El Señor de los Anillos');
		expect(screen.getByRole('reading-list').innerHTML).not.toContain('El Señor de los Anillos');
	});
});

describe('available books filters test', () => {
	it('types in the search bar an author', async () => {
		render(<App />);

		const searchBar = screen.getByLabelText('Title / Author / ISBN');

		await userEvent.type(searchBar, 'George');

		// check counter
		expect(screen.getByRole('available-books-counter').innerHTML).toBe('2');
		//check the actual list
		expect(screen.getByRole('available-list').childElementCount).toBe(2);

		await userEvent.clear(searchBar);
		await userEvent.type(searchBar, 'Juego de Tronos');

		// check counter
		expect(screen.getByRole('available-books-counter').innerHTML).toBe('1');
		// check the actual list
		expect(screen.getByRole('available-list').childElementCount).toBe(1);
		// check is that book in the list
		expect(screen.getByRole('available-list').innerHTML).toContain('Juego de Tronos');

	});

	it('selects a genre', async () => {
		// render app
		render(<App />);

		const genreSelector = screen.getByLabelText('Genre:');

		await userEvent.selectOptions(genreSelector, 'Zombies');

		// check if counter updated
		expect(screen.getByRole('available-books-counter').innerHTML).toBe('1');
		//check the actual list
		expect(screen.getByRole('available-list').childElementCount).toBe(1);
		// only zombie book in mock
		expect(screen.getByRole('available-list').innerHTML).toContain('Apocalipsis Zombie');
	});

	// it('select a min page of 50 and max page of 800', async () => {
	// 	// render app
	// 	render(<App />);

	// 	const pagesSelector = screen.getByLabelText('Pages');

	// 	fireEvent.change(pagesSelector, { target: { value: { min: 50, max: 800 } } });
	// });
});