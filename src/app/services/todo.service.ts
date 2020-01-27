import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/config';


const options = {
      withCredentials: true
    };
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(name,description){
    return this.http.post(`${baseUrl}create`,{
      name,
      description
    },options);
  }
  edit(id,name,description){
    return this.http.put(`${baseUrl}edit/${id}`,{
      name,
      description
    },options);
  }
  get(){
    return this.http.get(baseUrl,options);
  }
  getById(id){
    return this.http.get(`${baseUrl}todo/${id}`,options);
  }
  delete(id){
    return this.http.delete(`${baseUrl}delete/${id}`,options);
  }
}
