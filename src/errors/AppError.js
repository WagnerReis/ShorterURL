export class AppError {
  constructor(message, statusCode = 404) {
    console.log(message)
    this.error = message
    this.statusCode = statusCode
  }
}
