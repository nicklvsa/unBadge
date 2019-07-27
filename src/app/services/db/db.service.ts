import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// need to import http utils

@Injectable({
  providedIn: 'root'
})
export class DBService {


  /*

    not using firebase for now...
    prob php backend

    (possibly convert to firebase in the future)

  */

  constructor(private router: Router) {
    // init connection to backend
  }

  // setup authentication endpoints

  googleAuth(): boolean {
    return false;
  }

  cleverAuth(): boolean {
    return false;
  }

  

  private authCache(item: string) {
    return (localStorage.getItem(item) != null) ? localStorage.getItem(item) : '';
  }


}
