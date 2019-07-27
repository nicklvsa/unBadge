import { Component, OnInit, ViewChild, ElementRef, Directive } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  @ViewChild('navBurger', {static: false, read: ElementRef}) navBurger: ElementRef;
  @ViewChild('navMenu', {static: false, read: ElementRef}) navMenu: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  constructor() { }

  ngOnInit() {
  }

}
