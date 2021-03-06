import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";
import {DataService} from "../data.service";

@Component({
  selector: 'app-SignIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login = "";
  passwordUser = "";
  x= 0;

  constructor(private route: Router,private dataService: DataService) {
  }

  rout(login: string, passwordUser: string) {

      login= this.login,
      passwordUser= this.passwordUser

    axios.post('http://localhost:1234/exect',  {
      login:login,
      password:passwordUser
    }
    )
      .then((response) => {
        if (response.status === 200) {
          this.route.navigate(['/cars'])
          this.x=0;
          this.dataService.addToken(response.headers["token"])
        }
      })
      .catch((error) => {
        this.x=1;
      });
  }

  signUp() {
    this.route.navigate(['/SignUp'])
  }

  ngOnInit(): void {
  }

  hand(event: any, login: string, passwordUser: string) {
    if(event.keyCode==13){
      this.rout(login,passwordUser)
    }

  }
}
