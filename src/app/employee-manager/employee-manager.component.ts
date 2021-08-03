import { Component, OnInit } from '@angular/core';
import {StaffService} from "../share/service/user/staff.service";

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.scss']
})
export class EmployeeManagerComponent implements OnInit {
  listStaff: any;
  constructor( private staffService: StaffService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void{
    this.staffService.getAllStaff().subscribe(
      res => {
        this.listStaff = res.body;
        console.log(this.listStaff);
      },
      error => {
        console.log(error);
      }
    )
  }
}
