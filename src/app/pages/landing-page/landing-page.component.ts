import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ma-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  showMenu = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu = (!this.showMenu);
  }
}
