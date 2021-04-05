import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:7777/api/users');
  }

  public addUser(user): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/api/users', user);
  }
}
