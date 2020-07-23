import { render } from '@testing-library/react';
import React from 'react';
import { DateInputWithPicker } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<DateInputWithPicker name={'test'} label={'test'} />);
  expect(asFragment()).toMatchSnapshot();
});
