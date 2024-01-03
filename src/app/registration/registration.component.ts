import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup ({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
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
}
