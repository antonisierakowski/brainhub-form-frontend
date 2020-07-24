import { render } from '@testing-library/react';
import React from 'react';
import { ProgressIndicator } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<ProgressIndicator isActive={true} />);
  expect(asFragment()).toMatchSnapshot();
});
