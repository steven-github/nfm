import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, filter, delay } from 'rxjs/operators';
import { Customer, CustomerByEmail, Hero } from 'src/app/customer';
import { CUSTOMERS } from 'src/app/mock-customers';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  resultsByEmail: CustomerByEmail[] = [];
  //   nfmAccountId: string = '';
  //   partyEmail: string = '';
  //   customers: Customer[] = [];
  constructor() {}

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
        customers.filter((c) => {
          if (type == 'email') {
            return c.partyEmail == val;
          }
          return c.nfmAccountId == val;
        })
      )
    );
  }

  getCustomerByEmail(email: string): Observable<Customer[]> {
    const customers = of(CUSTOMERS);
    return customers;
    return customers.pipe(
      delay(500),
      map((customers) => {
        console.log('customers', customers);
        return customers.filter((c) => {
          const { nfmAccountId, partyEmail } = c;
          const picked = {
            nfmAccountId,
            partyEmail,
            customers,
          };
          if (c.partyEmail == email) {
            this.getCustomerByAccountId(c.nfmAccountId).subscribe(
              (customers) => {
                picked.customers = customers;
                this.resultsByEmail.push(picked);
                console.log('picked', picked);
              }
            );
          }
          return c.partyEmail == email;
        });
      })
    );
  }

  //   getCustomerByEmail(email: string): Observable<Customer[]> {
  //     const customers = of(CUSTOMERS);
  //     return customers.pipe(
  //       delay(500),
  //       map((customers) =>
  //         customers.filter((c) => {
  //           const { nfmAccountId, partyEmail } = c;
  //           const picked = {
  //             nfmAccountId,
  //             partyEmail,
  //             customers,
  //           };
  //           if (c.partyEmail == email) {
  //             this.getCustomerByAccountId(c.nfmAccountId).subscribe(
  //               (customers) => {
  //                 console.log('getCustomerByAccountId', customers);
  //                 picked.customers = customers;
  //                 this.resultsByEmail.push(picked);
  //                 console.log('this.resultsByEmail', this.resultsByEmail);
  //               }
  //             );
  //           }
  //           return c.partyEmail == email;
  //         })
  //       )
  //     );
  //   }

  getCustomerByAccountId(id: string): Observable<Customer[]> {
    const customers = of(CUSTOMERS);
    return customers.pipe(
      delay(0),
      map((customers) =>
        customers.filter((c) => {
          return c.nfmAccountId == id;
        })
      )
    );
  }
}
