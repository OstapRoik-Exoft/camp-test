import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Camp';

  subs = new Subscription();

  obs = new Observable<any>();

  users: any[];

  isContentLoaded = false;

  constructor(private readonly httpService: HttpService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private loadUsers(): void {
    this.subs = this.httpService.getUsers().subscribe(response => {
      this.users = response;

      this.isContentLoaded = true;
    });
  }

  public submit(): void {
    const user = {
      firstName: 'Ostap',
      id: 0
    };

    this.httpService.addUser(user).subscribe(response => {
      console.log(response);

      user.id = response.id;

      this.loadUsers();
    });
  }
}
