import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay, retry } from 'rxjs/operators';
import { Customer, CustomerByEmail } from 'src/app/customer';
import { CUSTOMERS } from 'src/app/mock-customers';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  constructor(private _http: HttpClient) {}

  getCustomerByEmail(email: string): Observable<Customer[]> {
    return this._http
      .get<any>('/email/', { params: { email: email } })
      .pipe(retry(3));
  }

  getCustomerByAccountId(id: string): Observable<Customer[]> {
    return this._http.get<Customer[]>(`/account/${id}`);
  }

  //   getCustomerByAccountId(id: string): Observable<Customer[]> {
  //     const customers = of(CUSTOMERS);
  //     return customers.pipe(
  //       delay(0),
  //       map((customers) =>
  //         customers.filter((c) => {
  //           return c.nfmAccountId == id;
  //         })
  //       )
  //     );
  //   }
}
