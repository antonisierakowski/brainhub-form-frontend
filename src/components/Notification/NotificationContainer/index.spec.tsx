import { render } from '@testing-library/react';
import React from 'react';
import { NotificationContainer } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<NotificationContainer />);
  expect(asFragment()).toMatchSnapshot();
});

// test if it renders notifications based on mocked selector
