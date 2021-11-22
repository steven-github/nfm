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

  updateCustomers(form: any) {
    form.controls.forEach((form: any) => {
      if (form.status == 'VALID' && form.touched == true) {
        if (form.value.accountPartyType == 'Primary') {
          form.value.pEmail =
            form.value.pEmailId + ',' + form.value.pEmailString;
        }
        if (form.value.accountPartyType == 'Joint') {
          form.value.jEmail =
            form.value.jEmailId + ',' + form.value.jEmailString;
        }
        this._http
          .post<Customer[]>(`/save`, form.value)
          .pipe(catchError(this.errorHandler))
          .subscribe((response) => {
            console.log('response', response);
          });
      }
    });
    // const customers = of(CUSTOMERS);
    // return customers;
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error.');
  }
}
