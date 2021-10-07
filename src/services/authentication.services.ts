import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})

export class AuthenticationService {
    constructor(
        private http: HttpClient
    ) { }
    login(username: any, password: any) {
        const subject = this.http.post<any>('http://apihost.com/api/login', { username, password });
        return subject
            .pipe(map((user: any) => {
                console.log("User is",user)
                return user;
            }));
    }
}