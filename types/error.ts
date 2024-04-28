export interface IFieldError {
  message: string;
  field: string;
}

export interface IErrorResult {
  errorMessages: IFieldError[];
}
