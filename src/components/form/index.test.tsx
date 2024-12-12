import { render, getByTestId, fireEvent } from '@testing-library/react';
import Form from '.';

it('Счетчик оставшихся задач работает верно', () => {
  const { container } = render(<Form />);

  const counter = getByTestId(container, 'counter');
  expect(counter.querySelector('span')!.textContent).toBe('3 left');

  const firstListItemBtn = getByTestId(container, 'list-item-button-0');
  expect(firstListItemBtn.querySelector('input')?.checked).not.toEqual(true);

  fireEvent.click(firstListItemBtn);
  expect(firstListItemBtn.querySelector('input')?.checked).toEqual(true);

  expect(counter.querySelector('span')!.textContent).toBe('2 left');
});

// const li = getAllByTestId('list-item');
// expect(li.length).toEqual(4);
