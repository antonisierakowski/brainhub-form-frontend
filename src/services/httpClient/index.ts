import { BACKEND_DOMAIN } from '../../constants';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { EventFormValues } from '../../components/EventForm';
import * as exceptions from './exceptions';

export enum StatusCode {
  OK = 200,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_ERROR = 500,
}

export interface ApiResponse<TBody> {
  status: StatusCode,
  response: TBody,
}

class HttpClient {
  private static instance: HttpClient;
  private axiosInstance: AxiosInstance;
  private readonly domain = BACKEND_DOMAIN;

  static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }

    return HttpClient.instance;
  }

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.domain,
    });
  }

  private throwBasedOnStatusCode(response: AxiosResponse) {
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

  private async post<TBody = any, TResponse = any>(
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

  async submitEvent(event: EventFormValues): Promise<void> {
    const endpoint = '/event';
    await this.post(endpoint, event);
  }

}

export default HttpClient.getInstance();
