import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceRegService, userModel } from '../service/service-reg.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  constructor(private userDb: ServiceRegService, private responsive: BreakpointObserver) {}
  
  form!: FormGroup;
  passType = 'password';
  passTypeRep = 'password';
  myControl = '';
  eyePassCheck = "visibility";
  eyePassCheck2 = "visibility";

  isMobile = false;

  ngOnInit(): void {

    // this.responsive.observe([Breakpoints.Web, Breakpoints.Handset])
    //   .subscribe(result => {

    //     console.log(1)

    //     const breakpoints = result.breakpoints;

    //     if (breakpoints[Breakpoints.Handset]) {
    //       console.log("screens matches Web");
    //       this.isMobile = true;
    //     } else if (breakpoints[Breakpoints.Web]) {
    //       console.log("screens matches Handset");
    //     }
    //     //мобильное устройство
    // });

    this.responsive.observe(Breakpoints.Tablet )
      .subscribe(result => {

        if (result.matches) {
          console.log("screens matches Tablet");
        }

  });

  this.responsive.observe(Breakpoints.Handset)
      .subscribe(result => {

        if (result.matches) {
          console.log("screens matches Handset");
        }

  });

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
      this.eyePassCheck = "visibility_off";
      this.passType = "text";
    }
    else {
      this.eyePassCheck = "visibility";
      this.passType = "password";
    }
  }

  showPassRep() {
    if(this.passTypeRep === "password") {
      this.eyePassCheck2 = "visibility_off";
      this.passTypeRep = "text";
    }
    else {
      this.eyePassCheck2 = "visibility";
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
    } as userModel)
    .subscribe((data) => console.log(data));
  }
}
