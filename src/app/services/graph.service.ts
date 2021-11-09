import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { npmDepencies } from '../models/dependencies';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  http: any;

  constructor( private httpClient: HttpClient) { }

  getGrapgh(name: string, version: string): Observable<npmDepencies> {
    return this.httpClient.get<npmDepencies>(`${environment.npmRegistryURL}/${name}/${version}`)
      
  }
 
}
