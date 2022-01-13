import { Component, OnInit } from '@angular/core';
import { SearchAdmin } from '../shared/search-admin.model';
import { Router } from "@angular/router";
import { SearchAdminService } from '../shared/search-admin.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
  ]
})
export class TestComponent implements OnInit {
  userlist: any;
  public testid:string="6";
 
  constructor(public service : SearchAdminService) {    
    this.userlist = [];
  }

  ngOnInit(): void {
    this.service.GetSkillList().subscribe((data: any) => {
      this.testid=data[0].Name;
      //debugger;
      //data.forEach((val: any) => { this.userlist.push(new SearchAdmin(val)) });      
    });
    console.log("Data called");
    console.log(this.testid);
  }

}
