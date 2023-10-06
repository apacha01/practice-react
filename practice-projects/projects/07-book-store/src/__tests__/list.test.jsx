import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App.jsx';

describe('reading list tests', async () => {
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
		fireEvent.click(buttons[0]);

		// check updated counters
		expect(screen.getByRole('available-books-counter').innerHTML).toBe('12');
		expect(screen.getByRole('reading-books-counter').innerHTML).toBe('1');

		// check updated lists
		expect(screen.getByRole('available-list').innerHTML).not.toContain('El Señor de los Anillos');
		expect(screen.getByRole('reading-list').innerHTML).toContain('El Señor de los Anillos');
	});
});