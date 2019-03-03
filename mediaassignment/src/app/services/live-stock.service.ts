import { Injectable } from '@angular/core';
import { WebsocketService } from "./websocket.service";
import { Observable, Subject } from "rxjs/Rx";

export interface Message {
  author: string;
  message: string;
}

@Injectable()
export class LiveStockService {

  public socketUrl: string = "ws://stocks.mnet.website";

  public oldStockData: any = [];
  public stockData: any = [];
  public data: Subject<any>;

  constructor(wsService: WebsocketService) {
    this.data = <Subject<Message>>wsService.connect(this.socketUrl).map(
      (response: any): Message => {
        return JSON.parse(response.data);
      }
    );
  }
}
