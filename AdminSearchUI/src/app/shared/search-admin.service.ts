import { Injectable } from '@angular/core';
import { SearchAdmin } from './search-admin.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchAdminService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:20539/skill-tracker/api/v1/admin';
  

  GetSkillList(): any {
    debugger;     
    return this.http.get<any>('http://localhost:20539/skill-tracker/api/v1/engineer/GetAllUserSkillProfiles');
  }

 
}
