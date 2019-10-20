import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';


@Injectable()
export class PizzaService {

    constructor(private http: HttpClient) {}

    getPizzaDetails() {
       return this.http.get(`https://KeyForthrightDegrees--five-nine.repl.co/api/pizzaDetails`);
    }

    updateSummary(items) {
        return this.http.post('https://KeyForthrightDegrees--five-nine.repl.co/api/pizzaSummary', items);
    }

    submitOrder(items) {
        return this.http.post('https://KeyForthrightDegrees--five-nine.repl.co/api/submitOrder', items);
    }
}
