import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Customer, CustomerByEmail } from 'src/app/customer';
import { CUSTOMERS } from 'src/app/mock-customers';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  resultsByEmail: CustomerByEmail[] = [];
  //   nfmAccountId: string = '';
  //   partyEmail: string = '';
  //   customers: Customer[] = [];
  constructor(private _http: HttpClient) {}

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

  // getCustomerByEmailT2(email: string): Observable<any> {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   let baseURL = 'https://customerportal-sandbox-api.azurewebsites.net';

  //   return this._http.get(baseURL + '/getcustomerinfobyaccount/', { headers: headers, search: email });

  // }

  getCustomerByEmail(email: string): Observable<any> {
    console.log('email', email);
    return this._http.get<Customer[]>(`/email/${email}`);
  }

  //   getCustomerByEmail(email: string): Observable<Customer[]> {
  //     const customers = of(CUSTOMERS);
  //     return customers.pipe(
  //       delay(250),
  //       map((customers) => customers.filter((c) => c.partyEmail == email))
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
