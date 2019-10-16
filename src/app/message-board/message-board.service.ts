import { Message } from '../message/message.model'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MessageBoardService {
    private messages: Message[] = []
    
    constructor() {
        this.add('Test 1', 'Test test test test...')
        this.add('Test 2', 'Test test test test...')
        this.add('Test 3', 'Test test test test...')
        this.add('Test 4', 'Test test test test...')
        this.add('Test 5', 'Test test test test...')
        this.add('Test 6', 'Test test test test...')
    }

    add(title: string, content: string) {
        const id = this.messages.length
        const imgUrl = 'https://picsum.photos/id/' + id + '/400/400'
        const message = new Message(id, title, content, imgUrl) 
        this.messages.push(message)
        
        return message
    }
    
    getAll() {
        return this.messages;
    }

    getById(id: number) {
        for (let m of this.messages) {
            if (m.id == id) {
                return m
            }
        }
        return null
    }
}