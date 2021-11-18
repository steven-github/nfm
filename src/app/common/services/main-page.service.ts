import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, filter, delay } from 'rxjs/operators';
import { Customer, Hero } from 'src/app/customer';
import { CUSTOMERS, HEROES } from 'src/app/mock-customers';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor() { }

  // getCustomers(): Customer[] {
  //   return CUSTOMERS; 
  // }

  // getCustomers(): Observable<Customer[]> {
  //   const customers = of(CUSTOMERS);
  //   return customers.pipe(
  //     map((res: Customer[]) => { 
  //       console.log('res', res);
  //       return res
  //     })
  //   );
  //   // return customers;
  // }

  getCustomers(val: string, type: string): Observable<Customer[]> {
    const customers = of(CUSTOMERS);
    return customers.pipe(
      delay(500),
      map((customers: any[]) => 
        customers.filter(c => {
          if(type == 'email') {
            return c.partyEmail == val;
          }
          return c.nfmAccountId == val;
        })
      )
    );
  }

  // getCustomerByEmail(email: string): Observable<Customer[]> {
  //   const customers = of(CUSTOMERS);
  //   return customers.pipe(
  //     map((customers) => 
  //       customers.filter(c => {
  //         return c.partyEmail == email;
  //       })
  //     )
  //   );
  // }

  // getCustomerByAccountId(id: string): Observable<Customer[]> {
  //   const customers = of(CUSTOMERS);
  //   return customers.pipe(
  //     map((customers) => 
  //       customers.filter(c => {
  //         return c.nfmAccountId == id;
  //       })
  //     )
  //   );
  // }
}

