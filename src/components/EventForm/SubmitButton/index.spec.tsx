import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { SubmitButton } from './index';
import userEvent from '@testing-library/user-event';
import React from 'react';

const cb = jest.fn();

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<SubmitButton onSubmit={cb} isSubmitting={false} />);
  expect(asFragment()).toMatchSnapshot();
});

it('should execute callback once clicked', () => {
  render(
    <SubmitButton onSubmit={cb} isSubmitting={false} />,
  );
  userEvent.click(screen.getByRole('button'));
  expect(cb).toHaveBeenCalledTimes(1);
});
