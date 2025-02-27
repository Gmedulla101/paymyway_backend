export default class CustomApiError extends Error {
  statusCode: number
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode
  }
}
