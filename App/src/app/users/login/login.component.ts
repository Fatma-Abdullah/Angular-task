import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUser = false;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }
  login() {
    if (this.authService.form.valid) {
      this.isUser = true;
      this.router.navigate(['/']);
    } else {
      console.log('invalid data');
    }

  }
}
