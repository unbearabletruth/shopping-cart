import { render, screen } from '@testing-library/react';
import Error404 from '../components/Error404';
import { MemoryRouter } from 'react-router-dom';

describe('Error404', () => {
    test('renders 404 error with link', () => {
        render(<MemoryRouter><Error404 /></MemoryRouter>);
        expect(screen.getByRole("link").textContent).toMatch(/Home/i);
        screen.getByText('404');
        screen.getByText('Sorry, but your page is not found');
    });
});