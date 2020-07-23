import { render } from '@testing-library/react';
import React from 'react';
import { DateInputWithPicker } from './index';

test('renders learn react link', () => {
  const { getByText } = render(
    <DateInputWithPicker
      label="testLabel"
      name="testName"
    />,
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
