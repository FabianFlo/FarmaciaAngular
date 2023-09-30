import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.page.html',
  
})
export class ClienteLoginPage implements OnInit {

  formlogin: FormGroup;
  constructor( private userService: UserService,
               private router: Router
    ) 
  {
    this.formlogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }
  onSubmit(){
    this.userService.login(this.formlogin.value)
      .then(
        response => {
          console.log(response);
          this.router.navigate(['inicio'])
        }
      )
      .catch(error => console.log(error));
  }
  onClick(){
    this.userService.loginGoogle()
    .then(response => {

    })
    .catch(error => console.log(error));
  }
}
