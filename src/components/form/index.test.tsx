import { render, getByTestId, fireEvent, getAllByTestId } from '@testing-library/react';
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

it('Кнопка удаления выполненных задач работает верно', () => {
  const { container } = render(<Form />);

  const clearBtn = getByTestId(container, 'btn-clear');

  const listItems = getAllByTestId(container, 'list-item');
  expect(listItems.length).toBe(4);

  fireEvent.click(clearBtn);

  const listItemsCleared = getAllByTestId(container, 'list-item');
  expect(listItemsCleared.length).toBe(3);
});
