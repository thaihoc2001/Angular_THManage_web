import { Component } from '@angular/core';
import { NavService } from "./share/service/navbar/nav.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'THSociety-web';

  constructor(private navService: NavService) {
  }
}
