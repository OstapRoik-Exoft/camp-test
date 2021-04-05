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

  public getUsers2(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:7777/api/users');
  }

  public getUsers3(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:7777/api/users');
  }

  public getUsers4(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:7777/api/users');
  }

  public addUser(user): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/api/users', user);
  }

  public addUser2(user): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/api/users', user);
  }

  public addUser3(user): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/api/users', user);
  }

  public updateUser(user): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/api/users', user);
  }

  public updateUser2(user): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/api/users', user);
  }
}
