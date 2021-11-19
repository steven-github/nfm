if (this.emailInput) {
    this.mainPageService.getCustomers(this.emailInput, 'email').subscribe(customers => {
        console.log('getCustomerByEmail', customers);
        this.customers = customers
    });
}

if (this.accountInput) {
    this.mainPageService.getCustomers(this.accountInput, 'id').subscribe(customers => {
        console.log('getCustomerByAccountId', customers);
        this.customers = customers
    });
}


if (this.emailInput) {
    this.mainPageService.getCustomerByEmail(this.emailInput).subscribe(customers => {
        console.log('customers', customers);
        this.customers = customers
    });
}

if (this.accountInput) {
    this.mainPageService.getCustomerByAccountId(this.accountInput).subscribe(customers => {
        console.log('customers', customers);
        this.customers = customers
    });
}


getCustomerByEmail(email: string): Observable < Customer[] > {
    const customers = of(CUSTOMERS);
    return customers.pipe(
        delay(500),
        map((customers) =>
            customers.filter((c) => {
                const { nfmAccountId, partyEmail } = c;
                const picked = {
                    nfmAccountId,
                    partyEmail,
                    customers,
                };
                if (c.partyEmail == email) {
                    this.getCustomerByAccountId(c.nfmAccountId).subscribe(
                        (customers) => {
                            console.log('getCustomerByAccountId', customers);
                            picked.customers = customers;
                            this.resultsByEmail.push(picked);
                            console.log('this.resultsByEmail', this.resultsByEmail);
                        }
                    );
                }
                return c.partyEmail == email;
            })
        )
    );
}