import { Component, OnInit } from '@angular/core';
import { Thought } from '../Thought';
import { ThoughtService } from '../thought-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  currentThought: Thought = {
    id: 0,
    content: '',
    author: '',
    layout: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((thought) => {
      this.currentThought = thought
    })
  }

  deleteThought() {
    if(this.currentThought.id) {
      this.service.delete(this.currentThought.id).subscribe(() => {
        this.router.navigate(['/thoughts/all'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/thoughts/all'])
  }
}
