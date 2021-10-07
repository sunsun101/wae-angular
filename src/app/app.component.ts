import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/services/authentication.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'hello-ng';
  pets = ['Bird', 'Cat', 'Dog', 'Fish', 'Rabbit']
  myPet = this.pets[0];

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  alertMessage: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  randomPet() {
    const randomInt = Math.round(Math.random() * (this.pets.length - 1));
    this.myPet = this.pets[randomInt];
  }

  ngOnInit() {

  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.alertMessage = null;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertMessage = {text:'Successful authentication!', cssClass:'alertSuccess'};
          this.loading = false;
        },
        error => {
          this.alertMessage = {text: 'Authentication failed!', cssClass:'alertFailure'};
          this.loading = false;
        });
  }
}
