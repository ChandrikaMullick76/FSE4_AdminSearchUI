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
  radioSelected:string;
  txtName:string='';
  txtCriteria:string='';
  txtassociateid:string='';
  txtSkillName:string='';
  searchName:string='';
  searchValue:string='';
  skills: string[] = ['HTMLCSSJAVASCRIPT', 'ANGULAR', 'AspNetCore', 'REACT','RESTFUL','EntityFramework',
  'GIT','DOCKER','JENKINS','Azure','SPOKEN','COMMUNICATION','APTITUDE'];
 
  constructor(public http: HttpClient,public service : SearchAdminService,public fb: FormsModule) {    
    this.userlist = [];
    this.txtCriteria="NAME";
    this.radioSelected="NAME";
  }

  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = true;
    
    //this.isValidFormSubmitted = true;
    this.txtName = form.controls['uname'].value;
    this.txtCriteria = form.controls['criteria'].value;
    this.txtassociateid=form.controls['uassociateid'].value;
    this.txtSkillName=form.controls['uskill'].value;

    console.log("name"+this.txtName); 
    console.log("criteria"+this.txtCriteria);   
    console.log("associateid"+this.txtassociateid); 
    console.log("skill"+this.txtSkillName); 

     
    /*Validation part*/
    if(this.txtCriteria=="NAME")
    {
      if(this.txtName == "")
      {
        form.controls['uname'].invalid;
        alert("Name should not be blank");
        this.isValidFormSubmitted = false;
       
      }
    }
    else if(this.txtCriteria=="ASSOCIATEID")
    {
      if(this.txtassociateid == "")
      {
        form.controls['uassociateid'].invalid;
        alert("Associate Id should not be blank");
        this.isValidFormSubmitted = false;
        
      }
    }
    else if(this.txtCriteria=="SKILL")
    {
      if(this.txtSkillName == "")
      {
        form.controls['uskill'].invalid;
        alert("Associate Id should not be blank");
        this.isValidFormSubmitted = false;
        
        alert("Select any skill");
        this.isValidFormSubmitted = false;
       // return false;
      }
    }
    else
    {
       alert("Select any search criteria");
        this.isValidFormSubmitted = false;
       
    }


    if(this.isValidFormSubmitted == true)
    {
      this.searchSkill();
    }
    
   
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
    else if(this.txtCriteria=="SKILL")
    {
      this.searchName=this.txtSkillName;
      this.searchValue=this.txtSkillName;
    }
    this.service.GetSkillList(this.searchName,this.searchValue).subscribe(data => this.userlist = data);  
   
    console.log("userlist"); 
    console.log(this.userlist);  

  }

  reset() {
   // alert("Test4");
    this.txtName="";
    this.txtassociateid="";
    this.txtSkillName="";
  }

  

}
