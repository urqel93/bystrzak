import {Component, OnInit} from "@angular/core";
import {IUser} from "../../interfaces";
import {UsersService} from "../../service/users.service";

@Component({
  selector: 'full-list-page',
  templateUrl: 'full-list.page.html',
  styleUrls: ['full-list.page.scss']
})
export class FullListPage implements OnInit {

  users: IUser[];

  constructor(public userService: UsersService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  cards = [{
    title: "Hello1",
    subtitle: "myfriend1",
    content: "long time no see1",
  }, {
    title: "Hello2",
    subtitle: "myfriend2",
    content: "long time no see2",
  }, {
    title: "Hello3",
    subtitle: "myfriend3",
    content: "long time no see3",
  }, {
    title: "Hello4",
    subtitle: "myfriend4",
    content: "long time no see4",
  }, {
    title: "Hello5",
    subtitle: "myfriend5",
    content: "long time no see5",
  }, {
    title: "Hello6",
    subtitle: "myfriend6",
    content: "long time no see6",
  }]

}
