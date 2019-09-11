import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // view encapsulation
})
export class ServerElementComponent implements OnInit {
  // define element type (ts syntax for defining type)

  // Input is now going to use "srvElement" to bind to this property
  @Input("srvElement") element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { }

  ngOnInit() {
  }

}
