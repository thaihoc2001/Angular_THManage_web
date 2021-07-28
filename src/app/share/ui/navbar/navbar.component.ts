import { Component, OnInit } from '@angular/core';
import {NavService} from "../../service/navbar/nav.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor( private navService: NavService) { }

  ngOnInit(): void {
  }

  toggleSidebarPin(): void {
    this.navService.toggleSidebarPin();
  }
  toggleSidebar(): void {
    this.navService.toggleSidebar();
  }
}
