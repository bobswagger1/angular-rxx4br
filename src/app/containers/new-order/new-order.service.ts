import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';


@Injectable()
export class PizzaService {

    constructor(private http: HttpClient) {}

    getPizzaDetails() {
       return this.http.get(`https://pizza-order--bobswagger.repl.co/api/pizzaDetails`);
    }

    updateSummary(items) {
        return this.http.post('https://pizza-order--bobswagger.repl.co/api/pizzaSummary', items);
    }

    submitOrder(items) {
        return this.http.post('https://pizza-order--bobswagger.repl.co/api/submitOrder', items);
    }
}
