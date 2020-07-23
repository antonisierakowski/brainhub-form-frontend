import { render } from '@testing-library/react';
import React from 'react';
import { EmailInput } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<EmailInput name={'test'} label={'test'} />);
  expect(asFragment()).toMatchSnapshot();
});
