import {
  render,
  RenderResult,
  fireEvent,
  prettyDOM,
  wait,
} from '@testing-library/react';
import React from 'react';
import { Notification } from '../index';
import { rootStateFixture } from '../../../../store/fixtures/rootStateFixture';
import { provideStore } from '../../../../store/utils';
import { createPreloadedStore } from '../../../../store';

const store = createPreloadedStore(rootStateFixture);

const testNotifications = rootStateFixture.notificationsState.notifications;
const testIds = testNotifications.map(notification => notification.id);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(
    provideStore(<Notification id={testIds[0]} />, store),
  );
  expect(asFragment()).toMatchSnapshot();
});

it('should display the right notification given specific id', () => {
  const notificationIndex = 1;
  const expectedNotificationText =
    testNotifications[notificationIndex].textContent;

  const { container } = render(
    provideStore(<Notification id={testIds[notificationIndex]} />, store),
  );
  expect(container.textContent).toEqual(expectedNotificationText);
});

// it('should close the notification', async () => {
//   const notificationIndex = 1;
//   const { container, getByTestId } = render(provideStore(<Notification id={testIds[notificationIndex]}/>, store))
//   const closeIcon = getByTestId(`closeIcon_${testIds[notificationIndex]}`)
//   // act(() => {
//   //   fireEvent.click(closeIcon)
//   // })
//   fireEvent.click(closeIcon)
//   // console.log(prettyDOM(container))
//   // await wait(() => {
//   //   expect(container).toBe(null);
//   // });
//   expect(container).toBe(null);
// })

describe('getIconType', () => {
  it('should return Done icon for notification type success', () => {});
  it('should return Error icon for notification type failure', () => {});
  it('should return Info icon for unexpected notification type', () => {});
});

// test if it renders notification based on given id / mocked selector
