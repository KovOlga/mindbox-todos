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

it('Фильтры работают верно', () => {
  const { container } = render(<Form />);

  const filterAllBtn = getByTestId(container, 'btn-all');
  const filterActiveBtn = getByTestId(container, 'btn-active');
  const filterCompletedBtn = getByTestId(container, 'btn-completed');

  fireEvent.click(filterActiveBtn);

  const listItemsActive = getAllByTestId(container, 'list-item');
  expect(listItemsActive.length).toBe(3);

  fireEvent.click(filterCompletedBtn);

  const listItemsCompleted = getAllByTestId(container, 'list-item');
  expect(listItemsCompleted.length).toBe(1);

  fireEvent.click(filterAllBtn);

  const listItemsAll = getAllByTestId(container, 'list-item');
  expect(listItemsAll.length).toBe(4);
});

it('Переносы в фильтрах работают верно', () => {
  const { container } = render(<Form />);

  const filterActiveBtn = getByTestId(container, 'btn-active');
  const filterCompletedBtn = getByTestId(container, 'btn-completed');

  fireEvent.click(filterActiveBtn);

  const listItemsActive = getAllByTestId(container, 'list-item');
  expect(listItemsActive.length).toBe(3);

  fireEvent.click(filterCompletedBtn);

  const listItemsCompleted = getAllByTestId(container, 'list-item');
  expect(listItemsCompleted.length).toBe(1);

  fireEvent.click(filterActiveBtn);

  const firstListItemBtn = getByTestId(container, 'list-item-button-0');
  expect(firstListItemBtn.querySelector('input')?.checked).not.toEqual(true);

  fireEvent.click(firstListItemBtn);

  const listItemsRefreshedActive = getAllByTestId(container, 'list-item');
  expect(listItemsRefreshedActive.length).toBe(2);

  fireEvent.click(filterCompletedBtn);

  const listItemsRefreshedCompleted = getAllByTestId(container, 'list-item');
  expect(listItemsRefreshedCompleted.length).toBe(2);
});
