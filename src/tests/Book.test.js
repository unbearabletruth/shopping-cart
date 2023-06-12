import { render, screen } from '@testing-library/react';
import {Book} from '../components/Book';
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import Router from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));

describe('book', () => {
  describe('renders proper DOM elements', () => {
    test('renders book not found message', () => {
      jest.spyOn(Router, 'useParams').mockReturnValue({ id: '' })
      render(
        <MemoryRouter>
            <Book />
        </MemoryRouter>
        )
      expect(screen.getByText('Sorry, but the book is not found!')).toBeInTheDocument();
    });

    test('renders book', () => {
      jest.spyOn(Router, 'useParams').mockReturnValue({ id: 'Behave' })
      render(
        <MemoryRouter>
            <Book />
        </MemoryRouter>
        )
      expect(screen.getByRole("img", {name: "Behave"})).toBeInTheDocument();
    });
  });
});