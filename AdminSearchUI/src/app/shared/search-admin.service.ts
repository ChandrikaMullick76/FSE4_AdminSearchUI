import { SearchAdmin } from './search-admin.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchAdminService {

   //list: SearchAdmin[];
  constructor(private http: HttpClient) {  }
 // readonly baseURL = '/assets/data/userskills.json';
  //readonly baseURL ='http://localhost:20539/skill-tracker/api/v1/engineer/GetAllUserSkillProfiles';
 readonly baseURL = environment.baseURL;
  
  GetSkillList(name:string,value:string): Observable<SearchAdmin[]> {
    debugger;   
    console.log(this.baseURL);
    return this.http.get<SearchAdmin[]>(this.baseURL+"/"+name+"/"+value);
  }

 
}
