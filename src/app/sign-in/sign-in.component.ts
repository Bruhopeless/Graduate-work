import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceRegService, userModel } from '../service/service-reg.service';
import { RoleServiceService } from '../service/role-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private userDb: ServiceRegService, private userServ: RoleServiceService) {}

  form!: FormGroup;
  errorMess = false;
  

  ngOnInit(): void {
    this.form = new FormGroup ({
      email: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
  }

  onSubmit() {

  }

  userVerification() {
    this.userDb.getUsers()
               .subscribe((data) => {
                  for (let i = 0; i < data.length; i++) {
                    if (this.form.get('email')?.value === data[i].email && this.form.get('pass')?.value === data[i].pass) {
                      console.log(data[i]);
                      this.userServ.saveUser(data[i]);
                      this.errorMess = false;
                      break
                    }
                    else {
                      this.errorMess = true;
                    }
                  }
               });
  }
}
