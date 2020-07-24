import React from 'react';
import { EventForm } from './index';
import { render, RenderResult, fireEvent, wait } from '@testing-library/react';
import { RootComponent } from '../../root';
import { act } from 'react-dom/test-utils';

let renderResult: RenderResult;

beforeEach(() => {
  act(() => {
    renderResult = render(
      // @ts-ignore
      <RootComponent>
        <EventForm />
      </RootComponent>,
    );
  });
});

it('should match to generated snapshot', () => {
  expect(renderResult.asFragment).toMatchSnapshot();
});

it('should validate all fields on submit click', async () => {
  await act(() => {
    const submitButton = renderResult.getByText('Submit');
    console.log(submitButton);
    fireEvent.click(submitButton);
  });
});

// all integration tests

// click on date should open picker

// inputting invalid value shows error message for each field

// submit click validates all inputs
