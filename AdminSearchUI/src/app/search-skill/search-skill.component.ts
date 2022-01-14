import { Component, OnInit } from '@angular/core';
import { SearchAdmin } from '../shared/search-admin.model';
import { Router } from "@angular/router";
import { SearchAdminService } from '../shared/search-admin.service';
import { HttpClient } from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-skill',
  templateUrl: './search-skill.component.html',
  styles: [
  ]
})
export class SearchSkillComponent implements OnInit {
  isValidFormSubmitted = false;
  public userlist: SearchAdmin[]; 
  public testid:string="6";
  txtName:string='';
  txtCriteria:string='';
  txtassociateid:string='';
  searchName:string='';
  searchValue:string='';
 
  constructor(public http: HttpClient,public service : SearchAdminService,public fb: FormsModule) {    
    this.userlist = [];

  }

  onFormSubmit(form: NgForm) {
    /*this.isValidFormSubmitted = false;
    if(form.invalid){
     return;	
    } 	*/
    this.isValidFormSubmitted = true;
    this.txtName = form.controls['uname'].value;
    this.txtCriteria = form.controls['criteria'].value;
    this.txtassociateid=form.controls['uassociateid'].value;
    console.log("name"+this.txtName); 
    console.log("criteria"+this.txtCriteria);   
    console.log("associateid"+this.txtassociateid);    
    this.searchSkill();
 }

  ngOnInit(): void {
    /*this.service.GetSkillList().subscribe(data => this.userlist = data);  
    console.log("userlist"); 
    console.log(this.userlist);*/   
  }

  searchSkill():void{
    if(this.txtCriteria=="NAME")
    {
      this.searchName="NAME";
      this.searchValue=this.txtName;
    }
    else if(this.txtCriteria=="ASSOCIATEID")
    {
      this.searchName="ASSOCIATEID";
      this.searchValue=this.txtassociateid;
    }
    this.service.GetSkillList(this.searchName,this.searchValue).subscribe(data => this.userlist = data);  
    console.log("userlist"); 
    console.log(this.userlist);  

  }

}
