import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['admin@ai4change.com', Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('logging in...');
    this.auth
      .signInWithEmailAndPassword(
        this.loginForm.value.email,
        this.loginForm.value.password
      )
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch((err) => {
        alert('Login Failed, check email and password');
      });
  }
}
