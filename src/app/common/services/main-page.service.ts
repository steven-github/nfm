import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, delay, retry, catchError } from 'rxjs/operators';
import { Customer, CustomerByEmail } from 'src/app/customer';
import { CUSTOMERS } from 'src/app/mock-customers';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  constructor(private _http: HttpClient) {}

  getCustomerByEmail(email: string): Observable<any> {
    return this._http
      .get<Customer[]>(`/email/?email=${email}`)
      .pipe(catchError(this.errorHandler));
    const customers = of(CUSTOMERS);
    return customers.pipe(
      delay(250),
      map((customers) => customers.filter((c) => c.pEmail?.includes(email)))
    );
  }

  getCustomerByAccountId(id: string): Observable<any[]> {
    return this._http
      .get<Customer[]>(`/account/${id}`)
      .pipe(catchError(this.errorHandler));
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

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error.');
  }
}
