import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(private http: HttpClient) { }

    getAll() {
        console.log("get all");
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }
}