import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  thisIsMyForm: FormGroup;
  // data = [
  //   { firstName: "one", middleName: "two", lastName: "three", addressLineOneText: "three", addressLineTwoText: "three", addressCityName: "three", addressStateProvinceCode: "three", addressPostalPlusFourCode: "three", addressCountryCode: "three", phoneWork: "three", phoneHome: "three", pEmail: "three", jEmail: "three" },
  // ];
  data: any

  constructor(private mainPageService: MainPageService, private formBuilder: FormBuilder) {
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
    this.thisIsMyForm = new FormGroup({
      formArrayName: this.formBuilder.array([])
    });
    // this.buildForm();
  }

  buildForm(data: any) {
    const controlArray = this.thisIsMyForm.get('formArrayName') as FormArray;
    // this.data = [
    //   { firstName: 'one', type: 'one' },
    //   { firstName: 'two', type: 'two' },
    //   { firstName: 'three', type: 'three' },
    // ];

    // console.log(controlArray.controls);
    // Object.keys(this.data).forEach((i: any) => {
    //   controlArray.push(
    //     this.formBuilder.group({
    //       firstName: new FormControl({ value: this.data[i].firstName, disabled: true }),
    //       type: new FormControl({ value: this.data[i].type, disabled: true }),
    //     })
    //   );
    // });


    Object.keys(data[0].customers).forEach((value, i, array) => {
      controlArray.push(
        this.formBuilder.group({
          firstName: new FormControl({ value: data[0].customers[i].firstName, disabled: true }),
          middleName: new FormControl({ value: data[0].customers[i].middleName, disabled: true }),
          lastName: new FormControl({ value: data[0].customers[i].lastName, disabled: true }),
          addressLineOneText: new FormControl({ value: data[0].customers[i].addressLineOneText, disabled: true }),
          addressLineTwoText: new FormControl({ value: data[0].customers[i].addressLineTwoText, disabled: true }),
          addressCityName: new FormControl({ value: data[0].customers[i].addressCityName, disabled: true }),
          addressStateProvinceCode: new FormControl({ value: data[0].customers[i].addressStateProvinceCode, disabled: true }),
          addressPostalPlusFourCode: new FormControl({ value: data[0].customers[i].addressPostalPlusFourCode, disabled: true }),
          addressCountryCode: new FormControl({ value: data[0].customers[i].addressCountryCode, disabled: true }),
          phoneWork: new FormControl({ value: data[0].customers[i].phoneWork, disabled: true }),
          phoneHome: new FormControl({ value: data[0].customers[i].phoneHome, disabled: true }),
          pEmail: new FormControl({ value: data[0].customers[i].pEmail, disabled: true }),
          jEmail: new FormControl({ value: data[0].customers[i].jEmail, disabled: true })
        })
      );
    });

    this.loading = false;
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
      this.emails = '';
      this.mainPageService.getCustomerByEmail(this.emailInput).subscribe(
        (response) => {
          console.log('getCustomerByEmail', response);
          //   if (response.length == 0) {
          //     this.userNotFound = true;
          //   }
          //   this.emails = response;
          //   this.loading = false;
          response.map((e: any) => {
            let customers: any;
            const { nfmAccountId, pEmail } = e;
            const destructuring = {
              nfmAccountId,
              pEmail,
              customers,
            };
            this.mainPageService
              .getCustomerByAccountId(e.nfmAccountId)
              .subscribe((arg: any) => {
                destructuring.customers = arg;
                console.log('destructuring', destructuring);
                this.emails = [destructuring];
                this.buildForm(this.emails);
                // this.loading = false;
              });
          });
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
      this.mainPageService.getCustomerByAccountId(this.accountInput).subscribe(
        (response) => {
          console.log('getCustomerByAccountId', response);
          if (response.length == 0) {
            this.userNotFound = true;
          }
          this.customers = response;
          this.loading = false;
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
      //   console.log('getCustomerByAccountId', customers);
      this.customersById = customers;
    });
  }

  updateEmailValue(email: any) {
    console.log('email', email);
  }

  toggleEdit(i: any) {
    const controlArray = this.thisIsMyForm.get('formArrayName') as FormArray;
    if (controlArray.controls[i].status === 'DISABLED') {
      controlArray.controls[i].enable()
    } else {
      controlArray.controls[i].disable()
    }
  }

  formControlState(i: any) {
    const controlArray = this.thisIsMyForm.get('formArrayName') as FormArray;
    return controlArray.controls[i].disabled
  }

  update_EVENT() {
    console.log(
      'This is the request object should be sent to the backend to update the information in database',
      this.loadedUserInfo
    );
    console.log(this.thisIsMyForm.value);
  }
}
