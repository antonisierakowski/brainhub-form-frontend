import React from 'react';
import { EventForm } from "./index";
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { RootComponent } from "../../root";
import { act } from "react-dom/test-utils";

let renderResult: RenderResult;

beforeEach(() => {
  act(() => {
    renderResult = render(
      // @ts-ignore
      <RootComponent>
        <EventForm />
      </RootComponent>
    );
  })
})

it('should match to generated snapshot', () => {
  expect(renderResult.asFragment).toMatchSnapshot();
});

it('should validate all fields on submit click', () => {
  act(() => {
    const submitButton = renderResult.getByText('Submit')
    fireEvent.click(submitButton);

    expect
  });
});

// all integration tests

// click on date should open picker

// inputting invalid value shows error message for each field

// submit click validates all inputs
