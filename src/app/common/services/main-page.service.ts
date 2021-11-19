import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay, retry } from 'rxjs/operators';
import { Customer, CustomerByEmail } from 'src/app/customer';
import { CUSTOMERS } from 'src/app/mock-customers';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  constructor(private _http: HttpClient) { }

  getCustomerByEmail(email: string): Observable<Customer[]> {
    // return this._http
    //   .get<Customer[]>(`/email/${email}`);
    const customers = of(CUSTOMERS);
    return customers.pipe(
      delay(250),
      map((customers) => customers.filter((c) => c.partyEmail?.includes(email)))
    );
  }

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
