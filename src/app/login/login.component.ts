import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = { email: "", password: "" }
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() { }

  loginUser = () => {
    console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem("token", res.token);
          this._router.navigate(['/user']);
        },
        err => {
          console.log("error occured", err.status);
          if (err.status === 401) {
            this.loginUserData.email = "";
            this.loginUserData.password = "";
            this._router.navigate(['/login']);
          }
        }
      )
  }

}
