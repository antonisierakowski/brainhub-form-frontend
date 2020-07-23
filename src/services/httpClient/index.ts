import { BACKEND_DOMAIN } from "../../constants";
import { AxiosInstance, axios, AxiosResponse } from 'axios';
import { EventFormValues } from "../../components/EventForm";

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
      // todo config
    });
  }

  private async post<TBody = any, TResponse = any>(
    url: string, body?: TBody
  ): Promise<AxiosResponse<TResponse>> {
    return this.axiosInstance.post(url, body) // todo handle status codes
  }

  async submitEvent(event: EventFormValues): Promise<void> {
    const url = `${this.domain}/event`;
    await this.post(url, event);
  }

}

export default HttpClient.getInstance();
