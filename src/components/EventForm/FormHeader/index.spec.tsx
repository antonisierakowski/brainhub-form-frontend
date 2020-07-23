import { render } from '@testing-library/react';
import React from 'react';
import { FormHeader } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<FormHeader />);
  expect(asFragment()).toMatchSnapshot();
});
