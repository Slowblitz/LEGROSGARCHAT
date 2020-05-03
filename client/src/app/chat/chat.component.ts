import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatService} from '../services/chat-service.service';
import {WebsocketService} from '../services/websocket.service';

declare var $;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [WebsocketService, ChatService]
})

export class ChatComponent implements OnInit {
  @ViewChild('msgInput', null) msgInput: ElementRef;
  username = 'Inconnu';
  messages;
  isChatOpen = false;
  isConvOpen = false;
  isColorPickerOpen = false;
  currentColor = 'blue';
  title = 'Chat';
  conversations = [
    {
      _id: 1,
      name: 'Timidou'
    },
    {
      _id: 2,
      name: 'ElPadre'
    },
    {
      _id: 3,
      name: 'LeGrosGarcia'
    }
  ];

  constructor(private chat: ChatService) {
  }

  ngOnInit(): void {
    const color = localStorage.getItem('color');
    if (color) {
      this.currentColor = color;
    }
    this.username = localStorage.getItem('username');

    this.messages = this.chat.messages.subscribe(msg => {
      console.log(msg);
      $('.msg-box').append('<span>' + msg.user + ': ' + msg.text + '</span><br/>');
    });
  }

  showChatWindow(): void {
    this.isColorPickerOpen = false;
    this.isChatOpen = !this.isChatOpen;
  }

  showConversation(id): void {
    this.isConvOpen = true;
  }

  showConversationsList($event?): void {
    $event.stopPropagation();
    this.isConvOpen = false;
  }

  showColorPicker($event?): void {
    $event.stopPropagation();
    this.isColorPickerOpen = !this.isColorPickerOpen;
  }

  changeColor(color: string) {
    this.currentColor = color;
    localStorage.setItem('color', this.currentColor);
  }

  submitMessage($event?) {
    $event.preventDefault();
    const $msgInput = $('.msg-input');
    if ($msgInput.val().length > 0) {
      this.chat.sendMsg({
        user: this.username,
        msg: $msgInput.val()
      });
      $msgInput.val('');
    }
  }
}
