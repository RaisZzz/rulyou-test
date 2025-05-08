export enum ErrorType {
  UNKNOWN_ERROR,
}

export class ErrorResponse {
  error: string;

  constructor(error: ErrorType) {
    this.error = Object.values(ErrorType)[error].toString();
  }
}
