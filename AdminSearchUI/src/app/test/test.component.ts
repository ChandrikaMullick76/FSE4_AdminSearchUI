import { Component, OnInit } from '@angular/core';
import { SearchAdmin } from '../shared/search-admin.model';
import { Router } from "@angular/router";
import { SearchAdminService } from '../shared/search-admin.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
  ]
})
export class TestComponent implements OnInit {
  public userlist: SearchAdmin[];
  public testid:string="6";
  
 
  constructor(public http: HttpClient,public service : SearchAdminService) {    
    this.userlist = [];
  }

  ngOnInit(): void {
    //this.service.GetSkillList().subscribe(data => this.userlist = data);  
    console.log("userlist"); 
    console.log(this.userlist);   
  }

}
