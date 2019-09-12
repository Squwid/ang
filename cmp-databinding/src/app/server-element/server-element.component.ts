import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // view encapsulation default
})
export class ServerElementComponent implements OnInit, OnChanges {
  // define element type (ts syntax for defining type)

  // Input is now going to use "srvElement" to bind to this property
  @Input("srvElement") element: {
    type: string,
    name: string,
    content: string
  };

  @Input() name: string;

  constructor() { 
    console.log("constructor called")
  }

  ngOnInit() {
    console.log("ngOnInit called")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!: " + changes)
  }

}
