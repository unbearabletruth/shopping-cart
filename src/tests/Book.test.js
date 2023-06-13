import { render, screen } from '@testing-library/react';
import {Book} from '../components/Book';
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import Router from "react-router-dom";

jest.mock('../data', () => ([
    { image: 'smth', title: "Behave", author: "author", description: "description", amount: 1, price: 10, id: 1 },
  ]))

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));

const addToCart = jest.fn();

describe('book', () => {
  describe('renders proper DOM elements', () => {
    test('snapshot of page with book', () => {
      jest.spyOn(Router, 'useParams').mockReturnValue({ id: 'Behave' })
      const {container} = render(
        <MemoryRouter>
          <Book />
        </MemoryRouter>
      );
      expect(container).toMatchSnapshot();
    });

    test('snapshot of book not found', () => {
      jest.spyOn(Router, 'useParams').mockReturnValue({ id: '' })
      const {container} = render(
        <MemoryRouter>
          <Book />
        </MemoryRouter>
      );
      expect(container).toMatchSnapshot();
    });

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

  describe('component functionality', () => {
    test('increments/decrements amount to add', async () => {
      jest.spyOn(Router, 'useParams').mockReturnValue({ id: 'Behave' })
      const user = userEvent.setup();
      render(
        <MemoryRouter>
            <Book />
        </MemoryRouter>
        )
      const buttonInc = screen.getByRole('button', {name: "+"});
      const buttonDec = screen.getByRole('button', {name: "-"});
      const amountInput = screen.getByLabelText("Amount");
      await user.click(buttonInc);
      expect(amountInput).toHaveValue(2);
      await user.click(buttonDec);
      expect(amountInput).toHaveValue(1);
    });

    test('sets amount to add', async () => {
      jest.spyOn(Router, 'useParams').mockReturnValue({ id: 'Behave' })
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <Book/>
        </MemoryRouter>
      )
      const amountInput = screen.getByLabelText("Amount");
      await user.type(amountInput, "{backspace}5");
      expect(amountInput).toHaveValue(5);
    })

    test('adds to cart on button click', async () => {
      jest.spyOn(Router, 'useParams').mockReturnValue({ id: 'Behave' })
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <Book
            addToCart={addToCart}
          />
        </MemoryRouter>
      )
      const button = screen.getByRole('button', {name: "Add to cart"});
      await user.click(button);
      expect(addToCart).toHaveBeenCalledTimes(1);
    })
  });
});