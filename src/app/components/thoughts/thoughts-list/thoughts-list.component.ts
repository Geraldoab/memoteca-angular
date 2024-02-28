import { Component, OnInit } from '@angular/core';
import { Thought } from '../Thought';
import { ThoughtService } from '../thought-service.service';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css']
})
export class ThoughtsListComponent implements OnInit {

  thoughtsList : Thought[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.toList().subscribe((thoughtsList) => {
      this.thoughtsList = thoughtsList
    })
  }

}
