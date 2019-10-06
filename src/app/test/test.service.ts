import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable()
export default class TestService {
    private http;
    constructor(http: HttpClient) {
        this.http = http;
    }

    fetchTodo() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    }
}