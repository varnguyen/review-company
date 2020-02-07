import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/_services/chat.service';

@Component({
  selector: 'app-converstation',
  templateUrl: './converstation.component.html',
  styleUrls: ['./converstation.component.scss']
})
export class ConverstationComponent implements OnInit {

  messages: any[];

  constructor(protected chatService: ChatService) {
    this.messages = this.chatService.loadMessages();
  }

  ngOnInit() {
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    const botReply = this.chatService.reply(event.message);
    if (botReply) {
      setTimeout(() => { this.messages.push(botReply); }, 500);
    }
  }

}
