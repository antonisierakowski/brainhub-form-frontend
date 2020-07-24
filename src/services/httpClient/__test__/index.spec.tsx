import { __axiosInstance, HttpClient } from '../index';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as exceptions from '../exceptions';

const mock = new MockAdapter(__axiosInstance);

describe('HttpClient instance', () => {
  describe('getInstance method', () => {
    it('should return the same instance and instantiate axios only once', () => {
      const createAxiosInstanceSpy = jest.spyOn(Axios, 'create');
      const firstCallInstance = HttpClient.getInstance();
      const secondCallInstance = HttpClient.getInstance();
      expect(firstCallInstance).toBe(secondCallInstance);
      expect(createAxiosInstanceSpy).toHaveBeenCalledTimes(1);
    });

  });

  describe('instance\'s submitEvent method', () => {
    it('should call axios post method', async () => {
      mock.onPost('/event').reply(200, { message: 'ok' });
      const instance = HttpClient.getInstance();
      await instance.submitEvent(null);
      await expect(await instance.submitEvent(null))
        .toEqual({ message: 'ok' });
    });

    it('should throw NoApiResponseError if there\'s an error, but there\'s no response', async () => {
      mock.onPost('/event').networkError();
      const instance = HttpClient.getInstance();
      await expect(instance.submitEvent(null))
        .rejects
        .toThrow(new exceptions.NoApiResponseError());
    });

    it('should throw ApiValidationError if response status code is 422', async () => {
      mock.onPost('/event').reply(422);
      const instance = HttpClient.getInstance();
      await expect(instance.submitEvent(null))
        .rejects
        .toThrow(new exceptions.ApiValidationError());
    });

    it('should throw ApiInternalError if response status code is 500', async () => {
      mock.onPost('/event').reply(500);
      const instance = HttpClient.getInstance();
      await expect(instance.submitEvent(null))
        .rejects
        .toThrow(new exceptions.ApiInternalError());
    });

    it('should throw ApiInternalError if response status code is other than above but not 200', async () => {
      mock.onPost('/event').reply(404);
      const instance = HttpClient.getInstance();
      await expect(instance.submitEvent(null))
        .rejects
        .toThrow(new exceptions.ApiInternalError());
    });
  });
});
