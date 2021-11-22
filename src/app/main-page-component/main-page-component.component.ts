import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  updating = false;
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
  customersByEmail: CustomerByEmail[] = [];
  accounts: any;
  customers: Customer[] = [];
  customersById: Customer[] = [];
  searchType: string;
  myForm: FormGroup;

  constructor(
    private mainPageService: MainPageService,
    private formBuilder: FormBuilder
  ) {
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
    this.myForm = new FormGroup({
      formArray: this.formBuilder.array([]),
    });
    // this.buildForm();
  }

  buildForm(data: any) {
    this.myForm = new FormGroup({
      formArray: this.formBuilder.array([]),
    });
    const controlArray = this.myForm.get('formArray') as FormArray;
    Object.keys(data.customers).forEach((value, i, array) => {
      controlArray.push(
        this.formBuilder.group({
          NFMAccountId: new FormControl({
            value: data.customers[i].nfmAccountId,
            disabled: false,
          }),
          Id: new FormControl({
            value: data.customers[i].accountId,
            disabled: false,
          }),
          partyId: new FormControl({
            value: data.customers[i].partyId,
            disabled: false,
          }),
          partyTypeId: new FormControl({
            value: data.customers[i].partyTypeId,
            disabled: false,
          }),
          accountPartyType: new FormControl({
            value: data.customers[i].accountPartyType,
            disabled: false,
          }),
          partyTypeName: new FormControl({
            value: data.customers[i].partyTypeName,
            disabled: false,
          }),
          FirstName: new FormControl(
            {
              value: data.customers[i].firstName
                ? data.customers[i].firstName
                : '',
              disabled: false,
            },
            [Validators.required]
          ),
          MiddleName: new FormControl({
            value: data.customers[i].middleName
              ? data.customers[i].middleName
              : '',
            disabled: false,
          }),
          LastName: new FormControl({
            value: data.customers[i].lastName ? data.customers[i].lastName : '',
            disabled: false,
          }),
          dateOfBirth: new FormControl({
            value: data.customers[i].dateOfBirth
              ? data.customers[i].dateOfBirth
              : '',
            disabled: true,
          }),
          OccupationName: new FormControl({
            value: data.customers[i].occupationName
              ? data.customers[i].occupationName
              : '',
            disabled: true,
          }),
          EmployerName: new FormControl({
            value: data.customers[i].employerName
              ? data.customers[i].employerName
              : '',
            disabled: true,
          }),
          AddressLineOneText: new FormControl({
            value: data.customers[i].addressLineOneText
              ? data.customers[i].addressLineOneText
              : '',
            disabled: false,
          }),
          AddressLineTwoText: new FormControl({
            value: data.customers[i].addressLineTwoText
              ? data.customers[i].addressLineTwoText
              : '',
            disabled: false,
          }),
          AddressCityName: new FormControl({
            value: data.customers[i].addressCityName
              ? data.customers[i].addressCityName
              : '',
            disabled: false,
          }),
          AddressStateProvinceCode: new FormControl({
            value: data.customers[i].addressStateProvinceCode
              ? data.customers[i].addressStateProvinceCode
              : '',
            disabled: false,
          }),
          addressPostalPlusFourCode: new FormControl({
            value: data.customers[i].addressPostalPlusFourCode
              ? data.customers[i].addressPostalPlusFourCode
              : '',
            disabled: false,
          }),
          AddressCountryCode: new FormControl({
            value: data.customers[i].addressStateProvinceCode
              ? data.customers[i].addressStateProvinceCode
              : '',
            disabled: false,
          }),
          PhoneWork: new FormControl({
            value: data.customers[i].phoneWork
              ? data.customers[i].phoneWork
              : '',
            disabled: false,
          }),
          PhoneHome: new FormControl({
            value: data.customers[i].phoneHome
              ? data.customers[i].phoneHome
              : '',
            disabled: false,
          }),
          PhoneMobile: new FormControl({
            value: data.customers[i].phoneMobile
              ? data.customers[i].phoneMobile
              : '',
            disabled: false,
          }),
          pEmail: new FormControl({
            value: data.customers[i].pEmail ? data.customers[i].pEmail : '',
            disabled: false,
          }),
          pEmailId: new FormControl({
            value: data.customers[i].pEmail
              ? data.customers[i].pEmail.split(',')[0]
              : '',
            disabled:
              data.customers[i].accountPartyType != 'Primary' ? true : false,
          }),
          pEmailString: new FormControl({
            value: data.customers[i].pEmail
              ? data.customers[i].pEmail.split(',')[1]
              : '',
            disabled:
              data.customers[i].accountPartyType != 'Primary' ? true : false,
          }),
          jEmail: new FormControl({
            value: data.customers[i].jEmail ? data.customers[i].jEmail : '',
            disabled: false,
          }),
          jEmailId: new FormControl({
            value: data.customers[i].jEmail
              ? data.customers[i].jEmail.split(',')[0]
              : '',
            disabled:
              data.customers[i].accountPartyType != 'Joint' ? true : false,
          }),
          jEmailString: new FormControl({
            value: data.customers[i].jEmail
              ? data.customers[i].jEmail.split(',')[1]
              : '',
            disabled:
              data.customers[i].accountPartyType != 'Joint' ? true : false,
          }),
        })
      );
    });
    this.loading = false;
  }

  ngOnInit(): void {}

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

    this.searchType = this.emailInput ? 'email' : 'account';

    if (this.emailInput) {
      this.emails = [];
      this.mainPageService.getCustomerByEmail(this.emailInput).subscribe(
        (response) => {
          console.log('getCustomerByEmail', response);
          let customers = {
            nfmAccountId: response[0].nfmAccountId,
            email: this.emailInput,
            customers: response,
          };
          this.emails = [customers];
          this.buildForm(customers);
        },
        (error) => {
          console.log('error', error);
          this.userNotFound = true;
          this.loading = false;
          //   throw error;
        }
      );
    }

    if (this.accountInput) {
      this.customers = [];
      this.mainPageService.getCustomerByAccountId(this.accountInput).subscribe(
        (response) => {
          console.log('getCustomerByAccountId', response);
          let customers = {
            nfmAccountId: response[0].nfmAccountId,
            customers: response,
          };
          this.customers = response;
          this.buildForm(customers);
        },
        (error) => {
          console.log('error', error);
          this.userNotFound = true;
          this.loading = false;
          //   throw error;
        }
      );
    }
  }

  getCustomerByAccountId(id: string) {
    console.log('ID:', id);
    this.mainPageService.getCustomerByAccountId(id).subscribe((customers) => {
      this.customersById = customers;
    });
  }

  updateEmailValue(email: any) {
    console.log('email', email);
  }

  update_EVENT() {
    this.updating = true;
    let form = this.myForm.get('formArray');
    this.mainPageService.updateCustomers(form);
    setTimeout(() => {
      this.updating = false;
    }, 1500);
  }
}
