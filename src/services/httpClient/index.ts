import { BACKEND_DOMAIN } from '../../constants';
import * as Axios from 'axios';
import * as exceptions from './exceptions';
import { EventModel } from '../../store/request/model';
import { ApiResponse, StatusCode } from './types';

export const axiosInstance = Axios.default.create({
  baseURL: BACKEND_DOMAIN,
});

export class HttpClient {
  private static instance: HttpClient;
  private axiosInstance: Axios.AxiosInstance;

  private constructor() {
    this.axiosInstance = axiosInstance;
  }

  static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }

    return HttpClient.instance;
  }

  private throwBasedOnStatusCode(response: Axios.AxiosResponse) {
    switch (response.status) {
      case StatusCode.OK: {
        return response;
      }
      case StatusCode.UNPROCESSABLE_ENTITY: {
        throw new exceptions.ApiValidationError();
      }
      case StatusCode.INTERNAL_ERROR:
      default: {
        throw new exceptions.ApiInternalError();
      }
    }
  }

  private async post<TBody = any, TResponse = ApiResponse>(
    url: string, body?: TBody,
  ): Promise<TResponse> {
    try {
      const response = await this.axiosInstance.post(url, body);
      return response.data;
    } catch(error) {
      if (!error.response) {
        throw new exceptions.NoApiResponseError();
      }
      this.throwBasedOnStatusCode(error.response);
    }
  }

  submitEvent = async (event: EventModel): Promise<ApiResponse> => {
    const endpoint = '/event';
    return await this.post<EventModel>(endpoint, event);
  }

}

export default HttpClient.getInstance();
