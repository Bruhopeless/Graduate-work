import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  passType = 'password';

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
}
