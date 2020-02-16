import { Component, OnInit, ViewChild, ElementRef, Directive } from '@angular/core';
import { DBService } from '../services/db/db.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  @ViewChild('navBurger', { read: ElementRef }) navBurger: ElementRef;
  @ViewChild('navMenu', { read: ElementRef }) navMenu: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  constructor(private db: DBService) {
    
  }

  ngOnInit() {

  }

}
