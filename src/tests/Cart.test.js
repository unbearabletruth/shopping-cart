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
      />
  );
  expect(screen.queryAllByTestId('bookInCart').length).toBe(2);
  expect(screen.queryByText('Your cart is empty')).toBeNull();
});

test('removes book from cart', async () => {
  const user = userEvent.setup();
  render(
    <Cart
      cart={cart}
      remove={remove}
    />
  );

  const button = screen.getByRole('img', {name: "author1"})
  await user.click(button);
  expect(remove).toHaveBeenCalledTimes(1);
});

test('removes all books', async () => {
  const user = userEvent.setup();
  render(
    <Cart
      cart={cart}
      removeAll={removeAll}
    />
  );

  const button = screen.getByRole('button', {name: "remove all"})
  await user.click(button);
  expect(removeAll).toHaveBeenCalledTimes(1);
});

test('increment/decrement amount', async () => {
  const user = userEvent.setup();
  render(
    <Cart
      cart={cart}
      increase={increase}
      decrease={decrease}
    />
  );

  const buttonInc = screen.getByRole('button', {name: "inc title"})
  const buttonDec = screen.getByRole('button', {name: "dec title"})
  await user.click(buttonInc);
  await user.click(buttonDec);
  expect(increase).toHaveBeenCalledTimes(1);
  expect(decrease).toHaveBeenCalledTimes(1);
});

test('inputs amount', async () => {
  const user = userEvent.setup();
  render(
    <Cart
      cart={cart}
      change={change}
    />
  );

  const input = screen.getByTestId("title")
  await user.type(input, '5');
  expect(change).toHaveBeenCalledTimes(1);
});