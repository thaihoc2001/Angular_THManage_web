import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/auth/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( private tokenStorageService: TokenStorageService,
               private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.tokenStorageService.logout();
    this.router.navigate(['login']);
  }
}
