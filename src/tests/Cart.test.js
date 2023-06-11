import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';
import userEvent from "@testing-library/user-event";

const cart = [
  { image: 'smth', title: "title", author: "author", description: "description", amount: 2, price: 10, id: 1 },
  { image: 'smth1', title: "title1", author: "author1", description: "description1", amount: 1, price: 12, id: 2 },
];

  const increase = jest.fn();
  const decrease = jest.fn();
  const remove = jest.fn();
  const removeAll = jest.fn();
  const change = jest.fn();

test('renders books in cart', () => {
  render(
      <Cart
        cart={cart}
        increase={increase}
        decrease={decrease}
        remove={remove}
        removeAll={removeAll}
        change={change}
      />
  );
  expect(screen.queryAllByTestId('bookInCart').length).toBe(2);
  expect(screen.queryByText('Your cart is empty')).toBeNull();
});

test('removes book from cart', () => {
  render(
    <Cart
      cart={cart}
      increase={increase}
      decrease={decrease}
      remove={remove}
      removeAll={removeAll}
      change={change}
    />
  );

  const button = screen.getByRole('img', {name: "author1"})
  
  userEvent.click(button);

  expect(remove).toHaveBeenCalledTimes(1);
})