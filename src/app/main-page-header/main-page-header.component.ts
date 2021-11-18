import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_PAGE_ENGLISH } from '../common/constants/main-page.constants';

@Component({
  selector: 'main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.scss'],
})
export class MainPageHeaderComponent implements OnInit {
  common_text = MAIN_PAGE_ENGLISH;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  main_logo_EVENT() {
    this.router.navigate(['']);
  }

  account_page_EVENT() {
    this.router.navigate(['large-component']);
  }

  mail_page_EVENT() {
    this.router.navigate(['medium-component']);
  }
}
