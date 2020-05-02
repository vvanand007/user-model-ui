import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetail = []
  constructor(private _userDetailService: UserDetailsService,
    private _router: Router) { }

  ngOnInit() {
    this._userDetailService.getUserDetail()
      .subscribe(
        res => console.log(res),
        err => {
          console.log(err);
          if (err.status === 403) {
            this._router.navigate(['/login'])
          }
        }
      )
  }

}
