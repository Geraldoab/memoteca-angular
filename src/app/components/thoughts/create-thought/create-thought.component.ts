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

  pensamento : Thought = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createThought() {
    this.service.create(this.pensamento).subscribe(()=> {
      this.router.navigate(['/listThoughts'])
    })
  }

  cancel() {
    this.router.navigate(['/listThoughts'])
  }
}
