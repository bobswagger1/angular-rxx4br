import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';


@Injectable()
export class StatusService {

    constructor(private http: HttpClient) {}

    getOrders() {
       return this.http.get(`https://pizza-order--bobswagger.repl.co/api/getOrders`);
    }

    setStatus(item) {
        return this.http.post('https://pizza-order--bobswagger.repl.co/api/setStatus', item);
    }
}
