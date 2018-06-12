import {Component, OnInit} from "@angular/core";
import {UsersService} from "../../service/users.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../interfaces";

@Component({
  selector: 'details-page',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})

export class DetailsPage implements OnInit {

  constructor(private userService: UsersService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  id: number;
  user: IUser;

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(data => {
      this.user = data;
    });
  }

}
