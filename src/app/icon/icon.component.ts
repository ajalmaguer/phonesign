import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ps-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() fontSize = 100;

  constructor() { }

  ngOnInit() {
  }

}
