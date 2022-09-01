import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.css']
})
export class ExperienceBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() edit!: boolean;
  @Input() data!: any;

  editing = false

}
