import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data;

  setData(data){
      this.data = data;
  }

  getData(){
      return this.data;
  }

}
