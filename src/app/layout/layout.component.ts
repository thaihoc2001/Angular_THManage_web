import { Component, OnInit } from '@angular/core';
import {NavService} from "../share/service/navbar/nav.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }
  getClasses(): any {
    return {
      'pinned-sidebar': this.navService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.navService.getSidebarStat().isSidebarToggeled
    };
  }
  toggleSidebar(): void {
    this.navService.toggleSidebar();
  }
}
