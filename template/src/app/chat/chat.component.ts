import {Component, OnInit} from '@angular/core';

declare var $;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  isChatOpen = false;
  isConvOpen = false;
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

  constructor() {
  }

  ngOnInit(): void {
  }

  showChatWindow(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  showConversation(id): void {
    this.isConvOpen = true;
  }

  showConversationsList(): void {
    this.isConvOpen = false;
  }
}
