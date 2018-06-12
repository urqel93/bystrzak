import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
  }
}
