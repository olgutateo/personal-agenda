import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  // public removeData(key: string) {
  //   localStorage.removeItem(key);
  // }

  // public clearData() {
  //   localStorage.clear();
  // }

  // getData(key: string): any {
  //   return JSON.parse(localStorage.getItem(key));
  // }

  // setData(key: string, data: any): void {
  //   localStorage.setItem(key, JSON.stringify(data));
  // }
}
