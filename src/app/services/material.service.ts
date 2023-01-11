import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { material } from '../models/Material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private _url : string = 'https://localhost:7283/api/Material';

  constructor(private _httpClient : HttpClient) { }


  getAll() : Observable<material[]>{
    return this._httpClient.get<material[]>(this._url);
  }

  getById(id : string) : Observable<material> {
    return this._httpClient.get<material>(this._url+id);
  }

  create(mat : material){
    console.log(mat);
    return this._httpClient.post(this._url , mat);
  }
  update(mat : material , id : string)
  {
    return this._httpClient.put(this._url+id, mat);
  }

  delete(id : string){
    return this._httpClient.delete(this._url+id);

  }
}
