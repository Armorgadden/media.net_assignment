import { Injectable, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustErrorHandler implements ErrorHandler {

  constructor() {
  }

  handleError(error) {
    console.log(error);
  }
}