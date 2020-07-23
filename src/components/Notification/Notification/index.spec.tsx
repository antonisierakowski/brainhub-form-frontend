import { render } from '@testing-library/react';
import React from 'react';
import { Notification } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<Notification id="123" />);
  expect(asFragment()).toMatchSnapshot();
});

// test if it renders notification based on given id / mocked selector
