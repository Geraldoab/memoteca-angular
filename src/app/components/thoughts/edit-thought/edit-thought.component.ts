import { Component, OnInit } from '@angular/core';
import { Thought } from '../Thought';
import { ThoughtService } from '../thought-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  selectedThought : Thought = {
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
    this.service.getById(parseInt(id!)).subscribe((t) => {
      this.selectedThought = t
    })
  }

  editThought() {
    this.service.edit(this.selectedThought).subscribe(() => {
      this.router.navigate(['/thoughts/all'])
    })
  }

  cancel() {
    this.router.navigate(['/thoughts/all'])
  }
}
