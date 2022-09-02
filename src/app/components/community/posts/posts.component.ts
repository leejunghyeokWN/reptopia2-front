import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['../community.component.css', './posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() type = "";

  constructor() { }

  ngOnInit(): void {
  }

}
