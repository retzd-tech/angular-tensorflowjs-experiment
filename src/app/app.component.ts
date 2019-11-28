import {Component} from '@angular/core';
import 'node_modules/popper.js/dist/popper.min';
import 'node_modules/bootstrap/dist/js/bootstrap';
import 'node_modules/jquery';

import '../assets/js/poseDetector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tensor-test1';
  render = () => {
    console.log('rendering');
  }
}
