import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { STATES } from '../common/constants/main-page.constants';
import { MainPageService } from '../common/services/main-page.service';
import { Customer, CustomerByEmail } from '../customer';

@Component({
  selector: 'main-page',
  templateUrl: './main-page-component.component.html',
  styleUrls: ['./main-page-component.component.scss'],
})
export class MainPageComponent implements OnInit {
  showErrorMessage = false;
  userNotFound = false;
  showUserInfoSection = false;
  loading = false;
  panelOpenState = false;

  emailInput: string;
  accountInput: string;

  address: string;
  address2: string;
  lastName: string;
  city: string;
  selectedState: string;
  zipCode: number;
  phoneNumber: number;

  userInfo = [
    {
      email: 'bakhodur.marupov@nfm.com',
      accountInput: '123456789',
      fName: 'Bakhodur',
      lName: 'Marupov',
      address: '700 S 72nd St',
      address2: 'apt 316',
      city: 'Omaha',
      state: 'NE',
      zipCode: 68102,
      phoneNumber: 4021234567,
    },
  ];

  jointUserInfo = [
    {
      email: 'bakhodur.marupov@nfm.com',
      accountInput: '123456789',
      fName: 'Bakhodur',
      lName: 'Marupov',
      address: '700 S 72nd St',
      address2: 'apt 316',
      city: 'Omaha',
      state: 'NE',
      zipCode: 68102,
      phoneNumber: 4021234567,
    },
    {
      email: 'secondemail@nfm.com',
      accountInput: '123456789',
      fName: 'SecondFname',
      lName: 'secondLName',
      address: '700 S 72nd St',
      address2: 'Build a',
      city: 'Omaha',
      state: 'NE',
      zipCode: 68112,
      phoneNumber: 4025441234,
    },
  ];

  allStates = STATES;

  loadedUserInfo: any;
  emails: any;
  accounts: any;
  customers: Customer[] = [];
  customersById: Customer[] = [];
  searchType: string;

  constructor(private mainPageService: MainPageService) {
    this.accountInput = '';
    this.emailInput = '';

    this.lastName = '';
    this.address = '';
    this.address2 = '';
    this.city = '';
    this.selectedState = '';
    this.zipCode = 0;
    this.phoneNumber = 0;
    this.searchType = 'email';
  }

  ngOnInit(): void {
    // this.getCustomers();
  }

  getCustomers(): void {
    // this.customers = this.mainPageService.getCustomers();
    // console.log('customers', this.customers);
  }

  modelChangeFn(e: any, type: any) {
    if (type == 'email') {
      this.accountInput = '';
      return;
    }
    this.emailInput = '';
  }

  lookup_EVENT() {
    this.showUserInfoSection = true;
    this.userNotFound = false;
    this.loading = true;
    if (!this.accountInput && !this.emailInput) {
      this.showErrorMessage = true;
      this.showUserInfoSection = false;
      return;
    } else {
      this.showErrorMessage = false;
    }
    // this.loadedUserInfo = this.userInfo; // this object should be populated by backend response -- single user example
    // this.loadedUserInfo = this.jointUserInfo; // this object should be populated by backend response -- joint user example

    // const inputValue = this.emailInput ? this.emailInput : this.accountInput;
    this.searchType = this.emailInput ? 'email' : 'account';
    // this.mainPageService
    //   .getCustomers(inputValue, this.searchType)
    //   .subscribe((customers) => {
    //     // console.log('getCustomerByEmail', customers);
    //     if (customers.length == 0) {
    //       this.userNotFound = true;
    //     }
    //     this.customers = customers;
    //     this.loading = false;
    //   });



    if (this.emailInput) {
      this.mainPageService.getCustomerByEmail(this.emailInput).subscribe((emails) => {
        if (emails.length == 0) {
          this.userNotFound = true;
        }
        this.emails = emails;
        console.log('emails', emails);
        emails.map((e) => {
          let customers: any;
          const { nfmAccountId, pEmail } = e;
          const destructuring = {
            nfmAccountId,
            pEmail,
            customers
          };
          this.mainPageService.getCustomerByAccountId(e.nfmAccountId).subscribe((arg: any) => {
            destructuring.customers = arg;
            this.loading = false;
          });
          console.log('destructuring', destructuring);
        });
      });
    }

    if (this.accountInput) {
      this.mainPageService.getCustomerByEmailT(this.accountInput).subscribe((r) => {
        console.log('as', r);
      })
      this.mainPageService.getCustomerByAccountId(this.accountInput).subscribe((customers) => {
        if (customers.length == 0) {
          this.userNotFound = true;
        }
        this.customers = customers;
        this.loading = false;
      });
    }
  }

  getCustomerByAccountId(id: string) {
    console.log('ID:', id);
    this.mainPageService.getCustomerByAccountId(id).subscribe((customers) => {
      //   console.log('getCustomerByAccountId', customers);
      this.customersById = customers;
    });
  }

  update_EVENT() {
    console.log(
      'This is the request object should be sent to the backend to update the information in database',
      this.loadedUserInfo
    );
  }
}
