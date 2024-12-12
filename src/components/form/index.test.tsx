import { render, getByTestId } from '@testing-library/react';
import Form from '.';

it('Счетчик оставшихся задач работает верно', () => {
  const { container, getAllByTestId } = render(<Form />);

  // const countValue = getByTestId(container, 'counter');

  const li = getAllByTestId('list-item');
  expect(li.length).toEqual(4);
});
