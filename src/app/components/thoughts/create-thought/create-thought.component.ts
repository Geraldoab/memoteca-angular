import { Component, OnInit } from '@angular/core';
import { Thought } from '../Thought';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  pensamento : Thought = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {
    alert("A new thought was created!")
  }

  cancel() {
    alert("Cancelled!")
  }
}
