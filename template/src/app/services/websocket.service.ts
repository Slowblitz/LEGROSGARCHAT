import { Injectable } from '@angular/core';
import * as socket_io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class WebsocketService {

  private socket;

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = socket_io(environment.ws_url);
    const observable = new Observable($observer => {
      this.socket.on('message', (data) => {
        console.log('Received message from Websocket Server');
        $observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    const observer = {
      next: (data: Object) => {
        this.socket.emit('message', data);
      }
    };
    return Rx.Subject.create(observer, observable);
  }
}
