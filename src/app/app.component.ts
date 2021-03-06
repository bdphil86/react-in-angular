import {Component, OnInit} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloComponent} from './hello-world/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  helloComponent: HelloComponent;

  ngOnInit() {
    this.helloComponent = ReactDOM.render(
      React.createElement(HelloComponent),
      document.getElementById('react-root')
    );

    console.log('app.component.ts::ngOnInit', 'helloComponent', this.helloComponent);
  }
}
