import { Component, OnInit } from '@angular/core';
import { SearchAdmin } from '../shared/search-admin.model';
import { Router } from "@angular/router";
import { SearchAdminService } from '../shared/search-admin.service';

@Component({
  selector: 'app-search-skill',
  templateUrl: './search-skill.component.html',
  styles: [
  ]
})
export class SearchSkillComponent implements OnInit {
  userlist:any;
  constructor(private router: Router,
    private searchAdminService: SearchAdminService) {
    this.userlist = [];
  }

  ngOnInit(): void {
    /*this.searchAdminService.GetSkillList().subscribe((data: any) => {
      debugger;
      data.forEach((val: any) => { this.userlist.push(new SearchAdmin(val)) });
    });*/
  }

}
