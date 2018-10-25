import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Cookie } from 'ng2-cookies/ng2-cookies';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url =  'https://api.themoviedb.org/3';
  private api_key = 'a98e4f423a8ab1cf4b2ce2624b052195';

  constructor(public http : HttpClient) { 
  }

  //fetching movies from API
  public searchFunction(query,pageNo?): Observable<any> {
    console.log(this.http.get(`${this.url}/search/movie?api_key=${this.api_key}&query=${query}&page=1&include_adult=true`))
    return this.http.get(`${this.url}/search/movie?api_key=${this.api_key}&query=${query}&page=${pageNo}&include_adult=true`);

  } // end of searchFunction function.

  //fetching details of particular movie
  public getDetailsFunction(id): Observable<any> {
    console.log(this.http.get(`${this.url}/movie/${id}?api_key=${this.api_key}&language=en-US`))
    return this.http.get(`${this.url}/movie/${id}?api_key=${this.api_key}&language=en-US`);

  } // end of getDetailsFunction function.
  

}
