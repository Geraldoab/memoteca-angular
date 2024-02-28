import { Component, OnInit } from '@angular/core';
import { Thought } from '../Thought';
import { ThoughtService } from '../thought-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  newThought : Thought = {
    content: '',
    author: '',
    layout: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createThought() {
    this.service.create(this.newThought).subscribe(()=> {
      this.router.navigate(['/thoughts/all'])
    })
  }

  cancel() {
    this.router.navigate(['/thoughts/all'])
  }
}
