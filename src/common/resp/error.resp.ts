export enum ErrorType {
  UNKNOWN_ERROR,
  USER_NOT_FOUND,
}

export class ErrorResponse {
  error: string;

  constructor(error: ErrorType) {
    this.error = Object.values(ErrorType)[error].toString();
  }
}
