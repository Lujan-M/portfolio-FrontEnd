import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-block',
  templateUrl: './education-block.component.html',
  styleUrls: ['./education-block.component.css']
})
export class EducationBlockComponent implements OnInit {

  editing = false

  constructor() { }

  ngOnInit(): void {
  }

  @Input() edit!: boolean;
  @Input() data!: any;
}
