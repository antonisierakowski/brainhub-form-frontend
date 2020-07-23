import { render } from '@testing-library/react';
import React from 'react';
import { Header } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
