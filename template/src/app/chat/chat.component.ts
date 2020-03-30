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

  constructor() {
  }

  ngOnInit(): void {
    const color = localStorage.getItem('color');
    if (color) {
      this.currentColor = color;
    }
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
}
