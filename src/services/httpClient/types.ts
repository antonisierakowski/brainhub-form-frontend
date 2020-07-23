export enum StatusCode {
  OK = 200,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_ERROR = 500,
}

export interface ApiResponse<TBody = any> {
  status: StatusCode;
  response: TBody;
}
