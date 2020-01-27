import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  showError(){
    alert("You have an error")
  }

  setItem(key, value){
      localStorage.setItem(key,JSON.stringify(value));
  }

  getItem(key){
      return JSON.parse(localStorage.getItem(key));
  }
}