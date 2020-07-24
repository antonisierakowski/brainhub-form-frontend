import React from 'react';
import { EventForm } from './index';
import { render, RenderResult, fireEvent, wait } from '@testing-library/react';
import { createRootComponent } from '../../createRootComponent';
import { act } from 'react-dom/test-utils';
import { fieldIsRequiredMessage } from './validationMessages';
import {
  emailInvalid,
  nameTooLong,
  nameTooShort,
  validEventFixture,
} from './validationSchema.spec';
import httpClient from '../../services/httpClient/index';

let renderResult: RenderResult;

beforeEach(() => {
  renderResult = render(createRootComponent(<EventForm />));
});

describe('EventForm component', () => {
  it('should match to generated snapshot', () => {
    expect(renderResult.asFragment).toMatchSnapshot();
  });

  it('should validate all fields on submit click (with date being initially valid)', async () => {
    const submitButton = renderResult.getByTestId('submitButton');
    fireEvent.click(submitButton);
    await wait(() => {
      expect(renderResult.queryAllByText(fieldIsRequiredMessage)).toHaveLength(
        3,
      );
    });
  });

  it('should validate firstName field on blur', async () => {
    const firstNameInput = renderResult.container.querySelector(
      'input[name="firstName"]',
    );
    act(() => {
      fireEvent.input(firstNameInput, { target: { value: nameTooShort } });
      fireEvent.blur(firstNameInput);
    });
    await wait(() => {
      expect(renderResult.queryAllByText(fieldIsRequiredMessage)).toHaveLength(
        1,
      );
    });
  });

  it('should validate lastName field on blur', async () => {
    const lastNameInput = renderResult.container.querySelector(
      'input[name="lastName"]',
    );
    act(() => {
      fireEvent.input(lastNameInput, { target: { value: nameTooLong } });
      fireEvent.blur(lastNameInput);
    });
    await wait(() => {
      expect(renderResult.queryAllByText(fieldIsRequiredMessage)).toHaveLength(
        1,
      );
    });
  });

  it('should validate email field on blur', async () => {
    const emailInput = renderResult.container.querySelector(
      'input[name="email"]',
    );
    act(() => {
      fireEvent.input(emailInput, { target: { value: emailInvalid } });
      fireEvent.blur(emailInput);
    });
    await wait(() => {
      expect(renderResult.queryAllByText(fieldIsRequiredMessage)).toHaveLength(
        1,
      );
    });
  });

  it('should call httpClient method', async () => {
    const mockHttpCall = jest.fn();
    jest.spyOn(httpClient, 'submitEvent').mockImplementation(mockHttpCall);

    const firstNameInput = renderResult.container.querySelector(
      'input[name="firstName"]',
    );
    const lastNameInput = renderResult.container.querySelector(
      'input[name="lastName"]',
    );
    const emailInput = renderResult.container.querySelector(
      'input[name="email"]',
    );
    const dateInput = renderResult.container.querySelector(
      'input[name="date"]',
    );
    const submitButton = renderResult.getByTestId('submitButton');
    act(() => {
      fireEvent.input(firstNameInput, {
        target: { value: validEventFixture.firstName },
      });
      fireEvent.blur(firstNameInput);
      fireEvent.input(lastNameInput, {
        target: { value: validEventFixture.lastName },
      });
      fireEvent.blur(lastNameInput);
      fireEvent.input(emailInput, {
        target: { value: validEventFixture.email },
      });
      fireEvent.blur(emailInput);
      fireEvent.input(dateInput, { target: { value: validEventFixture.date } });
      fireEvent.blur(dateInput);
    });

    act(() => {
      fireEvent.click(submitButton);
    });

    expect(renderResult.queryAllByText(fieldIsRequiredMessage)).toHaveLength(0);

    await wait(() => {
      expect(mockHttpCall).toHaveBeenCalledTimes(1);
    });
  });
});
