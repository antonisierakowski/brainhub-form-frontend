import { render } from '@testing-library/react';
import React from 'react';
import { NameInput } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<NameInput name="test" label="test" />);
  expect(asFragment()).toMatchSnapshot();
});
