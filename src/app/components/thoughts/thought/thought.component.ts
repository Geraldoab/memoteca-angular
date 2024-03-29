import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../Thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() currentThought : Thought = {
    id: 0,
    content: '',
    author: '',
    layout: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtWidth() : string {
    if(this.currentThought.content.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
