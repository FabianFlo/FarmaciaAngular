import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-cliente-crear',
  templateUrl: './cliente-crear.page.html',
  
})
export class ClienteCrearPage implements OnInit {

  formReg: FormGroup;

  constructor(private userService: UserService,
              private router: Router          
    ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/cliente-login']);
      })
      .catch(error => console.log(error));
  }

  ngOnInit() {
  }

  
}
