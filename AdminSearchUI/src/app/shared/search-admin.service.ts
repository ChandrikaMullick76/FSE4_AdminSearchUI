import { SearchAdmin } from './search-admin.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
 //readonly baseURL = '/assets/data/userskills.json';
  //readonly baseURL ='http://localhost:20539/skill-tracker/api/v1/engineer/GetAllUserSkillProfiles';
 readonly baseURL = environment.baseURL;
//readonly baseURL ="https://skilltracker.azure-api.net/skill-tracker/api/v1/Admin";
  
  GetSkillList(name:string,value:string): Observable<any> {
    debugger;   
    console.log(this.baseURL+"/"+name+"/"+value);
    const options = this.PreparedOptions();
    return this.http.get<SearchAdmin[]>(this.baseURL+"/"+name+"/"+value,options);
    //return this.http.get<SearchAdmin[]>(this.baseURL+"/"+name+"/"+value);
  }

  PreparedOptions():any{

    let headers=new HttpHeaders();
    headers=headers
    .set("Content-Type","application/json")
    .set("Authorization", "BearerToken")
    .set("Ocp-Apim-Subscription-Key", "779c5756edeb43c4884c38418fdf9ed9")
    ;
    return {headers};
  }

 
}
