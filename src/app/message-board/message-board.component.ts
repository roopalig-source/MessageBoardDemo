import { Component, OnInit } from '@angular/core';
import { MessageBoardService } from './message-board.service';
import { Message } from '../message/message.model'

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent {

  constructor (private messageBoardService: MessageBoardService) { }

  msg : Message[];

  ngOnInit() {
  this.msg = this.messageBoardService.getAll();
  }

}
