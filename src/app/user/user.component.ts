import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetail = []
  constructor(private _userDetailService: UserDetailsService) { }

  ngOnInit() {
    this._userDetailService.getUserDetail()
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
