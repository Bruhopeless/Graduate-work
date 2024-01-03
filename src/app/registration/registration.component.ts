import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceRegService } from '../service/service-reg.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  constructor(private userDb: ServiceRegService) {}
  
  form!: FormGroup;
  passType = 'password';
  passTypeRep = 'password';
  myControl = '';

  ngOnInit(): void {
    this.form = new FormGroup ({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pass: new FormControl('',  [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]),
      repPass: new FormControl ('', Validators.required)},
      { validators: this.passwordSame } as any
    );
  }

  passwordSame (formGroup: FormGroup):any {
    const password = formGroup.get('pass')?.value;
    const confirmPassword = formGroup.get('repPass')?.value;

    if (password === confirmPassword || (!password && !confirmPassword)) {
      return null;
    }
    return { 'passwordMismatch': true };
  }

  onSubmit() {
    
  }

  showPass() {
    if(this.passType === "password") {
      this.passType = "text";
    }
    else {
      this.passType = "password";
    }
  }

  showPassRep() {
    if(this.passTypeRep === "password") {
      this.passTypeRep = "text";
    }
    else {
      this.passTypeRep = "password";
    }
  }

  addUser() {
    this.userDb.addUsers({
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value,
      pass: this.form.get('pass')?.value,
      role: 'user'
    })
    .subscribe((data) => console.log(data));
  }
}
