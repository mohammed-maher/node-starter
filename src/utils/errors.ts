class SimpleError {
  detail: string;

  status: number;

  constructor(detail: string, status = 400) {
    this.detail = detail;
    this.status = status;
  }
}

// TODO: DELETE THIS WHEN YOU CAN
// eslint-disable-next-line import/prefer-default-export
export { SimpleError };
